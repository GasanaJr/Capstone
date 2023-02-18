const toke= localStorage.getItem('auth-token');
// if(!tok) {
//     window.location.href = "./login.html"
// }
function show() {
    document.getElementById('load').style.visibility ="visible";
    document.querySelector('body').style.visibility ="hidden";
}
function hide() {
    document.getElementById('load').style.visibility="hidden";
    document.querySelector('body').style.visibility ="visible";
}
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
    show();
    const result = await fetch('https://junior-capstone-backend.onrender.com/posts/unlike/'+ likeId, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        "auth-token": toke
        }
    });
    const data = await result.json();
    if(result.status == 200) {
        hide();
        const state = document.getElementById('like'+likeId);
        swal(data.Message, "You Unliked this Post", "success");
        state.innerText = "like";
        state.backgroundColor = "#ff4122";
    }
    else if(result.status == 400)  {
        hide();
       likePost();
    }
    else if(result.status == 401) {
        swal(data.Message, "Error Encountered", "error");
    }


}




