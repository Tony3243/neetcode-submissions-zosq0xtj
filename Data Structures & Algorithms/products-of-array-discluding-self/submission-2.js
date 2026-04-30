class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        let result = new Array(n).fill(1);

        let prefix = 1;
        for(let i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1]
            //console.log(result[i])
        }
        console.log(result)
        

        let postfix = 1;
        for(let i = n - 1; i >= 0; i--) {
            result[i] *= postfix
            postfix *= nums[i]
            //console.log(postfix)
        }
        return result
    }
}


