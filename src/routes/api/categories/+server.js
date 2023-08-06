import { getPaths } from '$lib/builder/paths.js';
import { json } from '@sveltejs/kit';

export async function GET(request) {
  const paths = await getPaths();
  return json(paths)
}
