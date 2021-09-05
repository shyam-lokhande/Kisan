var MailId = document.getElementById("email");
var Pass = document.getElementById("pass");
function checkprofile() {
    window.open("./index_loggedin.html");
    for (let i = 0; i < user_array.length; i++) {
        if (MailId.value !== user_array[i].mail && Pass.value !== user_array[i].pass) {
            alert("Please enter correct Credentials.");
            break;
           
        }
        else {
            break;
        }
        console.log(user_array[i].mail)
    }
}
//# sourceMappingURL=login.js.map