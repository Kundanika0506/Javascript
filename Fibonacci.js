let num = 10
let a = 0
let b = 1
let c = 0
console.log(a)
console.log(b)
for (let i = 2; i<num; i++){
    c = a+b
    a = b
    b = c

    console.log(c)
}
