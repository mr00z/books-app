import { writable } from 'svelte/store';

const currentRoute = writable('/');

export default currentRoute;
