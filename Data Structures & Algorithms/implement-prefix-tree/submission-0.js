class TrieNode{
    constructor(){
        this.children={}
        this.isEnd = false
    }
}
class PrefixTree {
    constructor() { 
        this.root = new TrieNode()
    }
    
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let current = this.root
        for(let char of word){
            if(!current.children[char]){
                current.children[char] = new TrieNode
            }
            current = current.children[char]
        }
         current.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let current = this.root
        for(let char of word){
            if(!current.children[char]){
               return false
            }
            current = current.children[char]
        }
        return current.isEnd
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let current = this.root
        for(let char of prefix){
            if(!current.children[char]){
               return false
            }
            current = current.children[char]
        }
        return true
    }
}
