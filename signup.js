//let registered = {};
const btn = document.getElementById('Submit');
btn.addEventListener('click', signup);
async function signup(e) {
    e.preventDefault();
    let name, email, password, phone, files;
    name = document.getElementById("fname").value;
    email = document.getElementById("email").value;
    password = document.getElementById("pass").value;
    phone = document.getElementById("phone").value;
    files = document.getElementById('file');
    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone', phone);

    for(let i =0; i<files.files.length; i++) {
        formData.append('image', files.files[i]);
    }


    try {
        const result = await fetch('https://junior-capstone-backend.onrender.com/api/user/register', {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json'
            },
            body: formData
        });
        const data = await result.json();
        if(result.status == 400) {
            swal(data.Message, "error");
        }
        else if(result.status == 201) {
            swal(data.Message, "Sign Up was successful", "success")
            window.location.href = './login.html';
        }
        
    } catch (error) {
        console.log(error);
    }    

}


