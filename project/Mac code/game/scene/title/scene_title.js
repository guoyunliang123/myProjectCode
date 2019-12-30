class SceneTitle extends GuaScene {
  constructor(game) {
    super(game);
    // 开始游戏
    game.registerAction('k', function(){
      const s = Scene(game);
      game.replaceScene(s);
    });
  };
  /* static new(game) {
    const i = new this(game);
    return i;
  } */
  draw() {
    // draw labels
    this.game.context.fillText('按 k 开始游戏', 100, 100);
  };
};

/* const SceneTitle = function(game){
  const s = {
    game: game,
  };

  // 开始游戏
  game.registerAction('k', function(){
    const s = Scene(game);
    game.replaceScene(s);
  });

  // 初始化
  s.draw = function(){
    // draw labels
    game.context.fillText('按 k 开始游戏', 100, 100);
  };
  s.update = function() {
  };
  return s;
} */