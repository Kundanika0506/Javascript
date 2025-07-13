let num1 = 6
let num2 = 28

function Factors(num){
    sum = 0
    for(let i = 1; i<num; i++){
        if(num%i==0){
            sum+=i
        }   
    }
    return sum/num
}

if(Factors(num1) == Factors(num2)){
    console.log(`${num1} and ${num2} are a friendly pair`)
}
else{
    console.log(`${num1} and ${num2} are not a friendly pair`)
}