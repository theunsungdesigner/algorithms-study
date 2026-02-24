/**
 * Contains Duplicate
 * 
 * Given an integer array nums, return true if any value appears
 * at least twice in the array.
 * 
 * @param nums - Array of integers
 * @returns true if array contains duplicates
 */
export function containsDuplicate(nums: number[]): boolean {
  const seen = new Map()
  for(let i =0; i<nums.length; i++){
    if(seen.has(nums[i])){
      console.log("return true",[nums[i],i])
      return true
    }
    seen.set(nums[i], i)
  }
  return false
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
