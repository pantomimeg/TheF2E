var canvas =
  document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

canvas.width = window.innerWidth = 700
canvas.height = window.innerHeight = 500

var time = 0

function draw() {
  time++
  ctx.clearRect(0, 0, 800, 500)

  //lines
  ctx.beginPath()
  for (var i = 0; i < 20; i++) {
    let pos = i * 50
    ctx.moveTo(pos, 0)
    ctx.lineTo(pos, 500)
    // ctx.fillText(pos, pos, 10)

    ctx.moveTo(0, pos)
    ctx.lineTo(700, pos)
    // ctx.fillText(pos, 10, pos)
  }
  ctx.lineWidth = 1.2
  ctx.strokeStyle = "rgba(255,255,255,.1)"
  ctx.stroke()

  //bigO
  ctx.beginPath()
  ctx.arc(350, 250, 150 + (time % 100), 0, Math.PI * 2)
  ctx.lineWidth = 1.2
  ctx.strokeStyle = "rgba(255,255,255,.3)"
  ctx.stroke()

  //bigO
  ctx.beginPath()
  ctx.arc(350, 250, 150 + (time % 50), 0, Math.PI * 2)
  ctx.lineWidth = 1
  ctx.strokeStyle = "rgba(255,255,255,.3)"
  ctx.stroke()

  //smallO
  ctx.beginPath()
  ctx.arc(350, 250, 150, 0, Math.PI * 2)
  ctx.lineWidth = 2.5
  ctx.strokeStyle = "#fff"
  ctx.stroke()

  // red
  ctx.beginPath()
  ctx.moveTo(110 + mouse.x / 12, 120 - mouse.y / 10)
  ctx.lineTo(80 + mouse.x / 12, 130 - mouse.y / 10)
  ctx.lineTo(90 + mouse.x / 12, 160 - mouse.y / 10)
  ctx.lineTo(125 + mouse.x / 12, 170 - mouse.y / 10)
  ctx.lineTo(140 + mouse.x / 12, 150 - mouse.y / 10)
  ctx.lineTo(135 + mouse.x / 12, 130 - mouse.y / 10)
  ctx.closePath()
  ctx.fillStyle = "#E7465D"
  ctx.fill()

  // blue
  ctx.beginPath()
  ctx.moveTo(530 - mouse.x / 20, 375 - mouse.y / 15)
  ctx.lineTo(495 - mouse.x / 20, 430 - mouse.y / 15)
  ctx.lineTo(560 - mouse.x / 20, 435 - mouse.y / 15)
  ctx.closePath()
  ctx.fillStyle = "#3676BB"
  ctx.fill()

  //yellow
  ctx.beginPath()
  ctx.arc(650 - mouse.x / 8, 130 - mouse.y / 20, 30, 0, 2 * Math.PI)
  ctx.fillStyle = "#F5AF5F"
  ctx.fill()

  // batterybody
  ctx.beginPath()
  ctx.fillRect(318, 205, 16, 30)
  ctx.fillRect(318, 237, 16, 2.5)
  ctx.fillStyle = "#F5AF5F"
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "#fff"
  ctx.fillRect(322, 203, 8, 2)
  ctx.fill();

  // batterybody N
  ctx.beginPath()
  ctx.moveTo(325, 212)
  ctx.lineTo(322, 222)
  ctx.lineTo(327, 222)
  ctx.lineTo(327, 230)
  ctx.lineTo(330, 219)
  ctx.lineTo(325, 219)
  ctx.closePath()
  ctx.fillStyle = "#fff"
  ctx.fill()

  //center txt
  ctx.beginPath()
  ctx.moveTo(370, 220)
  ctx.lineTo(378, 224)
  ctx.lineTo(368, 227)
  ctx.closePath()
  ctx.fillStyle = "#fff"
  ctx.fill()
  ctx.font = "700 70px '微軟正黑體'"
  ctx.fillText("R", 340, 240)

  ctx.font = "100 16px '微軟正黑體'"
  ctx.fillText("Radio Defense", 298, 262)

  // ctx.beginPath()
  // ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI*2)
  // ctx.strokeStyle = "#fff"
  // ctx.stroke()


  ctx.font = "100 13px '微軟正黑體'"
  ctx.fillStyle = "rgba(255,255,255,.3)"
  ctx.fillText("[The F2E - No7.Canvas Game] Designed by Pantomimeg.", 183, 485)
}
setInterval(draw, 10)
// draw()
var mouse = {
  x: 0,
  y: 0
}
canvas.addEventListener("mousemove", function (evt) {
  mouse.x = evt.offsetX
  mouse.y = evt.offsetY
})