class SceneEnd extends GuaScene {
  constructor(game) {
    super(game);
    // 按 r 返回标题界面
    game.registerAction('r', function(){
      const s = SceneTitle.new(game);
      game.replaceScene(s);
    });
  };
  /*   static new(game) {
    const i = new this(game);
    return i;
  } */
  draw() {
    // draw labels
    this.game.context.fillText('游戏结束  按 r 返回标题界面', 100, 200);
  };
};

/* const SceneEnd = function(game){
  const s = {
    game: game,
  };

  // 按 r 返回标题界面
  game.registerAction('r', function(){
    const s = SceneTitle.new(game);
    game.replaceScene(s);
  });

  // 初始化
  s.draw = function(){
    // draw labels
    game.context.fillText('游戏结束  按 r 返回标题界面', 100, 200);
  };
  s.update = function() {
  };
  return s;
} */