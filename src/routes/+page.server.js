import {getCategories} from "$lib/builder/prompts.js";

/** @type {import('./$types').PageLoad} */
export async function load() {
  return {
    categories: await getCategories(),
  }
}
