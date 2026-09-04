class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //storing a new Set constructor
        let unique = new Set()//O(N)
        //iterating through nums using for...of loop
        for(const num of nums) {//O(n)
            //check if current num is in the set
            if(unique.has(num)) {
                //if so, return true
                return true
            }
            //add that element inside of set
            unique.add(num)
        }
        //return false
        return false
    }
}

//Time Complexity: o(n)
//Space Complexity: o(n)
