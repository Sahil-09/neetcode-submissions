class MinStack {
    constructor() {
        this.arr=[]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.arr.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.arr.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        let min=Infinity;
        for(let a of this.arr){
            if(min>a){
                min = a
            }
        }
        return min;
    }
}
