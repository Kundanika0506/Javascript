const arr = [1,3,2,4,5,6,7,8,9,10, 13,11,12]
let n = arr.length

let firstHalf = arr.slice(0,Math.floor(n/2))
firstHalf.sort((a,b)=> a-b)


let secondHalf = arr.slice(n/2)
secondHalf.sort((a,b)=> b-a)

console.log(firstHalf.concat(secondHalf))