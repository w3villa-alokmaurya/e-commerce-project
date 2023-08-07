
// scroll to top 
const scrollToTop = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
    }


// newsletter form
const form = document.getElementById('newsletter-form');
const newsletter = () =>{
   
    const email = document.getElementById('newsletter-email').value;
    const storedNewsletterEmail= localStorage.getItem('newsletter_email');
    if(email==''){
        alert("Please fill all the details");
    }else if(storedNewsletterEmail==email){
        alert("Already Subscribed");
    }else {
        localStorage.setItem('newsletter_email', email);
        alert("Subscribed Successfully");
    }
    

}
form.addEventListener("submit",newsletter);

  
