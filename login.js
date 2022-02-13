document.querySelector("form").addEventListener("submit", myLogin);
let resUser = JSON.parse(localStorage.getItem("userDataMovie"));

function myLogin(event){
    event.preventDefault();
    let user = document.querySelector("#user").value;
    let pass = document.querySelector("#pass").value;

    for(var i=0; i<resUser.length; i++){
        if(resUser[i].userName == user && resUser[i].password == pass){
            window.location.href = "index.html";
        }
        else{
            alert("Please check your email or password");
        }
    }
}