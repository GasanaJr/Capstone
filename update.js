function getUpdate() {
    const updateBtn = [...document.getElementsByClassName('update-post')];

    updateBtn.forEach(button => {
        button.addEventListener('click', () => {
            const updateId = button.dataset.id;
            console.log(updateId);
            updatePost(updateId);
        });
    });
}

async function updatePost(updateId) {
    document.getElementById('upd').style.visibility = "visible";
    const tokenn = localStorage.getItem('auth-token');

    document.querySelector("#update-form").addEventListener('submit', async (e) => {
        e.preventDefault();
        var title = document.getElementById('title').value;
        try {
            console.log(title);
            const result = await fetch('https://junior-capstone-backend.onrender.com/posts/' + updateId, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            'auth-token': tokenn
        },
            body: JSON.stringify({
                title
            })
    })
        const data = await result.json();
        if(result.status == 200) {
            swal(data.Message, 'success');
        }
        else  {
            swal(data.Message, 'error');
        }
            
        } catch (error) {
            console.log(error);
            
        }
    })
}











