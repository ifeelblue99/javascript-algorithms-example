function TreeConstructor(strArr) { 

  let str = strArr.toString().match(/\w+/g).join('')

  let counter = s => {
    return s.split('').reduce((total, letter) => {
      total[letter] ? total[letter]++ : total[letter] = 1;
      return total;
    }, {});
  };
  const values = Object.values(counter(str));

  return values.includes(4)?false:true  
}
   
// keep this function call here 
console.log(TreeConstructor(readline()));