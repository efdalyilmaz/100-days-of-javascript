const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
    let word = document.querySelector(".input-text").value;
    word = word.toLowerCase();

    const wordLength = word.length;
    if(wordLength===0){
        result.innerHTML="";
        return;
    }

    const half = wordLength%2==0?wordLength/2:(wordLength+1)/2;
    
    const firstHalf = word.substring(0, half);
    let lastHalf = "";
    if(wordLength%2==0){
        lastHalf = word.substring(half, wordLength);
    }else {
        lastHalf = word.substring(half-1, wordLength);
    }

    const reverseLastHalf = lastHalf.split("").reverse().join("");

    if(reverseLastHalf == firstHalf){
        result.innerHTML = `${word.toUpperCase()} is a palindrome`;
    }else{
        result.innerHTML = `${word.toUpperCase()} is not a palindrome`;        
    }

}
