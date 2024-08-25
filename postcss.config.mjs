// postcss.config.mjs
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const config = {
  plugins: [
    tailwindcss('./tailwind.config.ts'), // Pass the configuration file if needed
    autoprefixer(),
  ],
};

export default config;
