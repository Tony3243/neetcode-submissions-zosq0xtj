class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const object = {};
        for(const num of nums) {
            object[num] = (object[num] || 0) + 1
        }
        for(const key in object) {
            if(object[key] > 1) {
                return true
            }
        }
        return false
    }
}
