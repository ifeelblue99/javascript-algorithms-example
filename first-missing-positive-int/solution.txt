// find first missing integer

let numArray = [-2, -1, 0, 1, 3]

function firstMissnigInt(arr){

    let a = []
    for(let i = arr[0]; i<arr.length-1;i++){
        a.push(i)
    }
    
    let m = a.filter((el)=>{
        return !arr.includes(el)
    })
    
    return m
}


console.log(numArray,"missing value:",firstMissnigInt(numArray));