function togglepopupregister(){
    let popup = document.getElementById('popup-signup');
    popup.classList.add('active');
    popup.classList.remove('none');
    if(document.getElementById('popup-login').classList.contains('active')){
        document.getElementById('popup-login').classList.remove('active');
        document.getElementById('popup-login').classList.add('none');

    }

}
// togglepopup();

const togglecloseregister=()=>{
    let popup = document.getElementById('popup-signup');
    popup.classList.add('none');
    popup.classList.remove('active');
}
// toggleclose();