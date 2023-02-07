const form = document.getElementById('login_form');
form.addEventListener('submit', login);

async function login(e) {
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
        alert(data.Message);
    }
        
    } catch (error) {
        console.log(error);
        
    }


    // }).then((res) => {
    //    if(res.status == 400) {
    //     alert("Email or Pass Invalid");
    //    }
    //    else {
    //     console.log(res);
        //  localStorage.setItem('auth-token', res.token);
        //  window.location.assign('C:/Users/HP/OneDrive/Desktop/Capstone/admin.html');
       //}
    
    // .catch((err) => {
    //     var error = err.json();
    //     console.log(error.Message);
    // });
    // console.log(result);


}