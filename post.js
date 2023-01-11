var selectedRow = null;

// Delete Data


document.querySelector("#post-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        // showAlert("post Data Deleted", "danger");
    }
})

// Clear all fields 

function clearFields() {
    document.querySelector("#id").value = "";
    document.querySelector("#title").value = "";
    document.querySelector("#auth").value = "";
    document.querySelector("#date").value = "";
    document.querySelector("#body").value = "";
}


// Add data 
document.querySelector("#post-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const id = document.querySelector("#id").value;
    const title = document.querySelector("#title").value; 
    const author = document.querySelector("#auth").value; 
    const date = document.querySelector("#date").value; 

    // Validate

    if (id == "" || title == "" || author == "" || date == "") {
        showAlert("Please fill in all fields", "danger");
    }

    else {
        if (selectedRow == null) {
            const list = document.querySelector("#post-list");
            const row = document.createElement("tr");

            row.innerHTML = `
            <td> ${id}</td>
            <td> ${title}</td>
            <td> ${author}</td>
            <td> ${date}</td>
            <td><button class="button" id="Green" ><a href="">Edit</a></button></td>
            <td><button class="button delete" id="Red" ><a href="#">Delete</a></button></td>
            <td><button class="button"><a href="">Publish</a></button></td>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Post Added", "success");
        }

        // else {
        //     selectedRow.children[0].textContent = firstName;
        //     selectedRow.children[1].textContent = lastName;
        //     selectedRow.children[2].textContent = rollNo;
        //     selectedRow = null;
        //     showAlert("Student info Edited", "info");
        // }
        // clearFields();
    }
})