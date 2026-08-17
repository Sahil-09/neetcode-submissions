class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        class MinHeap{
            constructor(compareFn=(a,b)=>a-b){
                this.heap=[]
                this.compare=compareFn
            }

            push(val){
                this.heap.push(val)
                this._up(this.heap.length-1)
            }

            size(){
               return this.heap.length
            }

            _up(n){
                let i = n
                while(i>0){
                    const parent = Math.floor((i - 1) / 2);
                    if (this.compare(this.heap[parent], this.heap[i]) <= 0) break;
                    [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
                    i = parent;
                }
            }

            pop() {
                if (this.heap.length === 1) return this.heap.pop();
                const top = this.heap[0];
                this.heap[0] = this.heap.pop();
                let i = 0;
                while (true) {
                    let min = i;
                    const l = 2 * i + 1, r = 2 * i + 2;
                    if (l < this.heap.length && this.compare(this.heap[l], this.heap[min]) < 0) min = l;
                    if (r < this.heap.length && this.compare(this.heap[r], this.heap[min]) < 0) min = r;
                    if (min === i) break;
                    [this.heap[i], this.heap[min]] = [this.heap[min], this.heap[i]];
                    i = min;
                }
                return top;
             }
        }

        let freq={}
        
        for(const task of tasks){
            freq[task] = (freq[task] || 0) +1;
        }

        const heap = new MinHeap()
        for(const count of Object.values(freq)){
            heap.push(-count)
        }

        const cooldown=[]
        let time=0
        while(heap.size()>0 || cooldown.length>0){
            time++;
            if(heap.size()>0){
                let count = heap.pop() + 1;
                if(count!==0){
                    cooldown.push([count,time+n]);
                }
            }

            if(cooldown.length && cooldown[0][1]===time){
                const [count] = cooldown.shift();
                heap.push(count)
            }
        }
        return time
    }
}
