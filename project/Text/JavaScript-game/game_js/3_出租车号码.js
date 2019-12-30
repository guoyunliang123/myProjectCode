var n3s = [],
    s3s = {}
    // e 代表正立方体数字的最大值
    // 需要表示第2000-2006，所以 e = 1200， 如果只表示前25个，则 e = 80 即可
    for (var n = 1, e = 1200; n < e; n += 1) {
      n3s[n] = n * n * n
    }
    // a = a + 1
    for (var a = 1; a < e - 1; a += 1) {
      // a3(从1 -> e-2 ) 为 n 的三次方
      var a3 = n3s[a]
      for (var b = a; b < e; b += 1) {
        // b3(从1 -> e-1) 为 n 的三次方
        var b3 = n3s[b]
        // s3 为 两个三次方的和
        var s3 = a3 + b3, abs = s3s[s3]
        // 判断，将 a 和 b 添加进 abs
        if (!abs) s3s[s3] = abs = []
        abs.push([a, b])
      }
    }
 
    // i 为当前索引：i = 1 则代表的是第一个出租车
    var i = 0
    // s3 为每一个出租车的编号 ：第1-25，2000-2006
    for (var s3 in s3s) {
      var abs = s3s[s3]
      // if 的都是判断特殊条件
      // abs 的长度小于 2 则跳出本次循环  continue 仅结束本次循环
      if (abs.length < 2) continue
      i += 1
      // abs 的长度等于 2 或 i > 25 或 i < 2000 跳出循环
      if (abs.length == 2 && i > 25 && i < 2000) continue
      // 判断当超过 2006 时，结束
      if (i > 2006) break
      // 循环输出结果
      // 输出： 例：1: 1729
      document.write(i, ': ', s3)
      // 循环输出 例: 1^3 + 12^3 = 9^3 + 10^3
      for (var ab of abs) {
        document.write(' = ', ab[0], '<sup>3</sup>+', ab[1], '<sup>3</sup>')
      }
      // 换行
      document.write('<br>')
    }