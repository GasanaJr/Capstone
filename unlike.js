const toke= localStorage.getItem('auth-token');
function getUnlike() {
    const likeBtn = [...document.getElementsByClassName('likeBtn')];
    likeBtn.forEach(button => {
       button.addEventListener('click', () => {
        const likeId = button.dataset.id;
        unLikePost(likeId);
       });
    });
}

async function unLikePost(likeId) {
    const result = await fetch('http://localhost:3000/posts/unlike/'+ likeId, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        "auth-token": toke
        }
    });
    const data = await result.json();
    if(result.status == 200) {
        const state = document.getElementById('like'+likeId);
        swal(data.Message, "You Unliked this Post", "success");
        state.innerText = "like";
        state.backgroundColor = "#ff4122";
    }
    else if(result.status == 400)  {
       likePost();
    }
    else if(result.status == 401) {
        swal(data.Message, "Error Encountered", "error");
    }


}




