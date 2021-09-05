var Name = document.getElementById("name");
var MailId = document.getElementById("email");
var Pass = document.getElementById("pass");
var cred;
var user_array = [];
function Store() {
    var is_right = ValidateEmail();
    if (is_right) {
        window.open("./index_loggedin.html", "_blank");
        cred.N = Name.value;
        cred.mail = MailId.value;
        cred.pass = Pass.value;
        user_array.push(cred);
    }
}
function ValidateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(MailId.value) && Pass.value.length > 6) {
        return (true);
    }
    alert("You have entered an invalid email address 0r Password. Please Give a valid Input!!!!");
    return (false);
}
console.log(user_array)
class credentials {
    constructor(N, M, P) {
        this.name = N;
        this.mail = M;
        this.pass = P;
    }
}
//# sourceMappingURL=signup.js.map