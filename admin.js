const token = localStorage.getItem('auth-token');
if(!token) {
    window.location.href = "./login.html"
}

let menuu = document.querySelector('#menu-icon');
let navbarr = document.querySelector('.navbar');

menuu.onclick = () => {
	menuu.classList.toggle('bx-x');
	navbarr.classList.toggle('open');
}

// const btn = document.getElementById('logout');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     localStorage.removeItem('auth-token'); 
//     window.location.href = './index.html';
// })
