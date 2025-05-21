import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
    include: ['**/*.test.js'],
		environment: 'node',
		testTimeout: 10000,
	},
})
