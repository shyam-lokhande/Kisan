var MailId = document.getElementById("email");
var Pass = document.getElementById("pass");
function checkprofile() {
    for (let i = 0; i < localStorage.length; i++) {
        if (MailId.value == localStorage[i].getItem("email") && Pass.value == localStorage.getItem("pass")) {
            location.replace("./index_loggedin.html");
        }
        else {
            alert("Please enter correct Credentials.");
        }
    }
}
//# sourceMappingURL=login.js.map