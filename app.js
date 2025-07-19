
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let h1 = document.querySelector("h1");
    let randomcolor = getRandomColor();
    h1.innerText = randomcolor;

    let body = document.querySelector("body");
    body.style.backgroundColor = randomcolor;

    console.log("color upgrated");
    
});
function getRandomColor() {
   let red = Math.floor(Math.random() * 255);
   let green = Math.floor(Math.random() * 255); 
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}