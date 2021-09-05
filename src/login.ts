var MailId:HTMLInputElement = <HTMLInputElement>document.getElementById("email");
var Pass:HTMLInputElement = <HTMLInputElement>document.getElementById("pass");

function checkprofile(){
    for(let i=0;i<user_array.length;i++){
        if(MailId.value==user_array[i].mail && Pass.value==user_array[i].pass){
            window.open("./index_loggedin.html");
        }
        else{
            alert("Please enter correct Credentials.");
        }
    }
}