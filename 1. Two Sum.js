/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// better solution, result in a single pass
var twoSum = function (nums, target) {
  let mapNums = new Map();
  for (var i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (mapNums.has(complement)) {
      return [mapNums.get(complement), i];
    }

    mapNums.set(nums[i], i);
  }
};

// Brute force.
var twoSum0 = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    let x = nums[i];
    for (var j = i + 1; j < nums.length; j++) {
      let res = x + nums[j];
      if (target == res) {
        // return [i,j];
        return new Array(i, j);
      }
    }
  }
};

/////////////////////////////////

