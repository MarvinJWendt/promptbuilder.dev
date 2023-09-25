import {getPaths} from "$lib/builder/paths.js";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  return {
    categories: await getPaths(),
    slug: params.category,
  }
}
