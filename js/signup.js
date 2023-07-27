function togglepopupregister(){
    var is_token = sessionStorage.getItem('token');
    if(!is_token==''){
        alert("you are Registered and already logged in.");
        toggleclose();
    }else{
        if(document.getElementById('popup-login').classList.contains('active')){
            document.getElementById('popup-login').classList.remove('active');
            document.getElementById('popup-login').classList.add('none');
            document.getElementById('popup').classList.remove('overlay');
    
    
        }
        let popup = document.getElementById('popup1');
        let modal =  document.getElementById('popup-signup');
        modal.classList.add('active');
        popup.classList.add('overlay')
        modal.classList.remove('none');

    }
    
   

}
// togglepopup();

const togglecloseregister=()=>{
    let popup = document.getElementById('popup1');
    let modal =  document.getElementById('popup-signup');
    modal.classList.remove('active');
    modal.classList.add('none');
    popup.classList.remove('overlay');
}
// toggleclose();


const RegisterForm=()=>{
    const signupform = document.getElementById('signup');
    // signupform.addEventListener("submit", e=>{
         // console.log(signupform);
    var email = document.getElementById("signupemail").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("signuppassword").value;
    

    if(name.length == 0){
        alert("Enter valid name");
    }
    else if(email.length == 0){
        alert("Enter valid email");
    }
    else if(password.length == 0){
        alert("Enter valid password");
    }
    else if(password.length<6){
        alert("Password should be 6 characters");
    }
    else{
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert("User Created");
        togglepopuplogin();

    }


}
