class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let count = 1;
        let maxCount = 0;

        const sorting = nums.sort((a,b) => a - b);
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === nums[i + 1]) {
                continue
            }
            if(nums[i] + 1 === nums[i + 1]) {
                count++
            } else {
                count = 1
            }
            maxCount = Math.max(maxCount, count)
        }
        return maxCount
    }
}
