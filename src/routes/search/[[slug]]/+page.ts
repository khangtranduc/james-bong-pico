import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
 
export const prerender = 'auto';

export const load = (({ params }) => {
  return {slug: params.slug}
}) satisfies PageLoad;