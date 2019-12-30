"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbUrl = 'www.baidu.com';
function getData() {
    console.log('获取数据库的数据');
    return [
        {
            title: 'abc'
        },
        {
            title: 'def'
        }
    ];
}
exports.getData = getData;
function save() {
    console.log('数据保存成功');
}
exports.save = save;
// 该方法也可以暴露数据或方法
// export {dbUrl, getData, save}
// 一个模块中只能使用一次
// export default getData;  暴露
// import getData from ./modules/db; 引入
