import {readdirSync, readFileSync} from 'fs';
import {join, extname, basename} from 'path';
import yaml from 'js-yaml';

let getPathsCache = null;

let production = process.env.NODE_ENV === 'production';
console.log("Use Cached files: " + production);

export async function getCategories() {
  if (getPathsCache !== null) {
    console.log("Using cached paths")
    return getPathsCache;
  } else {
    console.log("Cache not found, loading paths")
  }

  const categoriesPath = join(process.cwd(), './src/lib/paths');
  const categories = readdirSync(categoriesPath, {withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const results = await Promise.all(categories.map(async category => {
    const pathsPath = join(categoriesPath, category);

    // Load category metadata
    const categoryMetaPath = join(pathsPath, '_meta.yaml');
    const categoryMetaContents = readFileSync(categoryMetaPath, 'utf-8');
    const categoryMeta = yaml.load(categoryMetaContents);

    // Add slug to category metadata
    categoryMeta.slug = category;

    // Load paths and their metadata
    const paths = [];
    const files = readdirSync(pathsPath, {withFileTypes: true})
      .filter(dirent => dirent.isFile() && extname(dirent.name) === '.yaml' && dirent.name !== '_meta.yaml');

    for (const file of files) {
      const fileName = basename(file.name, '.yaml');
      const filePath = join(pathsPath, file.name);
      const fileContents = readFileSync(filePath, 'utf-8');
      const fileMeta = yaml.load(fileContents);
      fileMeta.slug = fileName; // Add slug to path metadata
      fileMeta.categorySlug = categoryMeta.slug; // Add categorySlug to path metadata
      paths.push(fileMeta);
    }

    return {
      ...categoryMeta,
      paths
    };
  }));

  if (production) {
    getPathsCache = results;
  }
  return results;
}


let getPathDataCache = null;

function initializeCache() {
  const pathsDir = join(process.cwd(), './src/lib/paths');
  const categories = readdirSync(pathsDir, {withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  getPathDataCache = {};

  for (const category of categories) {
    const categoryDir = join(pathsDir, category);
    const files = readdirSync(categoryDir, {withFileTypes: true})
      .filter(dirent => dirent.isFile() && dirent.name !== "_meta.yaml" && extname(dirent.name) === '.yaml');

    for (const file of files) {
      const fileName = basename(file.name, '.yaml');
      const filePath = join(categoryDir, file.name);
      const fileContents = readFileSync(filePath, 'utf-8');
      const data = yaml.load(fileContents);

      if (!getPathDataCache[category]) {
        getPathDataCache[category] = {};
      }

      getPathDataCache[category][fileName] = data;
    }
  }
}

export function getPathData(category, path) {
  if (!getPathDataCache || !production) {
    initializeCache();
  }

  return getPathDataCache[category] ? getPathDataCache[category][path] : null;
}
