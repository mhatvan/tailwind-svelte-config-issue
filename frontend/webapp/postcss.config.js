const tailwindcss = require('tailwindcss');
const postcssNesting = require('postcss-nesting');

const cssnano = require('cssnano')({
  preset: ['default', { discardComments: { removeAll: true } }],
});

const autoprefixer = require('autoprefixer')();

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    autoprefixer,
    postcssNesting,
    ...(process.env.NODE_ENV === 'production' ? [cssnano] : []),
  ],
};
