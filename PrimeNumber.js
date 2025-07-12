let num = 23
let count = 0
for(let i = 1; i<=num; i++){
    if(num%i==0){
        count+=1
    }
}
if(count==2){
    console.log(`${num} is a Prime number`)
}
else{
    console.log(`${num} is not a Prime number`)
}