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
localStorage.setItem("HairColor", "black");
localStorage.setItem("HairStyle", 1);
if(student=="el"){
    Body.style.top = "8vh"
    Hair.style.width = "12vh"
    Body.style.right =   "33vw"
}
if(student == "teknik"){
    Body.style.top="10.5vh"
}
function Hairstyle(hair){
    localStorage.setItem("HairStyle", hair);
    Hair.src = student+"hår"+hair+".png";
}
function HairColor(color){
    localStorage.setItem("HairColor", color);
    Hair.style.filter = "opacity(0.5) drop-shadow(0 0 0 "+color+")";
}
function createstudent() {
    if(document.getElementById("name").value == ""){
        document.getElementById("noname").innerHTML = "Skriv in ett namn";
        return false;
    }
    else{
        document.getElementById("noname").innerHTML = "";
    }
    if(document.getElementById("age").value == ""){
        document.getElementById("noage").innerHTML = "Skriv in en ålder";
        return false;
    }
    else{
        document.getElementById("noage").innerHTML = "";
    }
    age = document.getElementById("age").value;
    Studentname = document.getElementById("name").value;
    let student = {
        hairstyle: localStorage.getItem("HairStyle"),
        haircolor: localStorage.getItem("HairColor"),
        type: localStorage.getItem("studentType"),
        Studentname: Studentname,
        age: age
    };
    localStorage.setItem("Student", JSON.stringify(student));
    open("result.html");
    return student;
}