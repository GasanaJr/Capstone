const to = localStorage.getItem('auth-token');

function getLike() {
    const likeBtn = [...document.getElementsByClassName('likeBtn')];
    likeBtn.forEach(button => {
       button.addEventListener('click', (e) => {
        const likeId = button.dataset.id;
        likePost(likeId);
       });
    });
}

async function likePost(likeId) {
    const result = await fetch('http://localhost:3000/posts/like/'+ likeId, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        "auth-token": to
        }
    });
    const data = await result.json();
    const state = document.getElementById('like');
    if(result.status == 200) {
        swal(data.Message, "You liked the post!", "success")
        state.innerText = "Unlike";
        state.style.backgroundColor = "#ff4122";
    }
    else if(result.status == 400) {
        unLikePost();
        state.style.backgroundColor = "rgb(19, 206, 81)";
    }

    else if(result.status == 401) {
        swal(data.Message, "Check Error", "error");
    }



}

