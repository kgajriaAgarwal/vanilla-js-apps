const container = document.getElementById('bg-container');
const btn = document.getElementById('bg-change-btn');

console.log('container', container);
console.log('btn', btn);

//create random colour
function randomColor(){
    let hexCode = '#';
    let hexTresure = '0123456789ABCDEF';
    for(let i = 0 ; i < 6 ; i++){
        hexCode += hexTresure[Math.floor(Math.random() * 16)];
        console.log('hexCode:', hexCode);
    } 
    return hexCode;
}

btn.onclick = () => {
    container.style.backgroundColor = randomColor();
}