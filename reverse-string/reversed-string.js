function reverse(str){

    let reversed = []
    
    let indexes = []
    for (let i = 0; i < str.length; i++) {
        indexes.unshift(i)
    }
    for (let i = 0; i < str.length; i++) {
        reversed.push(str[indexes[i]])
    }
    
    return reversed.join("")
}
    
console.log("reversed string: "+reverse("hello, world"));