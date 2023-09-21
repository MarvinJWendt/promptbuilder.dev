import {getPaths} from "$lib/builder/paths.js";

export async function GET() {
  const paths = [
    "https://promptbuilder.dev/",
  ]

  // Get all paths
  let tmp = await getPaths();
  tmp = tmp.map(category => category.paths.map(path => `https://promptbuilder.dev/${category.name}/${path}`)).flat()
  paths.push(...tmp);

  // Generate sitemap
  const sitemap = generateSitemap(paths);

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
