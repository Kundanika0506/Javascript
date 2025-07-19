// const bio = {
//     name:"Kundanika",
//     surName:"Madireddy",
//     age:19,
//     nickName:"Kundan"
// }
// bio.isGraduated = false

// const bio = {}
// bio.name = "Kundanika"
// bio.age =19


const bio = new Object();

bio.name = "Kundanika"
bio.myFunc = function () {
    console.log("Kundanika Fuunction");
    return "Uday"

}

const newBio = bio

newBio.name = "Uday Kumar"
delete newBio.myFunc
// console.log(newBio);

const myNewObj = {
    name: "Uday"
}
// Object.freeze(myNewObj)
myNewObj.age = 25
myNewObj.age = 26
// console.log(Object.hasOwn(myNewObj,"age"));



// const arr = [1, 2, 3, 5, 2, 1, 1, 2, 5]
// const ans = {}
// for (let i of arr) {
// // console.log(Object.keys(ans));

//     if (i in ans) {
//         ans[i] = ans[i] + 1
//     }
//     else {
//         ans[i] = 1
//     }
// }
// console.log(ans);

function Factors(num) {
    let ans = []
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            ans.push(i)
        }
    }
    return ans
}

const nums = [10, 54, 86, 5, 6, 55]
const ans = {}

for (let i of nums) {
    ans[i] = Factors(i)
}
console.log(ans);