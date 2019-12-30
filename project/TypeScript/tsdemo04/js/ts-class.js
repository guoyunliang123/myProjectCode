"use strict";
// ts 中定义类：
/* class Person {
  name: string;  // 属性，省略了 public 关键字

  constructor(n:string) {
    this.name = n;
  }

  // :void 表示没有返回值
  run():void {
    console.log(this.name);
  }
}
const p = new Person('zhangsan');
p.run(); */
/* class Person {
  name: string;

  constructor(name:string) {
    this.name = name;
  }

  getName():string {
    return this.name;
  }

  setName(name: string):void {
    this.name = name;
  }
}
const p = new Person('zhangsan');
console.log(p.getName());
p.setName('lisi');
console.log(p.getName()); */
// ts 中实现继承  extends  super
/* class Person {
  name:string;

  constructor(name:string) {
    this.name = name;
  }

  run():string {
    // return `$(this.name) In the sports`;
    return `${this.name}在运动`;
  }
}

// let p = new Person('王五');
// console.log(p.run());

class Web extends Person {
  constructor(name: string) {
    super(name);  // 初始化父类的构造函数
  }
}

const w = new Web('lisi');
console.log(w.run()); */
// ts 继承的探讨：父类的方法和子类的方法一致
/* class Person {
  name:string;

  constructor(name:string) {
    this.name = name;
  }

  run():string {
    // return `$(this.name) In the sports`;
    return `${this.name}在运动--父类`;
  }
}

// let p = new Person('王五');
// console.log(p.run());

class Web extends Person {
  constructor(name: string) {
    super(name);  // 初始化父类的构造函数
  }

  run():string {
    // return `$(this.name) In the sports`;
    return `${this.name}在运动--子类`;
  }

  work() {
    return `${this.name}在跳舞`
  }
}

const w = new Web('lisi');
console.log(w.work());
console.log(w.run()); */
// 类里面的修饰符  ts 中定义属性的时候提供了三种修饰符
/*
1、public: 公有 在类里面、子类、类外面都可以访问
2、protected: 保护类型  在类里面和子类里面可以访问，类外部不可以访问
3、private: 私有 在类里面可以访问，子类和类外面都无法访问
*/ 
