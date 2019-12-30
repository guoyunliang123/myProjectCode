(() => {
  // 严格模式
  'use strict';

  // main :: () -> String
  // 定义一个 mian 方法，传入矩阵初始数值 5
  const main = () => unlines(map(unwords, spiral(5)));

  // spiral :: Int -> [[Int]]
  // 定义一个 spiral 方法
  const spiral = n => {
    //rows大于0的时候从start开始枚举，并且对于go函数进行递归回调继续循环数组，小于等于0的时候返回空数组，最后返回包含行数，列数和开始位置的数组go
    const go = (rows, cols, start) =>0 < rows ? [enumFromTo(start, start + pred(cols)),
    ...map(reverse, transpose(go(cols,pred(rows),start + cols)))] : [[]];
    return go(n, n, 0);
  };
  // GENERIC FUNCTIONS ----------------------------------

  // comparing :: (a -> b) -> (a -> a -> Ordering)
  const comparing = f => (x, y) => {
    const a = f(x), b = f(y);
    // a小于b则为-1，a大于b则为1，a等于b则为0
    return a < b ? -1 : (a > b ? 1 : 0);
  };

  // concatMap :: (a -> [b]) -> [a] -> [b]
  const concatMap = (f, xs) => 0 < xs.length ? (() => {
    // xs不是字符串类型则unit被赋予空数组
    const unit = 'string' !== typeof xs ? ([]) : '';
    //返回将xs数组中的每一个项进行连接的数组
    return unit.concat.apply(unit, xs.map(f))
  })() : [];

  // enumFromTo :: Int -> Int -> [Int]
  // 如果m小于等于n，对于m进行枚举
  const enumFromTo = (m, n) => m <= n ? iterateUntil(x => n <= x, x => 1 + x, m) : [];

  // iterateUntil :: (a -> Bool) -> (a -> a) -> a -> [a]
  //将m以及m+1存在数组vs中
  const iterateUntil = (p, f, x) => {
    const vs = [x]; let h = x;
    while (!p(h))(h = f(h), vs.push(h));
    return vs;
  };

  // length :: [a] -> Int
  //获取xs数组的长度
  const length = xs => xs.length;

  // map :: (a -> b) -> [a] -> [b]
  //map方法对数组xs中进行map循环，f是循环每一项的函数
  const map = (f, xs) => xs.map(f);

  //  Ordering: (LT|EQ|GT):
  //  GT: 1 (or other positive n)
  //    EQ: 0
  //  LT: -1 (or other negative n)

  // maximumBy :: (a -> a -> Ordering) -> [a] -> a
  // xs数组中有值的情况，从数组中的第1位开始向后取值，reduce中的第一个参数a是将要处理的原数组，x表示上一次调用回调时的返回值，调用f函数对于x和a进行比较，如果返回的数字大于0则返回x否则返回a；数组中没有值则返回undefined
  const maximumBy = (f, xs) => 0 < xs.length ? (xs.slice(1).reduce((a, x) => 0 < f(x, a) ? x : a, xs[0])) : undefined;

  // pred :: Enum a => a -> a
  // pred：x = x - 1
  // pred函数传入x返回x-1
  const pred = x => x - 1;

  // reverse :: [a] -> [a]
  // 如果xs是数组则从头开始排序，否则的话是字符串，分隔之后转化成数组
  const reverse = xs =>'string' !== typeof xs ? (xs.slice(0).reverse()) : xs.split('').reverse().join('');

  // replicate :: Int -> a -> [a]
  // 将类数组，其实就是一个对象{length:n}转换成数组，返回到x中
  const replicate = (n, x) => Array.from({length: n}, () => x);

  // transpose :: [[a]] -> [[a]]
  const transpose = tbl => {
    //获得对象转化成的数组gaps
    const gaps = replicate(length(maximumBy(comparing(length), tbl)), []),
    //将xs与从xs数组长度那位到最后的gaps数组进行连接之后进行循环出每一行
    rows = map(xs => xs.concat(gaps.slice(xs.length)), tbl);
    // 从第0行开始进行循环，最后返回行数
    return map((_, col) => concatMap(row => [row[col]], rows), rows[0]);
  };

  // unlines :: [String] -> String
  // 将数组转换为字符串
  const unlines = xs => xs.join('\n');

  // unwords :: [String] -> String
  // 将数组转换为字符串
  const unwords = xs => xs.join(' ');

  // MAIN ---
  return main();
})()