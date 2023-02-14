const token = localStorage.getItem('auth-token');
if(!token) {
    window.location.href = "./login.html"
}

const btn = document.getElementById('logout');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('auth-token'); 
    window.location.href = './index.html';
})
