const nums = [2, 1, 5, 1, 3, 2];
const windowSize = 3


const slidingWindow = (windowSize: number, nums: number[] ) =>{
  let windowSum = 0
  for (let i = 0; i < windowSize; i++){
    windowSum += nums[i]
  }

  let maxSum = windowSum

  for(let i = windowSize; i < nums.length; i++){
    windowSum += nums[i]- nums[i-windowSize];
    console.log(`i=${i}, windowSum=${windowSum}`);
    maxSum =Math.max(maxSum, windowSum)
  }
  console.log("max sum ",maxSum)
  return maxSum

}
slidingWindow(windowSize, nums)
