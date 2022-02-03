function BracketMatcher(str) { 

  let openB = str.split("").filter(el=>{
    return el =="("
  })
  let closeB = str.split("").filter(el=>{
    return el ==")"
  })

  if(closeB.length!==openB.length
        ||closeB.length==0  
            ||openB.length==0){ 
              return 0
  }else{
    return 1
  }
}

// keep this function call here 
console.log(BracketMatcher(readline()));