let button = document.getElementById("btn");
let body = document.querySelector("body");
let span = document.getElementById("hex-value");
let hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

button.addEventListener('click',function colorChange(){
    //Generate hex
    let hexColor = [];
    for(let i=0;i<6;i++){
        let ran = Math.ceil(Math.random()*hex.length-1);
        let newHex = hex[ran];
        hexColor.push(newHex);
    }
    body.style.backgroundColor = `#${hexColor[0]}${hexColor[1]}${hexColor[2]}${hexColor[3]}${hexColor[4]}${hexColor[5]}`;
    span.innerHTML = `#${hexColor[0]}${hexColor[1]}${hexColor[2]}${hexColor[3]}${hexColor[4]}${hexColor[5]}`;
})