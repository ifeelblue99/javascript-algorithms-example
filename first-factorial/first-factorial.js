function FirstFactorial(num) { 

  let arr = []
  while(!num==0){
    arr.push(num)
    num--
  }

  let sol = arr.reduce((total,item)=>{
    return total*=item
  })

  return sol
}
   console.log(FirstFactorial(7));