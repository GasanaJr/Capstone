function getReply() {
    const replyBtn = [...document.getElementsByClassName('reply-msg')];

    replyBtn.forEach(button => {
        button.addEventListener('click', () => {
            const replyId = button.dataset.id;
            console.log(replyId);
            replyMsg(replyId);
        });
    });
}

async function replyMsg(replyId) {
    document.getElementById('upd').style.visibility = "visible";
    const tokenn = localStorage.getItem('auth-token');

    document.querySelector("#update-form").addEventListener('submit', async (e) => {
        e.preventDefault();
        var content = document.getElementById('content').value;
        var sendEmail = document.getElementById('email').value;
        let formData = {
            email: sendEmail,
            content: content
        }
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://junior-capstone-backend.onrender.com/message/reply');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = function() {
            console.log(xhr.status);
            if(xhr.status == 200) {
               swal("Message sent", "Reply Sent Successfully", 'success');
            }
            else {
               swal('Reply Sending not Successful', 'Try again Later', 'error')
            }
        }
        xhr.send(JSON.stringify(formData));
})
};