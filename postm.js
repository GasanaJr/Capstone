fetch('https://junior-capstone-backend.onrender.com/posts')
.then(res => {
    return res.json();
}).then(data => {
    const table = document.querySelector('#post-list');
    data.forEach(post => {
        const row = document.createElement('tr');
        var fulldate = post.date;
        var date = fulldate.split("T")[0];
        var timee = fulldate.split("T")[1];
        var time = timee.split('.')[0];
                 row.innerHTML = `
                 <td>${post.title}</td>
                 <td>${post.name}</td>
                 <td>${date}</td>
                 <td>${time}</td>
                 <td><button class="button Red delete-post" id="delete" data-id = "${post._id}"><a href="#">Delete</a></button> </td>
                 <td><button class="button Green update-post" id="update" data-id = "${post._id}"><a href="#">Update</a></button> </td>
                 `
                 table.append(row);  
    });
}).then(() => getDelete())
.then(()=>getUpdate());

function getDelete() {
    const deleteBtn = [...document.getElementsByClassName('delete-post')];

    deleteBtn.forEach(button => {
        button.addEventListener('click', () => {
            const deleteId = button.dataset.id;
            deletePost(deleteId);
        });
    });
}


async function deletePost(deleteId) {
    const token = localStorage.getItem('auth-token');
    try {
        const result = await fetch('https://junior-capstone-backend.onrender.com/posts/' + deleteId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "auth-token": token
        }
        });
        const data = await result.json();
        if(result.status == 200) {
            swal(data.Message, "Post Deleted", "success")
            // location.reload();
        } else {
            swal(data.Message, "Check the Error", "error")
        }
    } catch(error) {
        console.log(error);
    }

}

