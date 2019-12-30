export const dbUrl = 'www.baidu.com';

export function getData():any[] {
  console.log('获取数据库的数据');

  return [
    {
      title: 'abc'
    },
    {
      title: 'def'
    }
  ]
}

export function save() {
  console.log('数据保存成功');
}

// 该方法也可以暴露数据或方法
// export {dbUrl, getData, save}

// 一个模块中只能使用一次
// export default getData;  暴露
// import getData from ./modules/db; 引入
