import {getCategories} from "$lib/builder/paths.js";
import {error} from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  let categories = await getCategories();

  // Check if path exists
  let found = false
  for (let category of categories) {
    if (category.slug === params.category) {
      for (let path of category.paths) {
        if (path.slug === params.path) {
          found = true
        }
      }
    }
  }

  if (!found) {
    throw error(404, "Prompt template not found")
  }

  return {
    category: params.category,
    path: params.path,
    categories: categories,
  }
}
