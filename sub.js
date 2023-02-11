const subForm = document.querySelector('#subscribe');
var email = document.getElementById('email');

subForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    let formData = {
        email: email.value
    }
    console.log(formData);

    // try {
    //     const result = await fetch('http://localhost:3000/subscribe', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: formData
    //     });
    //     const data = await result.json();
    //     if(result.status == 400) {
    //         swal(data.Message, "error");
    //     }
    //     else if(result.status == 201) {
    //         swal("Thank you for subscribing", "You will get a confirmation email shortly", 'success');
    //     }
    // } catch (error) {
    //     console.log(error)
        
    // }

     let xhr = new XMLHttpRequest();
     xhr.open('POST', 'https://junior-capstone-backend.onrender.com/subscribe');
     xhr.setRequestHeader('content-type', 'application/json');
     xhr.onload = function() {
         console.log(xhr.status);
         if(xhr.status == 200) {
            swal("Thank you for subscribing", "You will get a confirmation email shortly", 'success');
         }
         else if (xhr.status == 400){
             swal('Email already subscribed','Thank you for the support', 'error')
         }
         else {
            swal('Subscription not Successful', 'Try again Later', 'error')
         }
     }
     xhr.send(JSON.stringify(formData));
})