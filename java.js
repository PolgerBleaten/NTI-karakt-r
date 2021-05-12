let EstetButton = document.querySelector("[data-estetbutton]");
let TeknikButton = document.querySelector("[data-teknikbutton]");
let ElButton = document.querySelector("[data-elbutton]");
ElButton.addEventListener("click", () => setStudentType("el"));
EstetButton.addEventListener("click", () => setStudentType("estet"));
TeknikButton.addEventListener("click", () => setStudentType("teknik"))
function createStudent(name, age) {
    let student = {
        type: localStorage.getItem("studentType"),
        name: name,
        age: age
    };
    return student;
}
// JSON.stringify(createStudent(type, "Boris", 17))
function setStudentType(type){
    localStorage.setItem("studentType", type);
    location.href = "Custom.html";
}

function greetStudent() {
    let student = JSON.parse(localStorage.getItem("studentType"));
    alert("Hey, " + student.name + "! You are a " + student.type + " student.");
}
