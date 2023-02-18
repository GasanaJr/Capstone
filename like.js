const to = localStorage.getItem('auth-token');
// if(!to) {
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
    show();
    const result = await fetch('https://junior-capstone-backend.onrender.com/posts/like/'+ likeId, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        "auth-token": to
        }
    });
    const data = await result.json();
    const state = document.getElementById('like'+likeId);
    if(result.status == 200) {
        hide();
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

