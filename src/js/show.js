// 操作 DOM 元素，把 content 显示到网页上
function show (content) {
  const a = 123;
  console.log(a)
  window.document.getElementById('apptxt').innerText = '火影' + content;
}


// 通过 CommonJS 规范导出 show 函数
module.exports = show;
