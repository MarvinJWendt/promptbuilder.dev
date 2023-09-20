import {getPathData} from "$lib/builder/paths.js";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  return {
    category: params.category,
    path: params.path,
    pathData: await getPathData(params.category, params.path),
  }
}
