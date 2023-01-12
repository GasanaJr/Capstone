const post = JSON.parse(localStorage.getItem("post"));
//console.log(post);
function show() {
    const table = document.querySelector('#post-list');
    for(let i = 0; i<post.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${post[i].id_no}</td>
        <td>${post[i].titlee}</td>
        <td>${post[i].authorr}</td>
        <td>${post[i].datee}</td>
        <td><button class="button Red" id="delete" onclick="deleteItem(${post[i].id_no})"><a href="#">Delete</a></button> </td>
        `
        table.append(row);   
    }

}

const deleteItem = (id) => {
    //console.log(id, "to be deleted");
    const post = JSON.parse(localStorage.getItem("post"));
    post.splice(id-1,1);
    localStorage.setItem('post', JSON.stringify(post));
    window.location.reload();
}