student = JSON.parse(localStorage.getItem("Student"));
document.getElementById("studentname").innerHTML = student.Studentname;
let type = student.type;
let hair = student.hairstyle;
let color = student.haircolor;
let hårfärg = "";
let Kropp = document.getElementById("body");
let Hair = document.getElementById("hår");
let title = document.getElementById("title");
if(type == "teknik"){
    title.innerHTML = "Sunkaren av annexet";
}
else if (type == "estet"){
    title.innerHTML = "Dammaren av donken";
    Hair.style.top = "14vh"
    Hair.style.width = "13vw"
}
else if (type == "el"){
    title.innerHTML = "Slaggaren av DAODAC";
    Hair.style.width = "8vw";
    Hair.style.right = "49.5vw"
}
let strength = Math.floor(Math.random() * 100);
document.getElementById("strenght").innerHTML = strength;
document.getElementById("IQ").innerHTML = 200-strength;
let speed = Math.floor(Math.random() * 100);
document.getElementById("speed").innerHTML = speed;
document.getElementById("dexterity").innerHTML = 100-speed;
document.getElementById("age").innerHTML = student.age;
if(color == "red"){
    hårfärg = "röd";
}
else if(color == "green"){
    hårfärg = "grön";
}
else if(color == "blue"){
    hårfärg = "blå";
}
else{
    hårfärg = "svart/brunt";
}
if(type == "estet" && hair == 2 && color == "black"){
    hårfärg = "grön och lila"
}
if(type == "el" && hair == 1 && color == "black"){
    hårfärg = "blond"
}
document.getElementById("hårfärg").innerHTML = hårfärg;
Kropp.src = type+".png";
Hair.src = type+"hår"+hair+".png";
Hair.style.filter = "opacity(0.5) drop-shadow(0 0 0 "+color+")";