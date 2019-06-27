// @flow
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import reactSvg from 'rollup-plugin-react-svg';
import visualizer from 'rollup-plugin-visualizer';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    postcss({
      inject: false,
      plugins: [],
      extensions: ['.css'],
    }),
    reactSvg({
      // svgo options
      svgo: {
        plugins: [
          { removeTitle: false },
          {
            cleanupIDs: {
              prefix: {
                toString() {
                  this.counter = this.counter || 0;
                  return `id-${this.counter++}`;
                },
              },
            },
          },
        ],
        floatPrecision: 2,
      },

      // whether to output jsx
      jsx: true,

      // include: string
      include: null,

      // exclude: string
      exclude: null,
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    resolve(),
    commonjs(),
    visualizer(),
  ],
};
