import { addRef, removeRef } from '$lib/stores/refs.js';

const smoothScroll = (node: HTMLElement, ref?: string) => {
	if (node.id == '' && !ref)
		throw new Error('You must provide an id or a ref to the element you want to scroll to.');

	addRef(ref || node.id, node);

	return {
		destroy() {
			removeRef(ref || node.id);
		}
	};
};
export default smoothScroll;
