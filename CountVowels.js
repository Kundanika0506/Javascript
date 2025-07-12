let str = "kundanikamadireddy"
let n = str.length
let count = 0
for (let i of str){
    if(i=="a" || i =="e" || i == "i" || i=="o" || i =="u" ){
        count+=1
    }
}
console.log(count)

