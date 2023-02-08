const div = document.querySelector('.blo');
const tokenn = localStorage.getItem('auth-token');
    fetch('http://localhost:3000/posts')
        .then(res => {
            return res.json();
        })
        .then(data => {
             data.forEach(post => {
                  div.innerHTML += `
                  <div>
                  <img src = "${post.Image}">
                  <h1>${post.title}</h1>
                  <p>${post.description}</p>
                  <input type = "text" id ="cbox${post._id}" style = "width:400px;height:50px;border-radius:5px;border:none;
                  background-color:#d3d3d3; padding:10px" class = "hidden"><br>
                  <div class = "hidden">
                  <button id = "comment${post._id}"  data-id = "${post._id}" class = "commentBtn comment">Comment</button> 
                  <button id = "like${post._id}" data-id = "${post._id}" class = "likeBtn like">Like</button>

                  </div>
                  ${post.comments.map((item)=>{
                    return (` 
                        <div>
                        <p id = "name">${item.name}</p>
                   <p class = "ctext">${item.text}</p></div>
                    `)
                  })}
                  </div>
                 `
                 
            });  
        }).then(() => getComment())
        .then(() => getLike())
        .then(() => getUnlike())
        // .then(() => displayComment())

function getComment() {
    const commentBtn = [...document.getElementsByClassName('commentBtn')];
    commentBtn.forEach(button => {
       button.addEventListener('click', () => {
        const commentId = button.dataset.id;
        // console.log(commentId);
         blogComment(commentId);
       });
    });
}

const comment = document.getElementById('comment');

async function blogComment(commentId) {
    var text = document.getElementById('cbox'+commentId).value;
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
        swal(data.Message, "Thank you for the feedback", "success")
        text = "";
    }
    else {
        swal(data.Message, "error")
    }


}
