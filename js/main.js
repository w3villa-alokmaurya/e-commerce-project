
// scroll to top 
const scrollToTop = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
    }


// newsletter form
const newsletterForm = document.getElementById('newsletter-form');
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
newsletterForm.addEventListener("submit",newsletter);



function checkLoggedIn(){
  const token = sessionStorage.getItem('token');

  if(!token==''){
    const name = localStorage.getItem('name');
    var login=document.getElementById('login');
    // login.lastElementChild.textContent=name;
  }
  else{
    console.log("not lgged")
  }
}

checkLoggedIn();

var productsData;
//Search form
async function loadProducts() {
  const response = await fetch('../data/products.json');
  const data = await response.json();

}


const searchForm = document.getElementById('search-form');
const searchHandle=()=>{
    const searchInput = document.getElementById('search-input').value;
    console.log(searchInput);

}
searchForm.addEventListener("submit" ,searchHandle);





//products data

// SEARCH FILTER
// const search = document.getElementById("search");
// const productName = document.querySelectorAll(".product-details h2");
// const noResult = document.querySelector(".no-result");

// search.addEventListener("keyup", filterProducts);

// function filterProducts(e) {
//   const text = e.target.value.toLowerCase();

//   productName.forEach((product) => {
//     const item = product.textContent;

//     if (item.toLowerCase().indexOf(text) != -1) {
//       product.parentElement.parentElement.style.display = "block";
//       noResult.style.display = "none";
//     } else {
//       product.parentElement.parentElement.style.display = "none";
//       noResult.style.display = "block";
//     }
//   });
// }

  
  
  
 
  
