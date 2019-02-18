const ball = document.querySelector("#ball")
let posXMax = 800,
    posYMax = 600,
    posX = Math.floor(Math.random() * posXMax/10)*10,
    posY = Math.floor(Math.random() * posYMax/10)*10,
    dirX = 1, // mettre à -1 pour aller vers la gauche
    dirY = -1, // mettre à 1 pour aller vers le bas
    time = 15,
    step = 10,
    tmp = 0

let start = setInterval(function() {
    posX = posX + dirX * step
    posY = posY + dirY * step
    if (posX >= posXMax - 20 || posX <= 0) {
      dirX = -dirX
    }
    if (posY >= posYMax - 20 || posY <= 0) {
      dirY = -dirY
    }
    ball.style.right = posX + 'px'
    ball.style.bottom = posY + 'px'
  },
  time
)
