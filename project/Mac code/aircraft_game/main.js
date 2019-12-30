let paddle;
let ball;
let block;

const loadLevel = function(game, n) {
  n = n - 1;
  let level = levels[n];
  let blocks = [];
  for(let i= 0; i < level.length; i++) {
    let p = level[i];
    let b = Block(game, p);
    blocks.push(b);
  }
  return blocks;
};

const enableDebugMode = function(game, enable) {
  if(!enable) {
    return
  }
  window.paused = false;
  addEventListener('keydown', function(event){
    const k = event.key
    if(k == ' '){
      // 暂停功能
      window.paused = !window.paused;
    } else if ('1234567'.includes(k)) {
      // 可临时载入关卡
      blocks = loadLevel(game, Number(k));
    }
  });
  // 控制速度
  document.querySelector('#id-input-speed').addEventListener('input', function(event){
    const input = event.target;
    window.fps = Number(input.value);
  });
};

const main = function() {
  const images = {
    block: 'img/block.png',
    ball: 'img/ball.png',
    paddle: 'img/paddle.png',
  };

  const game = guaGame.instance(60, images, function(g){
    const s = SceneTitle.new(g);
    g.runWithScene(s);
  })
  enableDebugMode(game, true);
};

main();