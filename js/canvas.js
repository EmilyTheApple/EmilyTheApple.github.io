const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

context.strokeStyle = 'black'
// context.fillStyle = 'pink'
// context.fillRect(10, 10, 100, 100)
// context.strokeRect(10, 10, 100, 100)

//circle
context.beginPath()
context.arc(250, 160, 40, 0, 2 * Math.PI)
context.stroke()

//spine
context.moveTo(250, 200)
context.lineTo(250, 350)
context.stroke()

//arm on the left
context.moveTo(250, 220)
context.lineTo(200, 300)
context.stroke()

//arm on the right
context.moveTo(250, 220)
context.lineTo(300, 300)
context.stroke()

//left leg
context.moveTo(250, 350)
context.lineTo(200, 450)
context.stroke()

//right leg
context.moveTo(250, 350)
context.lineTo(300, 450)
context.stroke()

//text
context.font = "50px Arial"
context.fillText("Steve", 185, 80)