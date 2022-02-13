document.querySelector("form").addEventListener("submit",myForm);
let userSign = [];

function myForm(event){
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;
    let user = document.querySelector("#user").value;
    let mbl = document.querySelector("#mbl").value;

    const userData = {
        email: email,
        password:pass,
        userName:user,
        mobileNumber: mbl
    }
    userSign.push(userData);
    localStorage.setItem("userDataMovie", JSON.stringify(userSign));
    alert("Congratulations Your Sign up Success");
    window.location.href= "Login.html";
}