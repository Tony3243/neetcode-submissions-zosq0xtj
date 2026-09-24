class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        //declare one pointer 
        let i = 0;
        //declare second pointer
        let j = numbers.length - 1
        let total = 0;
        while(j > i) {
            total = numbers[i] + numbers[j]
            if(total === target) {
                return [i + 1,j + 1]
            }
            if(total > target) {
                j--
            }
            if(total < target) {
                i++
            }
        }
        return []
    }
}
