"use strict";
// ts 静态属性 静态方法
/* function Person() {
  this.run1 = function() { // 实例方法

  }
}

Person.name = '静态属性'; // 静态属性
Person.run2 = function() { // 静态方法

}
const p = new Person();

Person.run2(); // 静态方法的调用 */
/* class Person {
  public name:string;
  public age:number;

  static sex = '男'; // 静态属性定义
  constructor(name:string) {
    this.name = name;
  }

  run() { // 实例方法
    return `${this.name}在运动`;
  }
  work() { // 实例方法
    return `${this.name}在工作`;
  }

  static print() { // 静态方法   静态方法中无法直接调用类里面的属性
    return 'print' + this.age + this.sex;
  }
}

const p = new Person('zhangsan');
console.log(p.run());
console.log(p.work());
console.log(Person.print()); */
// 多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类都有不同的表现
// 多态属于继承
/* class Animal {
  name:string;

  constructor(name:string) {
    this.name = name;
  }

  eat() {
    console.log('eat 方法');
  }
}

class Dog extends Animal {
  constructor(name:string) {
    super(name);
  }

  eat() {
    return  this.name + 'eat meat';
  }
}

class Cat extends Animal {
  constructor(name:string) {
    super(name);
  }

  eat() {
    return  this.name + 'Eating rats';
  }
} */
// ts 中的抽象类：它是提供其它类继承的基类，不能直接被实例化
// 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
// abstract 抽象方法只能放在抽象类里面
// 抽象类和抽象方法用来定义标准 Animal 这个类要求它的子类必须包含 eat 方法
/* abstract class Animal {
  public name:string;
  
  constructor(name:string) {
    this.name = name;
  }
  abstract eat():any; // 抽象方法在子类中必须实现
}

class Dog extends Animal {
  // 抽象类的子类必须实现抽象类里面的抽象方法

  constructor(name:string) {
    super(name);
  }

  eat() {
    console.log(this.name + 'eat');
  }
}

const d = new Dog('dog');
d.eat(); */
