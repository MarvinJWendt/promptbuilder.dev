import {getPaths} from "$lib/builder/paths.js";

/** @type {import('./$types').PageLoad} */
export async function  load({ params }) {
  let paths = await getPaths();
  return {
    category: paths.find(c => c.name === params.category),
  }
}
