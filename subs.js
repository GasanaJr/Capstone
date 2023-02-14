let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}
const token = localStorage.getItem('auth-token');
//console.log(token);
if(!token) {
    window.location.href = "./login.html"
}
        fetch('http://localhost:3000/subscribe', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token
            }
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            data.forEach(sub => {
            var fulldate = sub.date;
            var date = fulldate.split("T")[0];
            var timee = fulldate.split("T")[1];
            var time = timee.split('.')[0];
            var table = document.querySelector('table');
            var tbody = document.querySelector('tbody');
            tbody.innerHTML += `
                 <td>${sub.email}</td>
                 <td>${date}</td>
                 <td>${time}</td>
                 `;
                 
            });    
        }).catch(err => {
            console.log(err);
        })