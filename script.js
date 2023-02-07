let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}


// const logout = document.querySelector('.hidden');
// const login = document.querySelector('.visible');
let token = localStorage.getItem("auth-token", "true");
const data = document.querySelector('[data-id]');
//console.log(data.dataset.id);


// const dataSignedIn = document.querySelector('[data-id]')
// console.log(dataSignedIn);

 if (token) {
   data.dataset.signedin = "false";
 } else {
   data.dataset.signedin = "true";
 }