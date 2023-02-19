function SignUp() {
    const [info, setInfo] = React.useState({
        name: "",
        email: "",
        password: "",
        file: ""
    });

    const handleChange =(e) => {
        const {name, value} = e.target;
        //console.log({name, value});
        setInfo((state) => ({...state, [name]: value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let name, email, password, phone, files;
        name = document.getElementById("fname").value;
        email = document.getElementById("email").value;
        password = document.getElementById("pass").value;
        files = document.getElementById('file');
        const formData = new FormData();
    
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
    
        for(let i =0; i<files.files.length; i++) {
            formData.append('image', files.files[i]);
        }
    
    
        try {
            const result = await fetch('https://junior-capstone-backend.onrender.com/api/user/register', {
                method: 'POST',
                body: formData
            });
            const data = await result.json();
            if(result.status == 400) {
                swal(data.Message,"Error creating your account", "error");
            }
            else if(result.status == 201) {
                swal(data.Message, "Sign Up was successful", "success")
                window.location.href = './login.html';
            }
            
        } catch (error) {
            console.log(error);
        }    
    
    }




   return(
    <section className="signin">
        <h3>SIGN UP FORM</h3>
        <form id="reg-form" onSubmit={handleSubmit}>
            <label htmlFor="">Full Name</label> <br></br>
            <input type="text" id="fname" name="name" onChange={handleChange}/><br></br>
            <label htmlFor="">Email</label> <br></br>
            <input type="email" id="email" name="email" onChange={handleChange}/><br></br>
            <label htmlFor="">Password</label> <br></br>
            <input type="password" id="pass" name="password" onChange={handleChange}/><br></br>
            <label htmlFor="">Profile Picture</label> <br></br>
            <input type="file" id="file" name="file" onChange={handleChange}/><br></br>
            <button id="Submit">Sign up</button>
        </form>
    </section>
   ) 
}



const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(SignUp));