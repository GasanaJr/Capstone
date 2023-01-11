let registered = {};
function signup() {
    let fname, email, pass, uname;
    fname = document.getElementById("fname").value;
    email = document.getElementById("email").value;
    pass = document.getElementById("pass").value;
    uname = document.getElementById("uname").value;
    registered.fullName = fname;
    registered.Email = email;
    registered.Password = pass;
    registered.userName = uname;
    // Sending to Local storage
    window.localStorage.setItem('users', JSON.stringify(registered));
}

function show() {
    let data = JSON.parse(window.localStorage.getItem('users'));
    console.log(data);
}