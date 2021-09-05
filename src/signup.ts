var Name : HTMLInputElement = <HTMLInputElement>document.getElementById("name");
var MailId:HTMLInputElement = <HTMLInputElement>document.getElementById("email");
var Pass:HTMLInputElement = <HTMLInputElement>document.getElementById("pass");

var cred:credentials;
var user_array : credentials[] =[];

function Store(){
    var is_right:boolean = ValidateEmail();
    if(is_right){
        window.open("./index_loggedin.html","_blank");
        cred.name=Name.value;
        cred.mail=MailId.value;
        cred.pass=Pass.value;
        user_array.push(cred)
    }
}

function ValidateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(MailId.value) && Pass.value.length > 6)
  {
    return (true)
  }
    alert("You have entered an invalid email address 0r Password. Please Give a valid Input!!!!")
    return (false)
}


class credentials{
  public name :string;
  public mail :string;
  public pass : string;

  constructor(N:string,M:string,P:string){
    this.name=N;
    this.mail=M;
    this.pass=P;
  }
}
