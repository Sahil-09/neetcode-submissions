class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {

        const compare=(a,b)=>b-a

        let heap=[]
        const add = (val)=>{
            heap.push(val)
            let n = heap.length-1
            while(n>0){
                const p = n-1 >> 1;
                if(heap[p]-heap[n]<=0) return;
                [heap[n],heap[p]] = [heap[p],heap[n]]
                n=p
            }
        }

        function pop() {
            if(heap.length==1) return heap.pop()
            const top = heap[0];
            heap[0] = heap.pop();
            let i=0
            while(true){
                let min = i;
                const l = 2*i+1,r=2*i+2
                if(l< heap.length && compare(heap[min],heap[l])<0) min=l;
                if(r< heap.length && compare(heap[min],heap[r])<0) min=r;
                if(i==min) break;
                [heap[i],heap[min]] = [heap[min],heap[i]] 
                i=min
            }
            return top
        }

        nums.forEach((n)=>{
            add(n)
            if(heap.length>k){
                pop()
            }
        })

        console.log(heap)
        return heap[0]
    }
}
