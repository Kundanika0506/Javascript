let str = "level"
let ans = ""
for(let i of str){
    ans = i + ans
}
if(ans==str){
    console.log(`${str} is a Palindrome string`)
}
else{
    console.log(`${str} is not a Palindrome string`)
}
