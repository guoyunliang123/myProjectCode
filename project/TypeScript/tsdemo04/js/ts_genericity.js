"use strict";
// 泛型
// 解决 类 接口 方法的复用性，以及对不特定的数据类型的支持
// 泛型：可以支持不特定的数据类型  要求：传入的参数和返回的参数必须一致
// T 表示泛型  具体什么类型是调用这个方法是决定的
/* function getData<T>(value:T):T {
  return value;
}

console.log(getData<number>(123)); */
// 泛型类：比如有一个最小堆算法，需要同时支持返回数字和字符串两种类型。可通过类的泛型来实现
/* class Minclass {
  list:number[] = [];

  add(num:number) {
    this.list.push(num);
  }

  min():number {
    let minNum = this.list[0];

    for(let i=0; i<this.list.length; i++) {
      if(minNum > this.list[i]) {
        minNum = this.list[i];
      }
    }
    return minNum;
  }
}

const m = new Minclass();

m.add(122);
m.add(1);
m.add(12);
m.add(123);

console.log(m.min()); */
/* class Minclass<T> {
  list:T[] = [];

  add(value:T):void {
    this.list.push(value);
  }

  min():T {
    let minNum = this.list[0];

    for(let i=0; i<this.list.length; i++) {
      if(minNum > this.list[i]) {
        minNum = this.list[i];
      }
    }
    return minNum;
  }
}

const m1 = new Minclass<number>();

m1.add(122);
m1.add(1);
m1.add(12);
m1.add(123);

console.log(m1.min());

const m2 = new Minclass<string>();

m2.add('a');
m2.add('c');
m2.add('f');
m2.add('g');

console.log(m2.min()); */
// 泛型接口
/* interface Config {
  <T>(value: T):T;
}

const getData:Config = function<T>(value: T):T {
  return value;
}

console.log(getData<string>("zhangsan"));
console.log(getData<number>(123)); */
// 泛型接口
/* interface ConfigFn<T> {
  (value:T):T;
}

function getData<T>(value:T):T {
  return value;
}

const myGetData:ConfigFn<string> = getData;

console.log(myGetData('20')); */
// 把类作为参数来约束数据传入的类型
/* class User { // 映射数据库字段
  username: string | undefined;
  password: string | undefined;
}

class MysqlDb { // 用于操作数据库
  add(user:User):boolean {
    console.log(user);
    return true;
  }
}

const u = new User();
u.username = "zhangsan";
u.password = "123456";

const Db = new MysqlDb();
Db.add(u); */
/* class ArticleCate {
  title: string | undefined;
  desc: string | undefined;
  status: number | undefined;
}

class MysqlDb {
  add(info:ArticleCate):boolean {
    console.log(info);
    console.log(info.title);
    return true;
  }
}

const a = new ArticleCate();
a.title = "国内";
a.desc = "国内新闻";
a.status = 1;

const Db = new MysqlDb();
Db.add(a); */
// 操作数据库的泛型类
/* class MysqlDb<T> {
  add(info:T):boolean {
    console.log(info);
    return true;
  }

  update(info:T, id:number):boolean{
    console.log(info);
    console.log(id);

    return true;
  }
} */
// 给 User 表增加数据
// 1、定义一个 User 类，和数据库进行映射
/* class User {
  username: string | undefined;
  password: string | undefined;
}

const u = new User();
u.username = "zhangsan";
u.password = "123456";

const Db = new MysqlDb<User>();
Db.add(u); */
// 2、定义一个 ArticleCate 类，和数据库进行映射
/* class ArticleCate {
  title: string | undefined;
  desc: string | undefined;
  status: number | undefined;

  constructor(params: {
    title: string | undefined,
    desc: string | undefined,
    status?: number | undefined;

  }){
    this.title = params.title;
    this.desc = params.desc;
    this.status = params.status;
  }
} */
// 增加操作
/* const a = new ArticleCate({
  title: '分类',
  desc: '111'
});

const Db = new MysqlDb<ArticleCate>();
Db.add(a); */
/* const a = new ArticleCate({
  title: '分类2',
  desc: '222'
});
a.status = 0;

const Db = new MysqlDb<ArticleCate>();
Db.update(a, 3333); */ 
