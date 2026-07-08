class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let val = []
        if(this.keyStore.has(key)){
             val = this.keyStore.get(key)
             val[timestamp] = value
        }else{
            val[timestamp]=value
            this.keyStore.set(key,val)
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(this.keyStore.has(key)){
            let val = this.keyStore.get(key)
            if(val[timestamp]){
                return val[timestamp]
            }else{
                while(timestamp>0){
                    if(val[timestamp]){
                        return val[timestamp]
                    }
                    timestamp--
                }
                return ''
            }
        }else{
            return ''
        }
    }
}
