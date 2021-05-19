let EstetButton = document.querySelector("[data-estetbutton]");
let TeknikButton = document.querySelector("[data-teknikbutton]");
let ElButton = document.querySelector("[data-elbutton]");
ElButton.addEventListener("click", () => setStudentType("el"));
EstetButton.addEventListener("click", () => setStudentType("estet"));
TeknikButton.addEventListener("click", () => setStudentType("teknik"))
function setStudentType(type){
    localStorage.setItem("studentType", type);
    location.href = "custom.html";
}