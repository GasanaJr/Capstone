


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
        const state = document.getElementById('like')
        alert(data.Message);
        state.innerText = "like";
        state.backgroundColor = "#ff4122";
    }
    else if (result.status == 400) {
       likePost();
    }

}




