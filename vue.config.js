/* eslint-disable no-param-reassign */
const { defineConfig } = require('@vue/cli-service');

const ScriptSetup = require('unplugin-vue2-script-setup/webpack').default;
const Icon = require('unplugin-icons/webpack')({ compiler: 'vue2', scale: 1, defaultClass: 'inline-block' });
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

module.exports = defineConfig({
  parallel: false, // disable thread-loader, which is not compactible with this plugin
  transpileDependencies: true,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  pluginOptions: {
    windicss: {}
  },
  configureWebpack: {
    plugins: [
      ScriptSetup({
        reactivityTransform: true
      }),
      Icon,
      new WindiCSSWebpackPlugin()
    ]
  },
  chainWebpack(config) {
    // disable type check and let `vue-tsc` handles it
    config.plugins.delete('fork-ts-checker');
  },
  devServer: {
    port: 1888
  }
});
