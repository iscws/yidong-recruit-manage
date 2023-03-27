const path = require('path');
// 形成绝对路径
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  webpack: {
    alias: { '@': resolve('src'), components: resolve('src/components') }
  }
};
