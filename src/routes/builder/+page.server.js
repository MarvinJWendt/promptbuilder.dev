import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({url}) {
  // redirect /builder/... to /... for legacy reasons
  throw redirect(301, url.href.replace('/builder', ''));
}
