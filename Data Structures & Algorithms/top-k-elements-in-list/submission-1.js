class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        for(const num of nums) {
            count[num] = (count[num] || 0) + 1
        }
        const reducing = Object.keys(count).sort((a,b) => count[b] - count[a])
        .slice(0, k).map(Number);
        return reducing
    }
}
