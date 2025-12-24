import { error } from '@sveltejs/kit';
import { getBlogContent } from '$lib/data/blogContent';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const { parentId, childId } = params;
	
	const content = getBlogContent(parentId, childId);
	
	if (!content) {
		throw error(404, {
			message: `Content not found for section ${parentId}.${childId}`
		});
	}
	
	return {
		parentId,
		childId,
		...content
	};
};
