import {getPaths} from "$lib/builder/paths.js";

export async function GET() {
  const urls = [
    "https://promptbuilder.dev/",
  ]

  // Get all paths
  let categories = await getPaths();
  for (let category of categories) {
    urls.push(`https://promptbuilder.dev/${category.slug}`);
    for (let path of category.paths) {
      urls.push(`https://promptbuilder.dev/${category.slug}/${path.slug}`);
    }
  }

  const sitemap = generateSitemap(urls);

  return new Response(sitemap,
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    })
}

function generateSitemap(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="https://www.sitemaps.org/schemas/sitemap/0.9
    https://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${urls
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
