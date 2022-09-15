import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'build/index.js',
      format: 'cjs',
    },
    {
      file: 'build/index.es.js',
      format: 'es',
      exports: 'named',
    }
  ],
  plugins: [
    
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled'
    }),
    external(),
    resolve(),
    terser(),
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs(),
    postcss({
      plugins: [],
      minimize: true,
    }),
  ],
};