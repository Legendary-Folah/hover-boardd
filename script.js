const container = document.getElementById('cont');
const colors = ["#056CF2", "#05SFF2", "#F2E205", "#F28705", "#A62103"];

//Random selection of color from the array above
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const setColor = (box) => {
    const color = getRandomColor();
    box.style.background = color;
    box.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (box) => {
    box.style.background = "#1d1d11";
    box.style.boxShadow = "0 0 2px #000";
}