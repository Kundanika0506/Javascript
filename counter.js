const body = document.getElementsByTagName("body")[0]
const head = document.createElement("h1")
head.innerText = "Counter"
body.style.display= "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"

const div1 = document.createElement("div")
div1.style.display = "flex"
div1.style.justifyContent = "center"
div1.style.alignItems = "center"
div1.style.gap = "20px"
div1.style.height = "300px"
div1.style.width = "300px"
div1.style.border = "1px solid black"

div1.style.flexDirection= "column "
body.appendChild(div1)
div1.appendChild(head)

const value = document.createElement("h3")
value.innerText = "0"
value.style.color = "blue"
div1.appendChild(value)

const div2 = document.createElement("div")
div1.appendChild(div2)


div2.style.display = "flex"
div2.style.gap = "30px"


const btn1 = document.createElement("button")
btn1.style.padding = "5px 10px"
btn1.innerText = "-"
div2.appendChild(btn1)

const btn2 = document.createElement("button")
btn2.innerText = "+"
btn2.style.padding = "5px 10px"
div2.appendChild(btn2)

let count = 0
btn1.addEventListener("click", ()=>{
    count --
    value.innerText = count
})
btn2.addEventListener("click", ()=>{
    count++
    value.innerText = count

})

