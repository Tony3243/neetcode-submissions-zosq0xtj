class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //creating an empty hashTable
        let hashTable = {}
        //iterating through my nums array using for...of loop
        for(const num of nums) {
            //inserting into hashTable with key(element) value(freq)
            hashTable[num] = (hashTable[num] | 0) + 1
        }
        //iterate through hash table using for...in loop
        for(const key in hashTable) {
            //check if any of the values within pair is more than one
            if(hashTable[key] > 1) {
                //return true
                return true
            }
        }
        //return false
        return false
    }
}
