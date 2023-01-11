var email;
var fullName;
var text;
let popup = document.getElementById('popup');
// let sbtn = document.getElementById('sbtn');
let cbtn = document.getElementById('cbtn');
document.getElementById('form').addEventListener("submit", function(e){
    e.preventDefault();
    popup.classList.add("open-popup");
        const msg = {
            fullName: document.getElementById("fname").value,
             text: document.getElementById("text").value,
             email: document.getElementById("email").value,
        };
        var query = JSON.parse(localStorage.getItem("query"));
    if( query == null) {
        var query = [];
        query.push(msg);
        localStorage.setItem("query", JSON.stringify(query));
    }
    else {
        query.push(msg);
        localStorage.setItem("query", JSON.stringify(query));
    }
});

cbtn.addEventListener("click", function(e){
    e.preventDefault();
    popup.classList.remove("open-popup");
    document.getElementById("fname").value = "";
    document.getElementById("text").value = "";
    document.getElementById("email").value = "";
});

