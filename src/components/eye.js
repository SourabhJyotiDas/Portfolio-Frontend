const eyes = document.querySelectorAll('.eye');
const anchor = document.querySelector('.anchor');
const rekt = anchor.getBoundingClientRect();
console.log(rekt);
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;

document.querySelector(".homeScreen").addEventListener("mousemove", (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    console.log(angleDeg);
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    })
})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy
    const dx = ex - cx
    const rad = Math.atan2(dy, dx)
    const deg = rad * 180 / Math.PI
    return deg
}