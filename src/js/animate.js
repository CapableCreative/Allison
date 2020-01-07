const refreshRate = 1000 / 60;
const maxXPosition = 180;
let rect = document.getElementById('radial');
let speedX = 1 / 10;
let positionX = 0;
function step() {
  positionX = positionX + speedX;
  if (positionX > maxXPosition || positionX < 0) {
    speedX = speedX * (-1);
  }
  rect.style.transform = 'rotate(' + positionX + 'deg)';
  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);
