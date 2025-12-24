import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, fetch }) => {
	const { section } = params;
	
	try {
		// Fetch the markdown file from the static folder
		const response = await fetch(`/${section}.md`);
		
		if (!response.ok) {
			throw error(404, `Section ${section} not found`);
		}
		
		const markdown = await response.text();
		
		return {
			section,
			markdown
		};
	} catch (e) {
		throw error(404, `Could not load section ${section}`);
	}
};
