class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];
        const sorted = nums.sort((a,b) => a - b);
        for(let i = 0; i < sorted.length; i++) {
            if(nums[i] > 0) break
            if(i > 0 && nums[i] === nums[i - 1]) continue

            let l = i + 1;
            let r = sorted.length - 1
            while(l < r) {
                const sum = sorted[i] + sorted[l] + sorted[r];
                if(sum > 0) {
                    r--;
                } else if(sum < 0) {
                    l++;
                } else {
                    result.push([sorted[i], sorted[l], sorted[r]]);
                    l++;
                    r--;
                    while(l < r && sorted[l] === sorted[l - 1]) {
                        l++;
                    }
                }
            }
        } 
        return result       
    }
}