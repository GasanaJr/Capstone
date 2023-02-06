const div = document.querySelector('.blogs');
    fetch('http://localhost:3000/posts')
        .then(res => {
            return res.json();
        })
        .then(data => {
             data.forEach(post => {
                var myDiv = document.createElement('div');
                var title = document.createElement('h1');
                var text = document.createElement('p');
                var image = document.createElement('img');
                var comment = document.createElement('input');
                comment.setAttribute('placeholder', 'Comment here');
                comment.style.width = "400px";
                comment.style.height = "50px";
                comment.style.borderRadius = "5px";
                comment.style.border = "none";
                comment.style.backgroundColor = "#d3d3d3";
                comment.style.padding = "10px";
                image.setAttribute('src',"../Capstone-backend/backend/Auth/" + `${post.Image}`);
                title.append(post.title);
                text.append(post.description);
                myDiv.append(image);
                myDiv.append(title);
                myDiv.append(text);
               myDiv.append(comment);
                div.appendChild(myDiv);
                 
            });    
        })








// var post = JSON.parse(localStorage.getItem('post')); 
// 
// function show() {
//     for(var i = 0; i< post.length; i++) {
//         var myDiv = document.createElement('div');
//         var title = document.createElement('h1');
//         var text = document.createElement('p');
//         var image = document.createElement('img');
//         title.append(post[i].titlee);
//         text.append(post[i].content)
//         myDiv.append(title);
//         myDiv.append(text);
//         div.appendChild(myDiv);
//     }
// }
