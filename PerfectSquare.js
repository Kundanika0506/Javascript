let num = 25
let a = 0
for(let i = 1; i<num; i++){
    if(i*i==num){
       a = i 
    }
}
if(a*a==num){
    console.log(`${num} is a perfect square`)
}
else{
    console.log(`${num} is not a perfect square`)
}