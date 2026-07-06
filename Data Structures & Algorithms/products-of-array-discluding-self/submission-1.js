class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zero = nums.filter((a)=>a==0)
        let allProduct = nums.reduce((a,b)=>{
            if(zero.length==1 && b==0){
                return a
            }else{
                return a*b
            }
        },1)
        if(zero.length>1){
            return nums.map((el)=>0)
        }
        return nums.map((el)=>{
            if(zero.length==1){
                if(el==0){
                    return allProduct
                }else{
                    return 0
                }
            }else{
                return allProduct/el
            }
        })
    }
}
