document.getElementById('form').addEventListener("submit", function(e){
    e.preventDefault();
     // Requesting values
    
     var email;
     var fullName;
     var text;
     
 
     // Storing the values
     // message.email = email;
     // message.fullName = fullName;
     // message.text = text;
 
     const msg = {
      fullName: document.getElementById("fname").value,
       text: document.getElementById("text").value,
       email: document.getElementById("email").value,
  };
 
     var message = JSON.parse(localStorage.getItem("message"));
     if(message == null) {
        message = [];
        message.push(msg);
        localStorage.setItem("message", JSON.stringify(message));
     }
     else {
        message.push(msg);
        localStorage.setItem("message", JSON.stringify(message));
     }
 
     // Send data to local storage
 
     // window.localStorage.setItem("message", JSON.stringify(message));
 
     // Change styles
     //changeStyle();
    //  var interval = setInterval(changeStyle, 1000);
    //  clearInterval(interval);
     
 
 }
);

// function changeStyle() {
//     var button = document.querySelector("button");
//     button.innerText = "Sent!";
//     button.style.fontSize = "18px";
//     button.style.backgroundColor = "darkgreen";
// }

    

   
