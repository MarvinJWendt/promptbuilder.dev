import { readdirSync, readFileSync } from 'fs';
import { join, extname, basename } from 'path';
import yaml from 'js-yaml';

let getPathsCache = null;

export async function getPaths() {
  if (getPathsCache !== null) {
    return getPathsCache;
  }

  const categoriesPath = join(process.cwd(), './src/lib/paths');
  const categories = readdirSync(categoriesPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const results = await Promise.all(categories.map(async category => {
    const pathsPath = join(categoriesPath, category);
    const paths = readdirSync(pathsPath, { withFileTypes: true })
      .filter(dirent => dirent.isFile() && extname(dirent.name) === '.yaml')
      .map(dirent => basename(dirent.name, '.yaml'));

    return { name: category, paths };
  }));

  getPathsCache = results;
  return results;
}

let getPathDataCache = null;

// If node env is production, usePathDataCache is true
let usePathDataCache = process.env.NODE_ENV === 'production';
console.log("Use Cached files: " + usePathDataCache);

function initializeCache() {
  const pathsDir = join(process.cwd(), './src/lib/paths');
  const categories = readdirSync(pathsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  getPathDataCache = {};

  for (const category of categories) {
    const categoryDir = join(pathsDir, category);
    const files = readdirSync(categoryDir, { withFileTypes: true })
      .filter(dirent => dirent.isFile() && extname(dirent.name) === '.yaml');

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
  if (!getPathDataCache || !usePathDataCache) {
    initializeCache();
  }

  return getPathDataCache[category] ? getPathDataCache[category][path] : null;
}
