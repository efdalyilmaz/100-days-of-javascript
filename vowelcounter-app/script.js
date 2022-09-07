const input = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", countVowel);

function countVowel() {
    const word = input.value;
    let count =0;
    [...word].forEach(l => {
        if(l.match(/([a,e,i,o,u])/)){
            count++;
        }
    });

    result.innerHTML=`${word.toUpperCase()} has ${count} vowels`;
}
