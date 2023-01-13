var post = JSON.parse(localStorage.getItem('post')); 
const div = document.querySelector('.blogs');
function show() {
    for(var i = 0; i< post.length; i++) {
        var myDiv = document.createElement('div');
        var title = document.createElement('h1');
        var text = document.createElement('p');
        var image = document.createElement('img');
        title.append(post[i].titlee);
        text.append(post[i].content)
        myDiv.append(title);
        myDiv.append(text);
        div.appendChild(myDiv);
    }
}
