const path = require('path');
const CracoLessPlugin = require('craco-less');
// 形成绝对路径
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  webpack: {
    alias: { '@': resolve('src'), components: resolve('src/components') }
  }
};
