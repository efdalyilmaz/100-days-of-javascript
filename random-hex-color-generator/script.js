const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");


const generateColor = () => {
    const rand = Math.random().toString(16).substring(2,8);
    hex.innerHTML = "#"+rand;
    document.body.style.backgroundColor =hex.innerHTML;
}


btn.addEventListener("click", generateColor);
