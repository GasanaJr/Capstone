const token = localStorage.getItem('auth-token');
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
                 <td>${user.name}</td>
                 <td>${user.email}</td>
                 <td>${date}</td>
                 <td>${time}</td>
                 `;
                 
            });    
        }).catch(err => {
            console.log(err);
        })