let canvas;
let ctx;
let particlesArray;
let mouse = {
  x: void 0,
  y: void 0,
  radius: null
};
let text = '❄️';

class Particle {
  constructor(t, e, i, o, s, n) {
    (this.x = t),
      (this.y = e),
      (this.directionX = i),
      (this.directionY = o),
      (this.size = s),
      (this.color = n);
  }
  draw(t, e) {
    ctx.beginPath(),
      (ctx.font = `${this.size}px Dina, monospace`),
      ctx.fillText(`${t}`, this.x, this.y);
  }
  update(t) {
    (this.x > canvas.width || this.x < 0) &&
      (this.directionX = -this.directionX),
      (this.y > canvas.height || this.y < 0) &&
      (this.directionY = -this.directionY);
    let e = mouse.x - this.x,
      i = mouse.y - this.y;
    Math.sqrt(e * e + i * i) < mouse.radius + this.size &&
      (mouse.x < this.x &&
        this.x < canvas.width - 10 * this.size &&
        (this.x += 3),
        mouse.x > this.x && this.x > 10 * this.size && (this.x -= 3),
        mouse.y < this.y &&
        this.y < canvas.height - 10 * this.size &&
        (this.y += 3),
        mouse.y > this.y && this.y > 10 * this.size && (this.y -= 3)),
      (this.x += this.directionX),
      (this.y += this.directionY),
      this.draw(t);
  }
}

function initVar() {
  canvas = document.querySelector('.canvasBg');
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  mouse.radius = (canvas.height / 70) * (canvas.width / 70);
}

function animate() {
  requestAnimationFrame(animate), ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let t = 0; t < particlesArray.length; t++)
    particlesArray[t].update(text);
}

function initEvents() {
  window.addEventListener('resize', function () {
    (canvas.width = innerWidth);
    (canvas.height = innerHeight);
    (mouse.radius = (canvas.height / 70) * (canvas.height / 70));
    init();

  });

  window.addEventListener('mousemove', function (t) {
    (mouse.x = t.x), (mouse.y = t.y);
  });

  canvas.addEventListener('mouseleave', function () {
    (mouse.x = void 0), (mouse.y = void 0);
  });
}

function change() {
  console.log("change")
  text === '❄️' ? (text = '⭐') : (text = '❄️');
};

const init = function init() {
  initVar();
  particlesArray = [];
  let t = (canvas.height + canvas.width) / 100;
  for (let e = 0; e < t; e++) {
    let t = 12 * Math.random() + 2,
      e = Math.random() * (innerWidth - 2 * t - 2 * t) + 2 * t,
      i = Math.random() * (innerHeight - 2 * t - 2 * t) + 2 * t,
      o = 5 * Math.random() - 2.5,
      s = 5 * Math.random() - 2.5,
      n = 'white';
    particlesArray.push(new Particle(e, i, o, s, t, n));
  }
  animate();
  initEvents();
}

export { change, init }
