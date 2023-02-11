async function display() {
    var email = document.getElementById('email');
    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    const div = document.querySelector('.image');
    const image = document.getElementById('image');
    const token = localStorage.getItem('auth-token');
    const parts= token.split('.');
    const payload = JSON.parse(atob(parts[1]))
    const user = payload.user.id;

    try {
        const result = await fetch('https://junior-capstone-backend.onrender.com/api/user/' + user, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
    }
})
    const data = await result.json();
   console.log(data.Image);
     if(result.status == 200) {
        div.innerHTML += `
        <img src="${data.Image}" alt="" id="image">
        `
    //    console.log();
     //   console.log(data.name);
          email.value = data.email;
          name.value = data.name;
        //  phone.value = data.phone;
     }
    else  {
        swal(data.Message, 'error');
    }
        
    } catch (error) {
        console.log(error);
        
    }

}

const form = document.getElementById('update_form');
form.addEventListener('submit', update);

async function update(e) {
    e.preventDefault();
    var name= document.getElementById('name').value;
    const tokenn = localStorage.getItem('auth-token');
    const partss= token.split('.');
    const payloadd = JSON.parse(atob(partss[1]))
    const userr = payloadd.user.id;


    try {
        const result = await fetch('https://junior-capstone-backend.onrender.com/api/user/' + userr, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json'
    },
        body: JSON.stringify({
            name
    })
})
    const data = await result.json();
   // console.log(data.Message);
    if(result.status == 200) {
        swal(data.Message, "success")
         location.reload();
    }
    else  {
        swal(data.Message, "error")
    }
        
    } catch (error) {
        console.log(error);
        
    }


}