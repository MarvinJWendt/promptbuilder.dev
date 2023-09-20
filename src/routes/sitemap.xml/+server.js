import {getPaths} from "$lib/builder/paths.js";

export async function GET() {
  // Get all paths
  const paths = await getPaths();

  // Array of all paths
  // Schema: https://promptbuilder.dev/{category}/{path}
  const allPaths = paths
    .map(category => category.paths.map(path => `https://promptbuilder.dev/${category.name}/${path}`))
    .flat();

  // Generate sitemap
  const sitemap = generateSitemap(allPaths);

  return new Response(sitemap,
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    })
}

function generateSitemap(paths) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="https://www.sitemaps.org/schemas/sitemap/0.9
    https://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${paths
    .map(
      path => `
        <url>
          <loc>${path}</loc>
        </url>
      `
    )
    .join('')}
  </urlset>`;
}
