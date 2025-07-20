// 🔗 LeetCode Problem: https://leetcode.com/problems/two-sum/
// 🔥 LeetCode 01 - Two Sum
// 🧠 Problem: Given an array of integers `nums` and an integer `target`,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution.

// 🐢 Brute-force solution | Time: O(n^2) | Space: O(1)

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
