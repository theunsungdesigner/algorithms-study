/** * Two Sum
 * 
 * Given an array of integers nums and an integer target,
 * return the indices of the two numbers that add up to target.
 * 
 * @param nums - Array of integers
 * @param target - Target sum
 * @returns Array of two indices, or empty array if no solution
 */
export function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
     for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
       return [i, j];
      }
    }
  }  return [];
}


const nums = [1,2,4,5,6,5]
const containsDupe=(nums: number[])=>{
  const seen = new Map()
  for(let i =0; i<nums.length; i++){
    if(seen.has(nums[i]+1 === nums[i])){
      console.log("return trues",[nums[i],i])
      return [nums[i], i]
    }
    seen.set(nums[i], i)
    console.log("return false",nums[i], i)
  }
}

containsDupe(nums)
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]