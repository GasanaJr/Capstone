function SendData() {
 
const [message, setMessage] = React.useState({
    name: "",
    email: "",
    text: ""
});

const handleChange = (e) => {
    const {name, value} = e.target;
    setMessage((state) => ({...state, [name]: value}));

};

const handleSubmit = async (e) => {
    e.preventDefault();
    // const payload = {name: message.name, email: message.email, content: message.text};
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const content = document.getElementById('text').value;
    const result = await fetch('https://junior-capstone-backend.onrender.com/message/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            content
        })
    });
    const data = await result.json();
    if(result.status == 200) {
        popup.classList.add("open-popup");
    }
    else {
        alert(data.Message);
    }
    console.log(message)

}


return (
     <section className='contact'>
         <form id = "form" onSubmit={handleSubmit}>
            <h3>Reach out to me</h3> 
            <label for="">Email</label><br></br>
             <input type="text" onChange={handleChange} name = "email" id="email"/><br></br>
             <label for="">Full Name</label><br></br>
             <input type="text" name = "name" id="name" onChange={handleChange} /><br></br>
             <label for="">Content</label><br></br>
             <textarea name="text" id="text" onChange={handleChange}></textarea>
             <button type="submit" >Send</button>
         </form>
          <div className="cimage">
             <img src="images (1).jpeg" alt=""/>
             <p><i className="fa-solid fa-envelope"></i>gasanajr08@gmail.com</p>
             <p><i className="fa-solid fa-mobile-screen"></i>0738930843</p>
         </div>

     </section>
);



}

// // let popup = document.getElementById('popup');
// let cbtn = document.getElementById('cbtn');
cbtn.addEventListener("click", function(e){
    e.preventDefault();
    popup.classList.remove("open-popup");
    document.getElementById("name").value = "";
    document.getElementById("text").value = "";
    document.getElementById("email").value = "";
});


 const domContainer = document.querySelector('#root');
 const root = ReactDOM.createRoot(domContainer);
 root.render(React.createElement(SendData));

