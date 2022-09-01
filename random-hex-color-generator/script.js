const color = document.querySelector(".color");
const btn = document.querySelector(".generate");

const generateColor = () => {
    const rand = Math.random().toString(16).substring(2,8);
    color.innerHTML = "#"+rand;
    document.body.style.backgroundColor =color.innerHTML;
}

btn.addEventListener("click", generateColor);
