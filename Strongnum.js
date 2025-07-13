let num = 145
let strNum = num.toString()
let ans = 0
for(let i of strNum){
    fact = 1
    for(let j = 1; j<=parseInt(i); j++){
        fact = fact*j
    }
    ans = ans+fact
}
if(ans==num){
    console.log(`${num} is a strong number`)
}
else{
    console.log(`${num} is not a strong number`)
}