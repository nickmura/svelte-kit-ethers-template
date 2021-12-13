import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true
    })
  ],

  kit: {
    adapter: adapter(),
    files: { lib: 'src/lib', assets: 'src/assets' },

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
  }
};

export default config;