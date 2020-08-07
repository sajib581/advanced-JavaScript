// map()
let arr = [2,3,4,5,6]
let arr2 = arr.map(e => {
    return e*e ;
})

console.log(arr2);

// filter()
arr2 = arr.filter(x => {
    return x>3 ;
})
console.log(arr2);