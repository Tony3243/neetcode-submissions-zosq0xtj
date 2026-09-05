class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //base case; comparing if they are the same length
        if(s.length !== t.length) {
            return false
        }
        //set up hashTables for each string
        let hashT = {} 
        let hashS = {};
        //iterate through one of the strings using traditional for loop
        for(let i = 0; i < s.length; i++) {
            //implement key value pairs for hashS
            hashS[s[i]] = (hashS[s[i]] || 0) + 1
            //implement key value pairs for hashT
            hashT[t[i]] = (hashT[t[i]] || 0) + 1
        }
        console.log(hashT)
        console.log(hashS)
        for(const key in hashT) {
            //compare if hashT is not equal to hashS
            if(hashT[key] !== hashS[key]) {
                //if so, return false
                return false
            }
        }
        //return true
        return true
    }
}
