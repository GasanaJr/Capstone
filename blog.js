const div = document.querySelector('.blo');
const cdiv = document.querySelector('.comments')
    fetch('http://localhost:3000/posts')
        .then(res => {
            return res.json();
        })
        .then(data => {
             data.forEach(post => {
                  div.innerHTML += `
                  <div>
                  <img src = "/${post.Image}">
                  <h1>${post.title}</h1>
                  <p>${post.description}</p>
                  <input type = "text" id ="cbox" style = "width:400px;height:50px;border-radius:5px;border:none;
                  background-color:#d3d3d3; padding:10px"><br>
                  <button id = "comment"  data-id = "${post._id}" class = "commentBtn">Comment</button> 
                  <button id = "like" data-id = "${post._id}" class = "likeBtn">Like</button>
                  </div>
                 `
                 
            });
            // data.forEach(post => {
            //     var comments = post.comments;
            //     for(let i =0; i<comments.length; i++) {
            //         //console.log(comments[i].text);
            //         cdiv.innerHTML += `
            //         <p class = "ctext">${comments[i].text}</p>
            //         `
            //     }
            // });   
        }).then(() => getComment())
        .then(() => getLike())
        .then(() => getUnlike())

function getComment() {
    const commentBtn = [...document.getElementsByClassName('commentBtn')];
    commentBtn.forEach(button => {
       button.addEventListener('click', () => {
        const commentId = button.dataset.id;
        blogComment(commentId);
       });
    });
}

const comment = document.getElementById('comment');
const tokenn = localStorage.getItem('auth-token');

async function blogComment(commentId) {
    var text = document.getElementById('cbox').value;
    const result = await fetch('http://localhost:3000/posts/comment/'+ commentId, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "auth-token": tokenn
        },
        body: JSON.stringify({
            text
        })
    });
    const data = await result.json();
    if(result.status == 200) {
        alert(data.Message);
    }
    else {
        alert(data.Message);
    }


}
