class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //creating a storage to put element-index pair
        let hashMap = {};//o(1) => O(n)
        //iterate through nums to access element and index
        for(let i = 0; i < nums.length; i++) { //O(n)
            //insert our element-index pair in hashMap
            hashMap[nums[i]] = i
        }
        //iterate nums
        for(let i = 0; i < nums.length; i++) { //O(n)
            //store difference of target and current element
            const diff = target - nums[i]
            //check if diff is not undefined and not current index
            if(hashMap[diff] !== undefined && hashMap[diff] !== i) {
                //return [current index, diff's value]
                return [i, hashMap[diff]]
            }
        }
        //return empty array
        return []
    }
}

//Time Complexity: O(n) + O(n) = O(n);
//Space Complexity: O(1)
