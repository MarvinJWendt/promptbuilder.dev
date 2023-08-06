import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import switchCase from 'svelte-switch-case';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({out: 'build',	precompress: false, envPrefix: '', polyfill: true})
	},
	preprocess: [vitePreprocess(), switchCase()]
};

export default config;
