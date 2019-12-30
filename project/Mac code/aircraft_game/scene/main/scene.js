class Scene extends GuaScene {
  constructor(game) {
    super(game);
    // 开始游戏
    game.registerAction('k', function(){
      const s = Scene(game);
      game.replaceScene(s);
    });
  };
  draw() {
    // draw labels
    this.game.context.fillText('按 k 开始游戏', 100, 100);
  };
};
const Scene = function(game){
  const s = {
    game: game,
  };
  // 初始化
  paddle = Paddle(game);
  ball = Ball(game);

  let score = 0;
  let blocks = loadLevel(game, 1);

  game.registerAction('a', function(){
    paddle.moveLeft();
  });
  game.registerAction('d', function(){
    paddle.moveRight();
  });
  game.registerAction('f', function(){
    ball.fire();
  });

  s.draw = function(){
    // draw 背景
    game.context.fillStyle = "#554";
    game.context.fillRect(0, 0, 500, 400);
    // draw
    game.drawImage(paddle);
    game.drawImage(ball);
    // draw blocks
    for(let i = 0; i < blocks.length; i++){
      let block = blocks[i];
      if(block.alive){
        game.drawImage(block);
      }
    }
    // draw labels
    game.context.fillText('分数：' + score, 450, 390);
  };
  s.update = function(){
    if(window.paused){
      return
    }
    
    ball.move();
    // 判断游戏结束
    if(ball.y > (paddle.y + paddle.h)){
      // 跳转到游戏结束的场景
      const end = SceneEnd.new(game);
      game.replaceScene(end);
    }
    // 判断相撞
    if(paddle.collide(ball)){
      ball.rebound();
    }
    // 判断 ball 与 blocks 相撞
    for(let i = 0; i < blocks.length; i++){
      const block = blocks[i];
      if(block.collide(ball)){
        block.kill();
        // 反弹
        ball.rebound();
        // 更新分数
        score += 100;
      }
    }
  };

  // mouse event
  let enableDrag = false;
  game.canvas.addEventListener('mousedown', function(event){
    const x = event.offsetX;
    const y = event.offsetY;
    
    // 检查是否点钟了 ball
    if(ball.hasPoint(x, y)){
      enableDrag = true;
    }
  });
  game.canvas.addEventListener('mousemove', function(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(enableDrag){
      ball.x = x;
      ball.y = y;
    }
  });
  game.canvas.addEventListener('mouseup', function(event){
    const x = event.offsetX;
    const y = event.offsetY;
    enableDrag = false;
  });
  
  return s;
}