//let registered = {};
const btn = document.getElementById('Submit');
btn.addEventListener('click', signup);
async function signup(e) {
    e.preventDefault();
    let name, email, password;
    name = document.getElementById("fname").value;
    email = document.getElementById("email").value;
    password = document.getElementById("pass").value;

    try {
        const result = await fetch('http://localhost:3000/api/user/register', {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });
        const data = await result.json();
        if(result.status == 400) {
            alert(data.Message);
        }
        else if(result.status == 201) {
            alert(data.Message);
            window.location.href = './login.html';
        }
        
    } catch (error) {
        console.log(error);
    }    

}


