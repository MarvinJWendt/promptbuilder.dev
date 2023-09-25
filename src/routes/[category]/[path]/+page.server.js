import {getPathData, getPaths} from "$lib/builder/paths.js";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  return {
    category: params.category,
    path: params.path,
    categories: await getPaths(),
  }
}
