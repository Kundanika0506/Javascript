let num = 21
let sum = 0
let strNum= num.toString()
for(let i of strNum){
    sum += parseInt(i)
}
console.log(sum)
if(num%sum==0){
    console.log(`${num} is a Harshad number`)
}
else{
    console.log(`${num} is not a Harshad number`)
}
