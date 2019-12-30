// 载入 fs 模块          在屏幕上打印，没有换行
var fs = require('fs'), print = require('sys').print;
// ./unixdict.txt 要读取的文件   ascii 文件的字符编码   function (err, data) 回调函数，用于接收文件的内容
fs.readFile('./unixdict.txt', 'ascii', function (err, data) {
  // 定义一个 is_ordered, 将传入的参数按从小到大(按 ASCII 码顺序)的顺序排序
  var is_ordered = function(word){return word.split('').sort().join('') === word;},
  ordered_words = data.split('\n').filter(is_ordered).sort(function(a, b){return a.length - b.length}).reverse(),
  longest = [], curr = len = ordered_words[0].length, lcv = 0;
  while (curr === len){
    longest.push(ordered_words[lcv]);
    curr = ordered_words[++lcv].length;
  };
  print(longest.sort().join(', ') + '\n');
});