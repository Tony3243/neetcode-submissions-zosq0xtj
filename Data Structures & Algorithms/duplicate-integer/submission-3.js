class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //store sorted array in ascending
        const sorting = nums.sort((a,b) => a - b)//o(n)
        //iterate array using using for...of loop
        for(let i = 0; i < sorting.length; i++) { //o(n)
            //check if current num is equal to it's next num
            if(sorting[i] === sorting[i + 1]) {
                //if so, return true
                return true
            }
        }
        //return false
        return false
    }
}
//Time Complexity: O(n)
//Space Cpmplexity: O(n)