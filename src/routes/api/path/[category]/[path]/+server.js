import { getPathData } from '$lib/builder/paths.js';
import { json } from '@sveltejs/kit';

export async function GET({params}) {
  const { category, path } = params;
  const pathData = await getPathData(category, path);
  return json(pathData)
}
