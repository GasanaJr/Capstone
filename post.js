var selectedRow = null;
var id_no;
var titlee;
var authorr;
var file;
var description;
// Delete Data

// Clear all fields 

function clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#text").value = "";
}


// Add data 
document.querySelector("#post-form").addEventListener("submit", async(e) => {
    e.preventDefault();

    // Get form values
    const title = document.querySelector("#title");  
    const description = document.querySelector('#text');
    const files = document.getElementById('file');
    const formData = new FormData();
    formData.append('title', title.value);
    formData.append('description', description.value);
    for(let i =0; i<files.files.length; i++) {
        formData.append('image', files.files[i]);
    }


    // Validate

    if (title == "" || description == "") {
        showAlert("Please fill in all fields", "danger");
    }

    else {
        const token = localStorage.getItem('auth-token');
       const result = await fetch('http://localhost:300/posts', {
        method: 'POST',
        headers: {
            // "Content-Type": "multipart/form-data",
            "auth-token": token
        },
        body: formData
       });

       const data = await result.json();
       if(result.status == 201) {
        swal(data.Message, "You created a Post", "success")
       }
       else {
        swal(data.Message, "Check the Error", "error")
       }













    //     var post = JSON.parse(localStorage.getItem('post'));
    //    // console.log(post);
    //     if(post == null) {
    //         const msg = {
    //             id_no : 1,
    //             titlee: title,
    //             authorr: author,
    //             datee : date,
    //             content: contentt,
    //         };
    //         var post = [];
    //         post.push(msg);
    //         localStorage.setItem('post', JSON.stringify(post));
    //         console.log("Message one");
    //     }
    //     else {
    //         let length = post.length;
    //         const msg = {
    //             id_no : length + 1,
    //             titlee: title,
    //             authorr: author,
    //             datee : date,
    //             content: contentt,
    //         };
    //         post.push(msg);
    //         localStorage.setItem('post', JSON.stringify(post));
    //         console.log("Message two");
    //     }
  
         clearFields();
    }
})