const array = [3, 7, 3, 2, 1, 5, 5, 5, 1, 2, 2, -2, 2] 
    
function boomerang(arr){
    
    let str = arr.forEach((el,ind)=>{
        
        if(el==arr[ind] && el!=arr[ind-1]){
            console.log(el,arr[ind-1],arr[ind])
        }
        
        //console.log(el)
    })
    
    return str
}
    
    
console.log("number of boomerangs:",boomerang(array));