let array = ["color", "cold", "cordoba", "cool"]


function longestCommonPrefix(arr){
  if (!arr[0] || arr.length ==  1) return arr[0] || "";
  
  let i = 0;
  
  while(arr[0][i] && arr.every(w => w[i] === arr[0][i])) i++;

  return arr[0].substr(0, i);
}

console.log(longestCommonPrefix(array))