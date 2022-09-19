const container = document.getElementById('cont');
const colors = ["#faebd7", "#AFEEEE", "#00ffff", "#f0f8ff", "#F0FFFF"];
const BOX = 600;

//Random selection of color from the array above
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const setColor = (box) => {
    const color = getRandomColor();
    box.style.background = color;
    box.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (box) => {
    box.style.background = "#1d1d11";
    box.style.boxShadow = "0 0 4px #000";
}

for (let i = 0; i < BOX; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseover", () => setColor(box));
    box.addEventListener("mouseout", () => removeColor(box));
    container.appendChild(box);
}