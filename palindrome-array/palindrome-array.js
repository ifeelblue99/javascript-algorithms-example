myArray = ["A man", "A plan", "a canal", "panama"]

function checkPalindromArray(arr){
    
    arr = arr.map(el=>el.replace(" ",""))
    let word = arr.join("").toLowerCase()

    let reversedWord = reverseString(word)

    return reversedWord == word
}

function reverseString(str){
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

console.log(`is [${myArray}] an array palindrom?`,checkPalindromArray(myArray));