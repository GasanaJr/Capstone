const token = localStorage.getItem('auth-token');
if(!token) {
    window.location.href = "./login.html"
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

// const btn = document.getElementById('logout');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     localStorage.removeItem('auth-token'); 
//     window.location.href = './index.html';
// })
