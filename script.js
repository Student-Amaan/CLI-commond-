function removeDuplicate(arr){
    return [...new Set(arr)]
}

console.log(removeDuplicate([1,2,2,3,3,5,4,6,6]))


function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("javascript is very powerful"));
