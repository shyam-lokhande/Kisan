var profile_name:HTMLInputElement = <HTMLInputElement>document.getElementById("showname");

profile_name.innerHTML=localStorage.getItem("name");