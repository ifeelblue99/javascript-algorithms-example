arr = [1, 2, 3, 4, 5, 6]

function arrayModifier(array){
    
    let mult = arr.reduce((total, element)=>{
        return total*=element
    })
    
    let modifiedArray = arr.map(el=>{
        return mult/el
    })
    
    return modifiedArray
}
    
console.log("modified array:",arrayModifier(arr));