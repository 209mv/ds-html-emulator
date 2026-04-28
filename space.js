const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

let stars = [];
let w, h;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;

  stars = [];
  for (let i = 0; i < 120; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 2 + 0.5
    });
  }
}

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "white";

  for (let s of stars) {
    s.y += s.z * 0.3;

    if (s.y > h) {
      s.y = 0;
      s.x = Math.random() * w;
    }

    ctx.fillRect(s.x, s.y, s.z, s.z);
  }

  requestAnimationFrame(draw);
}

window.addEventListener("resize", resize);

resize();
draw();
