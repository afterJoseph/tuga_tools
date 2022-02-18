import { writable, get } from 'svelte/store';

export const isDark = writable(false);

export function ToggleDark() {
	isDark.update((dark) => !dark);
	document.querySelector('html').className = get(isDark) ? 'dark' : 'light';
}
