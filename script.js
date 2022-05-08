কাঁধ = new মাপ('কাঁধ', 21)
কাঁধ.দাগসমূহ.push(new দাগ([2, 2], () => [2 + কাঁধ.মান, 2], (a, b) => [2, 2]))

setup = () => {
    createCanvas(innerWidth, innerHeight)
}

draw = () => {
    background(255)
    stroke(0)
    scale(20)
    for (let দাগ of কাঁধ.দাগসমূহ) {
        দাগ.আঁকো()
    }
}

mouseDragged = () => {
    কাঁধ.মান += (mouseX - pmouseX) / 200
}