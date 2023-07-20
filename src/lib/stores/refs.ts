import { writable } from 'svelte/store';

const refs = writable<Refs>({});
export default refs;

export const addRef = (id: string, node: HTMLElement) => {
	refs.update((rs) => ({ ...rs, [id]: node }));
};

export const removeRef = (id: string) => {
	refs.update((rs) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { [id]: _, ...rest } = rs;
		return rest;
	});
};
