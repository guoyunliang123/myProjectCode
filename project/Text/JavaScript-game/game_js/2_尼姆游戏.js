// 定义一个 Nim 游戏，参数  tokens：游戏的总令牌数，printFun：传入的方法
class Nim {
  constructor(tokens, printFun) {
    this.startTokens = tokens;
    this.tokens = tokens;
    this.printFun = printFun;
  }

  playerTurn(take) {
    // take 玩家每次拿取的令牌数 Math.round：四舍五入方法
    take = Math.round(take);
    // 判断玩家每次拿取的令牌数必须在 1-3 之间
    if (take < 1 || take > 3) {
      this.printFun("take must be between 1 and 3.\n")
      return false;
    }
    // 剩余的令牌数量
    this.tokens -= take;
    // 输出玩家每次拿取的令牌数
    this.printFun("Player takes " + take + " tokens.");
    // 输出剩余的令牌总数
    this.printRemaining()
    // 当玩家拿取令牌之后，剩余总令牌数为 0 时，显示玩家胜: Player wins!
    if (this.tokens === 0) {
      this.printFun("Player wins!\n");
    }
    return true;
  }

  computerTurn() {
    let take = this.tokens % 4;
    // tokens = tokens - take
    this.tokens -= take;
    this.printFun("Computer takes " + take + " tokens.");
    // 输出剩余的令牌总数
    this.printRemaining();
    // 当电脑拿取令牌之后，剩余总令牌数为 0 时，显示电脑胜：Computer wins.
    if (this.tokens === 0) {
      this.printFun("Computer wins.\n");
    }

  }

  printRemaining() {
    // 输出剩余的令牌总数
    this.printFun(this.tokens + " tokens remaining.\n");
  }
}

// 定义一个 game，传入 令牌数 12，传入一个方法 console.log
let game = new Nim(12, console.log);
// 游戏开始浏览器弹出的提示框
while (true) {
  if (game.playerTurn(parseInt(prompt("How many tokens would you like to take?")))){
    game.computerTurn();
  }
  // 判断当令牌数为 0 是结束
  if (game.tokens == 0) {
    break;
  }
}