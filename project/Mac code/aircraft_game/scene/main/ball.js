// 球
const Ball = function(game){
  const o = game.imageByName('ball');
  // const image = imageFromPath('image/chrome.jpg')
    o.x = 205;
    o.y = 340;
    o.speedX = 5;
    o.speedY = 5;
    o.fired = false;
  o.fire = function() {
    o.fired = true;
  };
  o.move = function() {
    if(o.fired) {
      if(o.x < 0 || o.x > 492) {
        o.speedX = -o.speedX;
      }
      if(o.y < 0 || o.y > 392) {
        o.speedY = -o.speedY;
      }
      // move
      o.x += o.speedX;
      o.y += o.speedY;
    }
  };
  o.rebound = function() {
    o.speedY *= -1;
  };
  // 判断一个点在砖块内
  o.hasPoint = function(x, y) {
    const xIn = x >= o.x && x <= o.x + o.w;
    const yIn = y >= o.y && x <= o.y + o.h;
    return xIn && yIn;
  };
  return o;
};