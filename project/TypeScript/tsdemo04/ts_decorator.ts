// 1、类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视、修改或替换类定义，传入一个参数
// 不可以传参
// 类装饰器
/* function logClass(params:any) {
  console.log(params);

  // params 就是当前类
  params.prototype.apiUrl = 'www.baidu.com';

  params.prototype.run = function() {
    return '我是一个 run 方法';
  }
}

@logClass
class HttpClient {
  constructor() {

  }

  getData() {

  }
}
const http:any = new HttpClient;
console.log(http.apiUrl);
console.log(http.run()); */


// 2、装饰器工厂 可以传参
/* function logClass(params:string) {
  return function(target:any) {
    console.log(target);
    console.log(params);

    target.prototype.apiUrl = params;
  }
}

@logClass('http://www.itying.com/api')
class HttpClient {
  constructor() {

  }

  getData() {

  }
}
const http:any = new HttpClient;
console.log(http.apiUrl); */



/* function logClass(target:any) {
  console.log(target);

  return class extends target {
    apiUrl: any = '我是修改后的 apiUrl'

    getData() {
      this.apiUrl = this.apiUrl + '---';
      console.log(this.apiUrl);
    }
  }
}

@logClass
class HttpClient {
  public apiUrl: string | undefined;

  constructor() {
    this.apiUrl = '我是构造函数里面的 apiUrl';
  }

  getData() {
    console.log(this.apiUrl);
  }
}

const http = new HttpClient;
http.getData(); */


// 属性装饰器
// 属性装饰器表达式会在运行时当做函数被调用，传入两个参数
  /* 1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
  2、成员的名字 */

/*   // 类装饰器
  function logClass(params:string) {
    return function(target:any) {
      // console.log(target);
      // console.log(params);
    }
  }
  
  // 属性装饰器
  function logProperty(params:any) {
    return function(target:any, attr:any) {
      console.log(target);
      console.log(attr);

      target[attr] = params;
    }

  }

  @logClass('xxx')
  class HttpClient {

    @logProperty('http://itying.com')
    public url: any | undefined;
    constructor() {
  
    }
  
    getData() {
      console.log(this.url);
    }
  }

  const http = new HttpClient;

  http.getData(); */


  // 方法装饰器
  // 它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义

  // 方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
  /* 1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
  2、成员的名字。
  3、成员的属性描述符。 */
  
  // 方法装饰器 -- 1
  /* function get(params:any) {
    return function(target: any, methodsName: any, desc: any) {
      console.log(target);
      console.log(methodsName);
      console.log(desc);

      target.apiUrl = 'xxx';
      target.run = function() {
        console.log('run');
      }
    }
  }

  class HttpClient {

    public url: any | undefined;
    constructor() {
  
    }
    @get('http://www.itying.com')
    getData() {
      console.log(this.url);
    }
  }

  const http: any = new HttpClient;

  console.log(http.apiUrl);
  http.run(); */

  // 方法装饰器 -- 2

 /*  function get(params:any) {
    return function(target: any, methodsName: any, desc: any) {
      console.log(target);
      console.log(methodsName);
      console.log(desc.value);

      // 修改装饰器的方法，把装饰器方法里面传入的所有参数改为 string 类型

      // 1、保存当前的方法
      const oMethod = desc.value;

      desc.value = function(...args: any[]) {
        args = args.map((value) => {
          return String(value);
        })

        // console.log(args);

        oMethod.apply(this.args);
      }
    }
  }

  class HttpClient {

    public url: any | undefined;
    constructor() {
  
    }
    @get('http://www.itying.com')
    getData() {
      console.log('我是 getData 里面的方法');
    }
  }

  const http = new HttpClient;

  http.getData(123, 234); */


  // 方法参数装饰器 -- 3
