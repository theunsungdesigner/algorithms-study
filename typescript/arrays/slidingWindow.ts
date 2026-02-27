
export {}

const slidingWindow =(nums: number[] , windowSize: number)=>{
  let windowSum = 0
  for(let i = 0; i< windowSize; i++){
    windowSum += nums[i]
  }
  
  let maxSum = windowSum
  
  for(let i = windowSize; i<nums.length; i++){
    windowSum += nums[i] - nums[i -windowSize]
    maxSum = Math.max(maxSum, windowSum)
  }
  return maxSum
}
console.log(slidingWindow([1,2,4,5,6,7], 3))