const ans = document.createElement("h3")
const inp = document.createElement("input")
const btn = document.createElement("button")
const div1 = document.createElement("div")
const head = document.createElement("h2")
const body = document.getElementsByTagName("body")[0]
body.appendChild(div1)

body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.gap = "100px"
body.style.margin = "50px "

inp.style.margin = "2px 95px"
body.style.flexDirection = "column"

div1.style.display = "flex"
div1.style.textAlign = "center"

div1.style.backgroundColor = "orange"


head.innerText = "Binary to Decimal"
div1.appendChild(head)

inp.style.width = "200px"


div1.style.height = "300px"
div1.style.width = "400px"
div1.style.flexDirection= "column "
div1.style.border = "1px"
div1.style.gap = '10px'

div1.appendChild(inp)
div1.appendChild(btn)
div1.append(ans)
btn.innerText = "Convert"
btn.style.padding = "2px 5px"
btn.style.margin = "1px 140px"

btn.addEventListener("click", ()=>{
    console.log(inp.value)
    ans.innerText = parseInt(inp.value, 2)
})