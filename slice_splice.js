const nums = [1,2,3,4,5,6,7,8,9,10]
const part = nums.slice(2,5)
console.log(part);
console.log(nums);

// const removed = nums.splice(2,5)
// console.log(nums);

const remove = nums.splice(2,3,100,100,100)
console.log(remove);
console.log(nums);

const together = nums.join(",") ;
console.log(together);