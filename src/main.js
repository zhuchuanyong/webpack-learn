// 通过 CommonJS 规范导入 show 函数
const show = require('./js/show.js');
// 通过 CommonJS 规范导入 CSS 模块
require('./style/main.css');

require('./style/main-con.scss')
import './font/iconfont.css'
// 执行 show 函数
show('忍者');
