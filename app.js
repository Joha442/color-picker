const square = document.querySelector(".square")
const hex = document.querySelector(".hex")

const red = document.querySelector("#red")
const green = document.querySelector("#green")
const blue = document.querySelector("#blue")
const r = document.querySelector("#r")
const g = document.querySelector("#g")
const b = document.querySelector("#b")

const toHex = (str) => {
  let hex = parseInt(str).toString(16)
  if (hex.length == 1) {
    hex = "0" + hex
  }
  return hex
}

sliders = [red, green, blue]
sliders.forEach((slide) => {
  slide.oninput = function () {
    square.style.setProperty("background", `rgb(${red.value},${green.value},${blue.value})`)
    r.innerHTML = red.value
    g.innerHTML = green.value
    b.innerHTML = blue.value
    let color = `#${toHex(red.value)}${toHex(green.value)}${toHex(blue.value)}`
    hex.innerHTML = color
    hex.style.color = color
  }
})
