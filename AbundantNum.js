let num = 12
let sum = 0
for(let i = 1; i<num; i++){
    if(num%i==0){
        sum+=i
    }
}
if(sum>num){
    console.log(`${num} is an abundant number`)
}
else{
    console.log(`${num} is not an abundant number`)
}
