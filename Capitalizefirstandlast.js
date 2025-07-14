let str = "kundan"
let n = str.length
let ans = str[0].toUpperCase() + str.slice(1,n-1) + str.at(-1).toUpperCase()

console.log(ans)
