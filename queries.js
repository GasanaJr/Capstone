const token = localStorage.getItem('auth-token');
        fetch('https://junior-capstone-backend.onrender.com/message', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token
            }
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            data.forEach(message => {
            var table = document.querySelector('table');
            var tbody = document.querySelector('tbody');
            tbody.innerHTML += `
                 <td>${message.email}</td>
                 <td>${message.name}</td>
                 <td>${message.content}</td>
                 <td><button class="button Green" id="edit"><a href="#">Reply</a></button> </td>
                 <td><button class="button Red delete-msg" data-id = "${message._id}"><a href="#">Delete</a></button> </td>
                 `;
                 
            });    
        })
        .then(()=> getDeleteItem());

        function getDeleteItem() {
            const deleteBtn = [...document.getElementsByClassName('delete-msg')];
            console.log(deleteBtn);
            deleteBtn.forEach(button => {
                //console.log(button.dataset.id);
                button.addEventListener('click', () => {
                    const deleteId = button.dataset.id;
                    //console.log(deleteId);
                    deleteMessage(deleteId);
                })
            })
        }

        async function deleteMessage(deleteId) {
            console.log(deleteId);
            const token = localStorage.getItem('auth-token'); 
             try {
                 const result = await fetch('https://junior-capstone-backend.onrender.com/message/' + deleteId, {
                     method: "DELETE",
                     headers: {
                         "Content-Type": "application/json",
                         "auth-token": token,
                     }
                 });
                 const data = await result.json();
                 if(result.status == 200) {
                    swal(data.Message, "Message Deleted!", "success")
                 location.reload();
                 }
                 else {
                    swal(data.Message, "Check Error", "error")
                 }
             } catch (error) {
                console.log(error);
                
             }
        }