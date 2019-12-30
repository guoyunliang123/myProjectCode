// 挡板
const Paddle = function(game){
  const o = game.imageByName('paddle');
 /*  const o = {
    image: image,
    x: 175,
    y: 350,
    speed: 5,
  }; */
  o.x = 175;
  o.y = 350;
  o.speed = 5;
  let paddle = o;
  o.move = function(x){
    if(x < 0){
      x = 0;
    }
    if(x > 500 - o.w){
      x = 500 - o.w;
    }
    o.x = x;
  };
  const aInb = function(x, x1, x2){
    return x >= x1 && x <= x2;
  }
  o.moveLeft = function() {
    o.move(paddle.x - paddle.speed);
  };
  o.moveRight = function() {
    o.move(paddle.x + paddle.speed);
  };
  o.collide = function(ball) {
    /* if(ball.y + ball.h > o.y){
      if(ball.x > o.x && ball.x < o.x + o.w){
        return true;
      }
    }
    return false; */
    const a = o;
    const b = ball;
    if(aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)){
      if(aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)){
        return true;
      }
    }
    return false;
  };
  return o;
};