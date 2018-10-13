import typescript from 'rollup-plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    name: 'BackUp',
    exports: 'named',
  },
  plugins: [
    typescript(),
  ],
};
