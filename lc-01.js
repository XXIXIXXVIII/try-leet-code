
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 方法1
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const result = nums[i] + nums[j];
        if (result === target) {
          return [i, j];
        }
      }
    }
    return [];
}; // [0, 1]


// 方法2
var twoSum2 = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const targetNum = target-nums[i];
      console.log(map);
      if(map.has(targetNum)){
        return [map.get(targetNum), i];
      }
      map.set(nums[i], i);
    }
}

console.log(twoSum([2,7,11,15], 26));
console.log(twoSum2([2,7,11,15], 26));
