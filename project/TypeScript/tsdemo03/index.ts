// 函数

// ES5 定义函数的方法
/* function run() {
  return 'run';
}

const run2 = function() {
  return 'run2';
} */

// ts 函数声明
/* function run():string {
  return 'run';
} */

// 匿名函数
/* const fun = function():number {
  return 123;
} */

// 传参
// age?: number 表示参数 age 是可选的
// 注意：可选参数必须配置到参数的最后面

/* function getInfo(name: string, age?: number):string {
  if(age){
    return `${name} -- ${age}`
  } else {
    return `${name} -- 年龄保密`
  }
}
console.log(getInfo('zhangsan', 20));
console.log(getInfo('zhangsan')); */

// 默认参数
// ts 中可以设置默认参数

/* function getInfo(name: string, age: number=20):string {
  if(age){
    return `${name} -- ${age}`
  } else {
    return `${name} -- 年龄保密`
  }
} */

// 剩余参数
// function sum(...result:number[]):number {
//   let sum = 0;
  
//   for(let i=0; i<result.length; i++) {
//     sum += result[i];
//   }
//   return sum;
// }
// console.log(sum(1, 2, 3, 4));

// ts 中的重载

/* function getInfo(name:string):string;
function getInfo(age:number):number;

function getInfo(str:any):any {
  if(typeof str === 'string') {
    return '我的名字是: ' + str;
  } else {
    return '我的年龄是: ' + str;
  }
}

console.log(getInfo('lisi'));
console.log(getInfo(20)); */

/* function getInfo(name:string):string;
function getInfo(name:string, age:number):number;

function getInfo(name:any, age?:any):any {
  if(age) {
    return '我的名字是: ' + name + '我的年龄是' + age;
  } else {
    return '我的名字是: ' + name;
  }
}

console.log(getInfo('lisi'));
console.log(getInfo('zhangsan', 20)); */