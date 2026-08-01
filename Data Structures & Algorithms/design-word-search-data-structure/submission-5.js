class TrieNode{
    constructor(){
        this.children={}
        this.isEnd = false
    } 
}
class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let current = this.root
        for(let i=0;i<word.length;i++){
            let c = word[i]
            if(!current.children[c]){
                current.children[c] = new TrieNode()
            }
            current = current.children[c]
        }
        current.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(j,node){
        let curr = node
        for(let i=j;i<word.length;i++){
            let c = word[i]
            if(c=='.'){
                for(let c of Object.values(curr.children)){
                    if(dfs(i+1,c))
                        return true
                }
                return false
            }else{
                if(!curr.children[c]){
                    return false
                }
                curr = curr.children[c]
            }
        }
        return curr.isEnd
        }
        return dfs(0,this.root)
    }
}
