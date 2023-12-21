/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		globals: false,
		environment: 'happy-dom',
		setupFiles: '.vitest/setup',
		include: ['**/test.{ts,tsx}'],
	},
	server: {
		watch: {
			usePolling: true,
		},
		host: true, // needed for the Docker Container port mapping to work
		strictPort: true,
		port: 3000, // replace this port with any number you want
	},
});
