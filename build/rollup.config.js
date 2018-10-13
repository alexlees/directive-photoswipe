import typescript from 'rollup-plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import reslove from 'rollup-plugin-node-resolve';
import commjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: {
    name: 'DirectivePhotoSwipe',
    exports: 'named',
  },
  plugins: [
    postcss({}),
    typescript({lib: ["es5", "es6", "dom"], target: "es5"}),
    reslove({}),
    commjs({}),
  ],
};
