class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let n = nums.length;
       let result = new Array(n).fill(0);
       for(let i = 0; i < n; i++) {
            let product = 1;
            for(let j = 0; j < n; j++) {
                if(j !== i) {
                    product *= nums[j]
                }
            }
            result[i] = product
       }
       return result
    }
}


//prefixSum[0] = nums[0]