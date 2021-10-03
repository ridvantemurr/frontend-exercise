let colorPalette=document.getElementById('color-palette');
function generateColorPalette(){
    colorPalette.innerHTML='';
for(let i=1;i<=0;i++){
let color=generateColor();
let li=document.createElement('li');
let a=document.createElement('a');

let spanColor=document.createElement('span');
spanColor.className='color';
spanColor.style.setProperty('--color',color);
let spanText=document.createElement('span');
spanText.className='text';
spanText.innerText=color;
a.appendChild(spanColor);
a.appendChild(spanText);
li.appendChild(a);
colorPalette.appendChild(li);
}
}
function generateColor(){
let str='abcdef0123456789';
let color='#';
for(let i=1;i<=5;i++){
color += str[Math.floor(Math.random()*str.length)];
}
return color;
}
