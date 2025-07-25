const body = document.getElementsByTagName("body")[0]
const head = document.createElement("h1")
head.innerText = "Age Calculator"

body.style.display= "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.textAlign = "center"
body.style.backgroundColor = "#DBD5CB"


const div1 = document.createElement("div")
div1.style.display = "flex"
div1.style.justifyContent = "center"
div1.style.alignItems = "center"
div1.style.gap = "30px"
div1.style.height = "500px"
div1.style.width = "500px"
div1.style.border = "1px solid black"
div1.style.flexDirection= "column "
body.appendChild(div1)
div1.appendChild(head)
div1.style.backgroundColor = "#D5D6B0"

const ans = document.createElement("h2")

const sub1 = document.createElement("p")
const sub2 = document.createElement("p")
sub1.innerText = "Year of Birth"
sub2.innerText = "Current Year"

const div2 =  document.createElement("div")
div1.appendChild(div2)
div2.style.display = "flex"
div2.style.gap = "60px"

const div3 = document.createElement("div")
const inp1 = document.createElement("input")
div3.appendChild(inp1)
div3.style.display= "flex"
div3.style.flexDirection = "column"
div3.appendChild(sub1)
div2.appendChild(div3)

const div4 = document.createElement("div")

div2.appendChild(div4)

const inp2 = document.createElement("input")
div4.appendChild(inp2)
div4.appendChild(sub2)

const btn = document.createElement("button")
btn.innerText = "Calculate"

div1.appendChild(btn)
div1.appendChild(ans)

btn.addEventListener("click", ()=>{
    console.log(inp1.value)
    console.log(inp2.value)
    ans.innerText = parseInt(inp2.value - inp1.value)
})

