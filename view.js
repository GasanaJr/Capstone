const token = localStorage.getItem('auth-token');
//console.log(token);
if(!token) {
    window.location.href = "./login.html"
}
        fetch('https://junior-capstone-backend.onrender.com/api/user', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
               // "auth-token": token
            }
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            data.forEach(user => {
            var fulldate = user.date;
            var date = fulldate.split("T")[0];
            var timee = fulldate.split("T")[1];
            var time = timee.split('.')[0];
            var table = document.querySelector('table');
            var tbody = document.querySelector('tbody');
            tbody.innerHTML += `
                 <td data-label = "Name">${user.name}</td>
                 <td class = "email" data-label = "Email">${user.email}</td>
                 <td data-label = "Date">${date}</td>
                 <td data-label = "Time">${time}</td>
                 `;
                 
            });    
        }).catch(err => {
            console.log(err);
        })

        let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}