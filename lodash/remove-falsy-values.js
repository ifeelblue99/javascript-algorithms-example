let falsyArray = [1, "0", undefined, null, "true", true, NaN] 

function compact(arr) {

    let tr = arr.filter(el=>{
        return !el == false
    })
    
    return tr
}
console.log(falsyArray,"---->",compact(falsyArray));