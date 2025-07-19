let num = 230040405
let s = ""
for(let i of num.toString()){
    if(i!= "0"){
        s += i
    }
    else{
        s+= "1"
    }
}
console.log(s)