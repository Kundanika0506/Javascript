const arr = [3,5,7,6,4,2,9,13,21,20]
let largest = arr[0]
for(let i of arr){
    if(i>largest){
        largest = i
    }
}
console.log(largest)