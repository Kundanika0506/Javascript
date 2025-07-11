let unit = 350
let cost = 0
if (unit<=100){
    cost = 0
}
else if (unit>100 && unit<=200){
    cost = (unit-100)*5
}
else{
    cost = (unit-200) * 10 + (100*5)
}
console.log(cost)

