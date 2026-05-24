class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isAlphaNum(str){
           return /^[a-zA-Z0-9]+$/.test(str)
        }
        let arr = s.split(' ').join('').split('')
        let left = 0
        let right = arr.length-1;
        while(left<right){
            if(!isAlphaNum(arr[left])){
                left++
            }else if(!isAlphaNum(arr[right])){
                right--
            }else{
                if(arr[left].toLowerCase()!==arr[right].toLowerCase()){
                    return false
                }
                left++
                right--
            }
        }
        return true
    }
}
