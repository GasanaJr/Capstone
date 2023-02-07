const cdiv = document.querySelector('.comments')
function displayComment() {
    fetch('http:localhost:3000/posts')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(post => {
            var comments = post.comments;
            for(let i =0; i<comments.length; i++) {
                        //console.log(comments[i].text);
                 cdiv.innerHTML += `
                 <p id = "name">${comments[i].name}</p>
                <p class = "ctext">${comments[i].text}</p>
                        `
                     }
        });
    })
}