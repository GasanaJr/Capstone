function CreatePost() {
    const [post, setPost] = React.useState({
        title: "",
        description: "",
        image: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        //console.log({name, value});
        setPost((state) => ({...state, [name]:value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

    // Get form values
    const title = document.querySelector("#title");  
    const description = document.querySelector('#text');
    const files = document.getElementById('file');
    const formData = new FormData();
    formData.append('title', title.value);
    formData.append('description', description.value);
    for(let i =0; i<files.files.length; i++) {
        formData.append('image', files.files[i]);
    }


    // Validate

    if (title == "" || description == "") {
        swal("Please fill in all fields", "Error Creating Post", "error");
    }

    else {
       const result = await fetch('https://junior-capstone-backend.onrender.com/posts', {
        method: 'POST',
        headers: {
            // "Content-Type": "multipart/form-data",
            "auth-token": token
        },
        body: formData
       });

       const data = await result.json();
       if(result.status == 201) {
        swal(data.Message, "You created a Post", "success")
       }
       else {
        swal(data.Message, "Check the Error", "error")
       }



    }

    }

    return(
    <section>
             <h3>Add a new post</h3>
            <form action="" id="post-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" className="text-input" name="title" id="title" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="">Content</label>
                    <input type="text" id = "text" className="text-input" onChange={handleChange}/>
                </div>
                <div>
                    <input type="file" name="" id="file" multiple onChange={handleChange}/>
                </div>
                <button type="submit" className="button">Add post</button>
            </form>
    </section>
    )
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(CreatePost));

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