var email;
var content;
let popup = document.getElementById('popup');
// let sbtn = document.getElementById('sbtn');
let cbtn = document.getElementById('cbtn');
document.getElementById('form').addEventListener("submit", async function(e){
    e.preventDefault();
    var name =  document.getElementById("fname").value;
    content = document.getElementById("text").value;
    email = document.getElementById("email").value;

    const result = await fetch('https://junior-capstone-backend.onrender.com/message/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            content
        })
    });

    const data = await result.json();
    if(result.status == 200) {
        popup.classList.add("open-popup");
    }
    else {
        alert(data.Message);
    }





        
    // var query = JSON.parse(localStorage.getItem("query"));   
    // if( query == null) {
    //     const msg = {
    //         id: 1,
    //         fullName: document.getElementById("fname").value,
    //          text: document.getElementById("text").value,
    //          email: document.getElementById("email").value,
    //     };
    //     var query = [];
    //     query.push(msg);
    //     localStorage.setItem("query", JSON.stringify(query));
    // }
    // else {
    //     let length = query.length;
    //     const msg = {
    //         id: length+1,
    //         fullName: document.getElementById("fname").value,
    //          text: document.getElementById("text").value,
    //          email: document.getElementById("email").value,
    //     };
    //     query.push(msg);
    //     localStorage.setItem("query", JSON.stringify(query));
    // }
});

cbtn.addEventListener("click", function(e){
    e.preventDefault();
    popup.classList.remove("open-popup");
    document.getElementById("fname").value = "";
    document.getElementById("text").value = "";
    document.getElementById("email").value = "";
});

