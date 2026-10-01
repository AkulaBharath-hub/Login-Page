
let content=document.getElementById("P")

let Signin=()=>{
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let email=document.getElementById("email").value;


    if (username!="Bharath"){
        content.innerHTML="Invalid Username"
        content.style.color="red"
    }
    else if(password!="1234"){
        content.innerHTML="Invalid Password"
        content.style.color="red"
    }
    else if(email!="bharath456@gmail.com"){
        content.innerHTML="Invalid email id"
        content.style.color="red"
    }
    else{
        content.innerHTML="Login Successful"
        content.style.color="green"
    }

}