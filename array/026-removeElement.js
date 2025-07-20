/**
 * 🔥 LeetCode 26 - Remove Element
 * Given an integer array nums and an integer val, remove all occurrences of val in-place.
 * Return the number of elements not equal to val.
 * 
 *  Time: O(n) | Space: O(1)
 */

function removeElement(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}
