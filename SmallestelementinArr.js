const arr = [3,5,7,6,4,2,9,13,21,20]
let smallest = arr[0]
for(let i of arr){
    if(i< smallest){
        smallest = i
    }
}
console.log(smallest)