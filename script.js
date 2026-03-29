function removeDuplicate(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicate([1, 2, 2, 3, 3, 5, 4, 6, 6]));

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("javascript is very powerful"));

function slowSpeed() {
  setTimeout(() => {
    console.log("You are very lazy");
    let speed = 40;
    if (speed >= 50) {
      console.log("You are in Madium speed");
    }else if(speed <= 50){
      console.log("You are in low speed")
    }
  }, 2000);
}

console.log(slowSpeed())
