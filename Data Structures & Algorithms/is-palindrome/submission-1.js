class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //store pattern for any character that is not a number nor letter;
        const pattern = /[^a-zA-Z0-9]/g
        //replace pattern with closed space and turn to lowercase
        let condensed = s.replace(pattern, "").toLowerCase()
        //set pointer i; starts at the begining of string;
        let i = 0;
        //set pointer j; starts at the end of string;
        let j = condensed.length - 1
        //loop while j is greater than i
        while(j > i) {
            //check if element at i is equal to pointer at j
            if(condensed[i] === condensed[j]) {
                //if so, increment i
                i++;
                //if so, decrement j
                j--;
            } else {
                return false
            }
        }
        console.log(i,j)
        return true
    }
}

