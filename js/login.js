function togglepopuplogin(){
    let popup = document.getElementById('popup-login');
    popup.classList.add('active');
    popup.classList.remove('none');
    if(document.getElementById('popup-signup').classList.contains('active')){
        document.getElementById('popup-signup').classList.remove('active');
        document.getElementById('popup-signup').classList.add('none');

    }

}
// togglepopup();

const toggleclose=()=>{
    let popup = document.getElementById('popup-login');
    popup.classList.add('none');
    popup.classList.remove('active');
}
// toggleclose();