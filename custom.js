student = localStorage.getItem("studentType");
let BlueButton = document.getElementById("Blue");
let BlackButton = document.getElementById("Black");
let RedButton = document.getElementById("Red");
let GreenButton = document.getElementById("Green");
let HairButton1 = document.getElementById("hair1");
let HairButton2 = document.getElementById("hair2");
let Body = document.getElementById("body");
let Hair = document.getElementById("hår");
Body.src = student+".png";
Hair.src = student+"hår1.png"
HairButton1.src = student+"hår1.png";
HairButton2.src = student+"hår2.png";
RedButton.style.filter = "opacity(0.5) drop-shadow(0 0 0 red)";
GreenButton.style.filter = "opacity(0.5) drop-shadow(0 0 0 green)";
BlueButton.style.filter = "opacity(0.5) drop-shadow(0 0 0 blue)";
RedButton.addEventListener("click", () => HairColor("red"))
BlueButton.addEventListener("click", () => HairColor("blue"))
BlackButton.addEventListener("click", () => HairColor("black"))
GreenButton.addEventListener("click", () => HairColor("green"))
HairButton1.addEventListener("click", () => Hairstyle("1"))
HairButton2.addEventListener("click", () => Hairstyle("2"))
if(student=="el"){
    Body.style.top = "8vh"
    Hair.style.width = "12vh"
    Body.style.right =   "33.5vw"
}
if(student == "teknik"){
    Body.style.top="10.5vh"
}
function Hairstyle(hair){
    Hair.src = student+"hår"+hair+".png";
}
function HairColor(color){
    Hair.style.filter = "opacity(0.5) drop-shadow(0 0 0 "+color+")";
}