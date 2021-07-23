const colors = ["green", "purple", "turquoise", "grey", "yellow", "red", "black", "brown", "violet", "chartreuse", "coral", "pink", "salmon", "skyblue"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];   

    console.log(randomNumber);
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
