let hexNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let colorPick = document.querySelector(".color__pick");
let colorCode = document.querySelector(".color__code");

colorPick.addEventListener("click", () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexNumber.length);
        hexColor += hexNumber[random];
    }
    document.body.style.backgroundColor = hexColor;
    colorCode.innerHTML = hexColor.toUpperCase();
})

function copy() {
    let input = document.createElement("INPUT");
    document.body.appendChild(input);
    input.value = colorCode.innerHTML;
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(input);
}