const arr = [1,4,3,2,6,9, 8, 7, 12,11,10, 16]
let max = arr[0]
let min = arr[0]
for(let i of arr){
    if(i>max){
        max = i
    }
    if(i<min){
        min = i
    }
}
console.log(`${max} is the largest and ${min} is the smallest number in the array`)