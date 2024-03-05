let button1 = document.getElementById('btn1');
let display = document.getElementById('display');

let hexNum = "0123456789abcdef"
const my = () =>{
    let hex1 = "#"
    for (let i=0 ; i<6; i++){
        hex1 = hex1 + `${hexNum[Math.floor(Math.random() *16)]}`;
    }
    document.body.style.backgroundColor  = hex1;
    display.innerHTML = hex1;
}

button1.addEventListener('click',my);
