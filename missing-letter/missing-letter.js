let alphabet = "abcdefghijklmnopqrstuvwxyz";

function findMissingLetter(str){
    
    let index = alphabet.indexOf(str[0])
    let alphabeticPart = alphabet.substring(index,(index + str.length+ 1))
    
    alphabeticPart = alphabeticPart.split("")
    str = str.split("")
    
    let letter = alphabeticPart.filter(x => !str.includes(x))
    
    return letter
    //return alphabeticPart
}
    
console.log("missing letter: "+findMissingLetter("opqrt"));