// 定义数组

// 1、第一种定义数组的方法

/* const arr: number[] = [11, 22, 33];

console.log(arr); */

// 2、第二种定义数组的方法

/* const arr:Array<number> = [11, 22, 33];

console.log(arr); */

// 元祖类型（tuple）属于数组的一种

/* const arr:[number, string] = [123, 'abc'];

console.log(arr); */

// 枚举类型

/* enum 枚举名 {
  标识符[=整型常数],
  标识符[=整型常数],
  ...
  标识符[=整型常数],
} */

/* enum Flag {success = 1, error = 2};

const s:Flag = Flag.success;

console.log(s); */


/* enum Color {red, yellow, 'blue', orange};

const c:Color = Color.red;
const b:Color = Color.blue;

console.log(c);
console.log(b); // 如果标识符没有赋值，它的值就是下标,默认从 0 开始，如果第一个标识符赋值，则从第一个标识符的值开始*/


// never 类型

let a:never;

a = (() => {
  throw new Error('错误');
})()
