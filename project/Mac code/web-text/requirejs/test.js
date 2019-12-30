//require.js的写法  AMD
require(["sort"], function(sort){
    var arr = [4, 1, 3, 11];
    //var arr = "asfaasd";
    console.log(sort(arr));
}); // 入口文件要用require  第一个参数：是一个数组(入口文件需要依赖的文件)  第二个参数：是一个function


//Sea.js的写法   CMD
// define(function(require){
//     var arr = [4, 1, 3, 11];
//     var sort = require("sort");
//     console.log(sort(arr));
// });