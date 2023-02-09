const form = document.getElementById('login_form');
form.addEventListener('submit', login);

function show() {
    document.getElementById('load').style.visibility ="visible";
    document.querySelector('body').style.visibility ="hidden";
}

function hide() {
    document.getElementById('load').style.visibility="hidden";
    document.querySelector('body').style.visibility ="visible";
}

async function login(e) {
    show();
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


    try {
        const result = await fetch('https://junior-capstone-backend.onrender.com/api/user/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
        body: JSON.stringify({
        email,
        password
    })
})
    const data = await result.json();
   // console.log(data.Message);
    if(result.status == 200) {
        hide();
        const token = data.token;
        const parts= token.split('.');
        const payload = JSON.parse(atob(parts[1]))
        console.log(payload.user.id); 
        localStorage.setItem('auth-token', token);
         if(payload.user.id == '63de379a123b0ef109245c47') {
             window.location.href = './admin.html';
         }
         else {
             window.location.href = './index.html';
         }
    }
    else  {
        hide();
        //swal(data.Message);
        swal(data.Message, "Try again!", "error")
    }
        
    } catch (error) {
        console.log(error);
        
    }


}