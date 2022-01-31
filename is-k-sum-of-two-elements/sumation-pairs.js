let arr = ["7", "1", "5", "2", "9", "3", "11", "4"]

// sorting func
Array.prototype.sortArray = function(){
    let done = false
    while(!done){
        done = true
        for(let i = 1;i<this.length;i++){
            if(parseInt(this[i-1], 10) > parseInt(this[i], 10)){
                done = false
                let b = this[i-1]
                this[i-1] = this[i]
                this[i] = b
            }
        }
    }
    return this
}
// does contain
Array.prototype.arrContain = function(item){
    for(let i of this){
        if(i == item){
            return true
        }
    }
}

function isKSumOf(k, array){
    // sorting
    arr = arr.sortArray()
    
    let lessThanK = []
    arr.forEach(el=>{
        el<k?lessThanK.push(el):false
    })
    
    let pairs = []
    for(let i=0; i<lessThanK.length;i++){
        let dif = k - lessThanK[i]
        
        lessThanK.arrContain(dif)?pairs.push([dif, lessThanK[i]]):false
    }
    
    return pairs
}
console.log("the given number is sum of those pairs:",isKSumOf(8,arr));