class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = {}
        //create a new Array forming sublist of [value, freq]
        const freq = Array.from({length: nums.length + 1}, () => [])

        for(const num of nums) {
            frequency[num] = (frequency[num] || 0) + 1;
        }

        for(const num in frequency) {
            freq[frequency[num]].push(parseInt(num))
        }

        console.log(freq)

        let result = [];
        for(let i = freq.length - 1; i > 0; i--) {
            for(const num of freq[i]) {
                result.push(num);
                if(result.length === k) return result
            }
        }
    }
}
