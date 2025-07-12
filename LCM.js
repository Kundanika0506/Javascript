let num1 = 12
let num2= 14
let hcf = 1
for (let i = 2; i<=num1 || i<=num2; i++){
    if(num1%i==0 && num2%i==0){
        hcf = i
    }
}
let lcm = ((num1*num2)/hcf)
console.log(`${lcm} is the LCM `)