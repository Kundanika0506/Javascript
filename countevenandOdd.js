const arr = [1,2,3,4,5,6,7,8,9,10]
let evenCount = 0
let oddCount = 0

let l = arr.length
for(let i = 1; i<l+1; i++){
    if(arr[i]%2==0){
        evenCount+= 1
    }
    else{
        oddCount+= 1
    }
}
console.log(`the even count is ${evenCount}`)
console.log(`the odd count is ${oddCount}`)