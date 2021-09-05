var Name = document.getElementById("name");
var MailId = document.getElementById("email");
var Pass = document.getElementById("pass");
function Store() {
    var is_right = ValidateEmail();
    if (is_right) {
        localStorage.setItem("name", Name.value);
        localStorage.setItem("email", MailId.value);
        localStorage.setItem("pass", Pass.value);
        location.replace("./index_loggedin.html");
    }
}
function ValidateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(MailId.value)) {
        return (true);
    }
    alert("You have entered an invalid email address 0r Password");
    return (false);
}
//# sourceMappingURL=signup.js.map