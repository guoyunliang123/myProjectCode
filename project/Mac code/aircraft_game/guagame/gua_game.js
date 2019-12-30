class guaGame {
  constructor(fps, images, runCallback) {
    window.fps = fps;
    this.images = images;
    this.runCallback = runCallback;

    this.scene = null;
    this.actions = {};
    this.keydowns = {};
    this.canvas = document.querySelector('#id-canvas');
    this.context = this.canvas.getContext('2d');
    // events
    const self = this;
    window.addEventListener('keydown', event => {
      this.keydowns[event.key] = true;
    });
    window.addEventListener('keyup', function(event){
      self.keydowns[event.key] = false;
    });
    this.init();
  };

  // game 只能初始化一次
  static instance(...args) {
    this.i = this.i || new this(...args);
    return this.i;
  };

  drawImage(img) {
    this.context.drawImage(img.image, img.x, img.y);
  };
  // update
  update() {
    this.scene.update();
  }
  // draw
  draw() {
    this.scene.draw();
  }
  registerAction(key, callback) {
    this.actions[key] = callback;
  };
  runloop() {
    // events
    const actions = Object.keys(this.actions);
    for (let i = 0; i < actions.length; i++) {
      let key = actions[i];
      if(this.keydowns[key]) {
        // 如果按键被按下，调用注册的action
        this.actions[key]();
      }
    };
    // update
    this.update();
    // clear
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // draw
    this.draw();
    // next run loop
    setTimeout(() => {
      this.runloop();
    }, 1000/window.fps)
  };
  init() {
    let loads = [];
    // 预先载入所有图片
    let names = Object.keys(this.images);
    for(let i = 0; i < names.length; i++){
      let name = names[i];
      let path = this.images[name];
      let img = new Image();
      img.src = path;
      img.onload = () => {
        // 存入 g.images 中
        this.images[name] = img;
        // 所有图片都成功载入后，调用 start
        loads.push(1);
        if(loads.length == names.length){
          this.start();
        }
      };
    }
  };
  imageByName(name) {
    let img = this.images[name];
    let image = {
      w: img.width,
      h: img.height,
      image: img,
    }
    return image;
  };

  runWithScene(scene) {
    this.scene = scene;
    // 开始运行程序
    setTimeout(() => {
      this.runloop();
    }, 1000/window.fps)
  };

  replaceScene(scene) {
    this.scene = scene;
  };

  start(scene) {
    this.runCallback(this);
  };
}





/* const guaGame = function(fps, images, runCallback) {
  // images 是一个对象, 里面是图片的引用名字和图片路径
  // 程序会在所有图片载入成功会才运行

  let g = {
    scene: null,
    actions: {},
    keydowns: {},
    images: {},
  };
  const canvas = document.querySelector('#id-canvas');
  const context = canvas.getContext('2d');
  g.canvas = canvas;
  g.context = context;
  g.drawImage = function(guaImage) {
    g.context.drawImage(guaImage.image, guaImage.x, guaImage.y);
  };
  // events
  addEventListener('keydown', function(event){
    g.keydowns[event.key] = true;
  });
  addEventListener('keyup', function(event){
    g.keydowns[event.key] = false;
  });
  g.registerAction = function(key, callback) {
    g.actions[key] = callback;
  };
  // update
  g.update = function(){
    g.scene.update();
  }
  // draw
  g.draw = function(){
    g.scene.draw();
  }
  // timer
  window.fps = 60;
  const runloop = function() {
    // events
    const actions = Object.keys(g.actions);
    for (let i = 0; i < actions.length; i++) {
      let key = actions[i];
      if(g.keydowns[key]) {
        // 如果按键被按下，调用注册的action
        g.actions[key]();
      }
    };
    // update
    g.update();
    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);
    // draw
    g.draw();
    // next run loop
    setTimeout(function(){
      runloop();
    }, 1000/window.fps)
  };

  let loads = [];
  // 预先载入所有图片
  let names = Object.keys(images);
  for(let i = 0; i < names.length; i++){
    let name = names[i];
    let path = images[name];
    let img = new Image();
    img.src = path;
    img.onload = function(){
      // 存入 g.images 中
      g.images[name] = img;
      // 所有图片都成功载入后，调用 start
      loads.push(1);
      if(loads.length == names.length){
        g.start();
      }
    };
  }

  g.imageByName = function(name){
    let img = g.images[name];
    let image = {
      w: img.width,
      h: img.height,
      image: img,
    }
    return image;
  };

  g.runWithScene = function(scene) {
    g.scene = scene;
    // 开始运行程序
    setTimeout(function(){
      runloop();
    }, 1000/fps)
  };

  g.replaceScene = function(scene) {
    g.scene = scene;
  };

  g.start = function(scene){
    runCallback(g);
  };

  return g;
}; */