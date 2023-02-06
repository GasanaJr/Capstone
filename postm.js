fetch('http://localhost:3000/posts')
.then(res => {
    return res.json();
}).then(data => {
    const table = document.querySelector('#post-list');
    data.forEach(post => {
        const row = document.createElement('tr');
                 row.innerHTML = `
                 <td>${post.title}</td>
                 <td>${post.name}</td>
                 <td>${post.date}</td>
                 <td><button class="button Red delete-post" id="delete" data-id = "${post._id}"><a href="#">Delete</a></button> </td>
                 `
                 table.append(row);  
    });
}).then(() => getDelete());

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
        const result = await fetch('http://localhost:3000/posts/' + deleteId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "auth-token": token
        }
        });
        const data = await result.json();
        if(result.status == 200) {
            alert(data.Message);
            location.reload();
        } else {
            alert(data.Message);
        }
    } catch(error) {
        console.log(error);
    }

}












// const post = JSON.parse(localStorage.getItem("post"));
// //console.log(post);
// function show() {
//     const table = document.querySelector('#post-list');
//     for(let i = 0; i<post.length; i++) {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//         <td>${post[i].id_no}</td>
//         <td>${post[i].titlee}</td>
//         <td>${post[i].authorr}</td>
//         <td>${post[i].datee}</td>
//         <td><button class="button Red" id="delete" onclick="deleteItem(${post[i].id_no})"><a href="#">Delete</a></button> </td>
//         `
//         table.append(row);   
//     }

// }

// const deleteItem = (id) => {
//     //console.log(id, "to be deleted");
//     const post = JSON.parse(localStorage.getItem("post"));
//     post.splice(id-1,1);
//     localStorage.setItem('post', JSON.stringify(post));
//     window.location.reload();
// }