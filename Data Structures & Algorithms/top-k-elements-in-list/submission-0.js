class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashMap = {};
        for(let i = 0; i < nums.length; i++) {
            hashMap[nums[i]] = (hashMap[nums[i]] || 0) + 1
        }
        const reducing = Object.keys(hashMap).sort((a,b) => hashMap[b] - hashMap[a]).slice(0, k)
        console.log(reducing)
        return reducing
    }
}
