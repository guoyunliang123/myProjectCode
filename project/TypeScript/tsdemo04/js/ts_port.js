"use strict";
// ts 接口
// 定义标准
// 1、属性接口  对 json 的约束
/* function printlabe(labelInfo: { label: string}):void {
  console.log(labelInfo.label);
}

printlabe({label: 'zhangsan'}); */
// 对批量方法传入参数进行约束
// 接口：行为和动作的规范，对批量方法进行约束
/* interface FullName {
  firstName: string;
  secondName: string;
}

function printName(name: FullName) {
  // 必须传入对象，并且包含 firstName 和 secondName
  console.log(name.firstName + '--' + name.secondName);
}

function printInfo(info: FullName) {
  // 必须传入对象，并且包含 firstName 和 secondName
  console.log(info.firstName + info.secondName);
}

const obj = { // 不推荐
  firstName: 'zhang',
  secondName: 'san',
  age: 20
}
printName(obj);
printInfo({ // 推荐写法
  firstName: 'zhang',
  secondName: 'san',
}); */
// 接口的实现
// interface Config {
//   type: string;
//   url: string;
//   data?: string;
//   dataType: string;
// }
// function ajax(config: Config) {
//   const xhr = new XMLHttpRequest();
//   xhr.open(config.type, config.url, true);
//   xhr.send(config.data);
//   xhr.onreadystatechange = function() {
//     if( xhr.readyState == 4 && xhr.status == 200 ) {
//       console.log('成功');
//       if(config.dataType == 'json'){
//         console.log(JSON.parse(xhr.responseText));
//       } else {
//         console.log(xhr.responseText);
//       }
//     }
//   }
// }
// ajax({
//   type: 'get',
//   url: 'http://a.itying.com/api/productlist',
//   dataType: 'json'
// });
// 函数类型接口：对方法传入的参数以及返回值进行约束
// 加密函数类型接口
/* interface encrypt {
  (key: string, value: string):string;
}

const md5:encrypt = function(key:string, value:string):string {
  // 模拟操作
  return key + ': ' + value;
}

console.log(md5('name', 'zhangsan')); */
// 类类型接口  对类的约束  和  抽象类类似
/* interface Animal {
  name: string;
  play(str:string):void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  play(){
    console.log(this.name + 'play LoL');
  }
}

const d = new Dog('xiaoming: ');
d.play();

class Cat implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  play(str:string){
    console.log(this.name + str);
  }
}

const c = new Cat('xiaohua: ');
c.play('play wangzhe'); */
// 接口的扩展    接口可以继承接口
/* interface Animal {
  eat():void;
}

interface Person extends Animal {
  work():void;
}

class Web implements Person {
  public name:string;

  constructor(name:string) {
    this.name =name;
  }

  eat() {
    console.log(this.name + '喜欢吃');
  }

  work() {
    console.log(this.name + '喜欢工作');
  }
}

const w = new Web('小明');
w.eat();
w.work(); */
/* interface Animal {
  eat():void;
}

interface Person extends Animal {
  work():void;
}

class Programmer {
  public name:string;

  constructor(name:string) {
    this.name =name;
  }

  coding(code:string) {
    console.log(this.name + code);
  }
}

class Web extends Programmer implements Person {

  constructor(name:string) {
    super(name)
  }

  eat() {
    console.log(this.name + '喜欢吃');
  }

  work() {
    console.log(this.name + '喜欢工作');
  }
}

const w = new Web('小明');
w.coding('在 coding') */ 
