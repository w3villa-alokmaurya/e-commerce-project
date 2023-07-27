function togglepopuplogin(){
    var is_token = sessionStorage.getItem('token');
    if(!is_token==''){
        alert("you are Logged in.");
        toggleclose();
    }
    else {
        if(document.getElementById('popup-signup').classList.contains('active')){
            document.getElementById('popup-signup').classList.remove('active');
            document.getElementById('popup-signup').classList.add('none');
            document.getElementById('popup1').classList.remove('overlay');
    
        }
        let popup = document.getElementById('popup');
        let modal =  document.getElementById('popup-login');
        modal.classList.add('active');
        popup.classList.add('overlay')
        modal.classList.remove('none');
    }
   

}
// togglepopup();

const toggleclose=()=>{
    let popup = document.getElementById('popup');
    let modal =  document.getElementById('popup-login');
    modal.classList.remove('active');
    modal.classList.add('none');
    popup.classList.remove('overlay');
}
// toggleclose();



const LoginForm=()=>{
    const signupform = document.getElementById('login');

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var storedemail = localStorage.getItem('email');
    var storedpass  = localStorage.getItem('password');

    if(email.length == 0){
        alert("Enter valid email");
    }
    else if(password.length == 0){
        alert("Enter valid password");
    }
    else if(password.length<6){
        alert("Password should be 6 characters");
    }
    else if(email== storedemail && password== storedpass){ 
        alert("Logged in");
        var token = 'ecom'+Math.random(1,9999999);
        sessionStorage.setItem('token',token);
        toggleclose();

    }
    else{
        alert("Email or password is Wrong.");
    }


}