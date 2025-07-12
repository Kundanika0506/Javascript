let num1 = 36
let num2= 48
let hcf = 1
for (let i = 2; i<=num1 || i<=num2; i++){
    if(num1%i==0 && num2%i==0){
        hcf = i
    }

}
console.log(`${hcf} is the HCF`)