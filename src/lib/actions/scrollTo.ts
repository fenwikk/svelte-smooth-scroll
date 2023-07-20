import refs from '$lib/stores/refs.js';
import { get } from 'svelte/store';

const scrollTo = (ref: string | HTMLElement) => {
	const anchor = typeof ref == 'string' ? get(refs)[ref] : ref;

	window.scrollTo({
		top: anchor.offsetTop,
		behavior: 'smooth'
	});
};
export default scrollTo;
