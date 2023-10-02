import {getCategories} from "$lib/builder/paths.js";
import {error} from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  let categories = await getCategories();

  // Check if categories contains the requested category
  let found = false
  for (let category of categories) {
    if (category.slug === params.category) {
      found = true
    }
  }

  if (!found) {
    throw error(404, "Category not found")
  }

  return {
    categories: categories,
    slug: params.category,
  }
}
