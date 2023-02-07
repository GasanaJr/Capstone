const cdiv = document.querySelector('.comments')
function displayComment() {
    fetch('http:localhost:3000/posts')
    .then(res => {
        return res.json();
    })
    .then(data => {
        for(let j =0; j< data.length; j++) {
            //console.log(data[j].comments.length)
              for(let i = 0; i < data[j].comments.length; i++) {
                var comments = data[j].comments
                //console.log(comments);
                   cdiv.innerHTML += `
                   <p id = "name">${comments[i].name}</p>
                   <p class = "ctext">${comments[i].text}</p>
                  `
              }
        }
    })
}