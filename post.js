var selectedRow = null;
var id_no;
var titlee;
var authorr;
var datee;
var content;
// Delete Data

// Clear all fields 

function clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#auth").value = "";
    document.querySelector("#date").value = "";
    document.querySelector("#text").value = "";
}


// Add data 
document.querySelector("#post-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const title = document.querySelector("#title").value; 
    const author = document.querySelector("#auth").value; 
    const date = document.querySelector("#date").value; 
    const contentt = document.querySelector('#text').value;

    // Validate

    if (title == "" || author == "" || date == "") {
        showAlert("Please fill in all fields", "danger");
    }

    else {
        var post = JSON.parse(localStorage.getItem('post'));
        console.log(post);
        if(post == null) {
            const msg = {
                id_no : 1,
                titlee: title,
                authorr: author,
                datee : date,
                content: contentt,
            };
            var post = [];
            post.push(msg);
            localStorage.setItem('post', JSON.stringify(post));
            console.log("Message one");
        }
        else {
            let length = post.length;
            const msg = {
                id_no : length + 1,
                titlee: title,
                authorr: author,
                datee : date,
                content: contentt,
            };
            post.push(msg);
            localStorage.setItem('post', JSON.stringify(post));
            console.log("Message two");
        }
  
         clearFields();
    }
})