import {getPaths} from "$lib/builder/paths.js";

/** @type {import('./$types').PageLoad} */
export async function load() {
  return {
    categories: await getPaths(),
  }
}
