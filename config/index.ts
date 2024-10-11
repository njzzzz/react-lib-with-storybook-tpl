import type { BuildOptions } from 'vite'

export const external = [
  'react',
  /^antd/,
  '@ant-design/icons',
  '@packages/example',
]

export const commonBuildOptions: BuildOptions = {
  minify: false,
  target: ['es6'],
  rollupOptions: {
    external,
    output: {
      exports: 'named',
    },
  },
  sourcemap: true,
}

export function getBuildOptions(entry: string): BuildOptions {
  return {
    lib: {
      entry,
      formats: ['cjs', 'es'],
      fileName: 'index',
    },
    ...commonBuildOptions,
  }
}
