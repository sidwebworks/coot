import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['esm'],
  target: ['ES2020'],
  treeshake: 'smallest',
  dts: true,
  clean: true,
  env: {
    NODE_ENV: process.env.NODE_ENV || 'production',
  },
});
