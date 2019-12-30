const str = "abcdef";
const str1 = "ghijklmn";


// 字符方法
console.log(str.charAt('1')); // b 返回指定位置字符
console.log(str.charCodeAt('b')); // 97  返回字符编码

// 操作方法
console.log(str.concat(str1)); // 将一个或多个字符串拼接   返回新字符串，不改变原字符串

// 不传第二个参数默认截到末尾
console.log(str.substring(1, 2)); // b  ①参数为负 -> 0  ②可选
console.log(str.slice(-1, 6)); // f ①参数为负则与字符串长度相加  ②可选
console.log(str.substr(2, 2)); // cd ①为负则与字符串长度相加，②参数为负转为0(可选)

// ES6
console.log(str.repeat(2)); // abcdefabcdef 参数代表循环次数，范围0-正无穷整数

// 位置方法
const str2 = "abcdeabghcd"
// ①要搜索的字符串 ②从哪开始(可选)
console.log(str2.indexOf('cd')); // 2 返回最开始出现的位置，找不到返回 -1
console.log(str2.lastIndexOf('ab')); // 5 返回最后出现的位置 找不到返回-1
// ES6
console.log(str2.includes('bc')); // true 包含子字符串返回 true， 不包含返回 false
console.log(str2.startsWith('cd')); // false 判断子字符串是否在头部
// ①要搜索的子字符串 ② str2 的长度
console.log(str2.endsWith('gh', 9)); // true 判断子字符串是否在尾部

// 修剪方法
const str3 = "   sas  "
// ES6
console.log(str3.trim()); // 删除一个字符串两边空格，返回新字符串

// 大小写转换
const str4 = "saSsdDDSSDss"
//  大写 -> 小写
console.log(str4.toLowerCase()); // sassdddssdss
console.log(str4.toLocaleLowerCase()); // sassdddssdss

// 小写 -> 大写
console.log(str4.toUpperCase()); //SASSDDDSSDSS
console.log(str4.toLocaleUpperCase()); //SASSDDDSSDSS

// 模式匹配方法
const str5 = "cat, sat, fat, bat";
const reg = /.at/;
// match 返回一个数组  参数 (正则 / RegExp 对象)
console.log(str5.match(reg)); // 返回数组
console.log(str5.match(reg)[0]); // cat

// search 返回字符串中第一个匹配项的索引，若没找到返回 -1
const str6 = "cawt, sat, fat, bat";
const reg2 = /at/;
console.log(str6.search(reg2)); // 7

// replace 参数：①一个 RegExp 对象 或者一个字符串，②一个字符串或者一个函数
// 如果只传入字符串, 则只会替换第一个子字符串
const str7 = "cat, sat, fat, bat";
console.log(str7.replace('at', 'ong')); // cong, sat, fat, bat

// 如果想替换所有的子字符串，则需要传入一个正则表达式，要制定全局 (g) 标志
console.log(str7.replace(/at/g, 'ong')); // cong, song, fong, bong

// split 参数：①用于分隔字符串的的分隔符  ②数字  返回一个数组
const str8 = 'red, blue, yellor, black';
console.log(str8.split(',')); //  ["red", " blue", " yellor", " black"]
console.log(str8.split(',', 2)); // ["red", " blue"]
console.log(str8.split(/[^\,]+/)); // ["", ",", ",", ",", ""]