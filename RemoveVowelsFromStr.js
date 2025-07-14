let s = "alphabet"
let newStr= ""
for (let i of s){
    if(i!="a" && i !="e" && i != "i" && i!="o" && i !="u" ){
        newStr = newStr+i
    }
}
console.log(newStr)
