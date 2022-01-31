let arr1 = ["fig", "apple", "grape", "banana", "orange"]
let arr2 = ["apple", "banana", "cherry"]

function intersect(array1, array2){
    let intersectArr = []

    array1.forEach(el=>{
        doesContain(el, array2, intersectArr)
    })

    return intersectArr
}

function doesContain(element, array, intersection){
    if(array.indexOf(element) == -1){
        return false
    }else{
        intersection.push(element)   
    }
}
    
console.log("array1:",arr1,"\narray2:",arr2,"\nintersection:",intersect(arr1, arr2));