// 通过 CommonJS 规范导入 show 函数
const show = require('./show.js');
// 通过 CommonJS 规范导入 CSS 模块
require('./main.css');

require('./main.scss')
// 执行 show 函数
show('忍者');
