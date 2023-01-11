var fullName;
var text;
var email;
document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    var dataa = JSON.parse(localStorage.getItem("dataa"));
    // if (data == null) {

    // }
    // else {

    // }
    const message = {
         fullName: document.getElementById("fname").value,
         text: document.getElementById("text").value,
         email: document.getElementById("email").value,
    };

    if (dataa = null) {
        dataa = [];
        data.push(message);
        localStorage.setItem('dataa', JSON.stringify(dataa));
    }
    else {
        dataa.push(message);
        localStorage.setItem('dataa', JSON.stringify(dataa));
    }
});

// function submitForm(event) {
//     event.preventDefault();
//     var milkBars = JSON.parse(localStorage.getItem("milkBars"));
//     if(milkBars == null){
//       var id = 0;
//     } else {
//       var id = milkBars.length;
//     }
//     const bar = {
//       id: id,
//       name: document.forms[0][0].value,
//       tag: document.forms[0][1].value,
//       supplier: document.forms[0][2].value,
//       location: document.forms[0][3].value,
//       rating: document.forms[0][4].value,
//       image: document.forms[0][5].value
//     };
//     if (milkBars == null) {
//        milkBars = [];
//       milkBars.push(bar);
//       localStorage.setItem("milkBars", JSON.stringify(milkBars));
//       alert("Milk Bar Created")
//       document.forms[0][0].value = "",
//       document.forms[0][1].value = "",
//       document.forms[0][2].value = "",
//       document.forms[0][3].value = "",
//       document.forms[0][4].value = "",
//       document.forms[0][5].value = ""
//     } else {
//       milkBars.push(bar);
//       localStorage.setItem("milkBars", JSON.stringify(milkBars));
//       alert("Milk Bar Created");
//       document.forms[0][0].value = "",
//       document.forms[0][1].value = "",
//       document.forms[0][2].value = "",
//       document.forms[0][3].value = "",
//       document.forms[0][4].value = "",
//       document.forms[0][5].value = ""
//     }
//   }