"use strict";
// 功能：定义一个操作数据的库，支持 MySQL Mssql MongoDB
// 要求1、MySQL Mssql MongoDB 功能一样 都有 add update delete get 方法
// 注意：约束统一的规范，以及代码重用
// 解决方案：需要约束方案所以要定义接口，需要代码重用所以需要泛型
// 1、接口：在面向对象的编程里，接口是一种规范的定义，它定义了行为和动作的规范
// 2、泛型：就是解决 类 接口 方法 的复用性
/* interface DBI<T> {
  add(info:T):boolean;
  upadte(info:T, id:number):boolean;
  delete(id:number):boolean;
  get(id:number):any[];
}

class MysqlDb<T> implements DBI<T> {
  add(info: T): boolean {
    console.log(info);

    return true;
  }
  upadte(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    const list = [
      {
        title: 'iPhone',
        price: 8888
      },
      {
        title: 'Mac Pro',
        price: 13888
      }
    ];
    return list;
  }
}

class Mssql<T> implements DBI<T> {
  add(info: T): boolean {
    console.log(info);

    return true;
  }
  upadte(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

class User {
  username: string | undefined;
  password: string | undefined;
}

const u = new User();
u.username = "张三";
u.password = "123456";

const oMysql = new MysqlDb<User>();
oMysql.add(u);

// 获取 User 表 ID=4 的数据
const data = oMysql.get(4);
console.log(data); */ 
