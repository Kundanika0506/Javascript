let num = 371
let strNum = num.toString()
let l = strNum.length
let sum = 0
for(let i of strNum){
    sum += parseInt(i)**l

}
if(sum==num){
    console.log(`${num} is an armstrong number`)
}
else{
    console.log(`${num} is not an armstrong number`)
}