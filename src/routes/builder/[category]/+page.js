/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
  return {
    category: params.category,
  }
}
