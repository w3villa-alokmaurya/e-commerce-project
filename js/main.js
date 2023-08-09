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

function fetchData(url, options = {}) {
  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // This parses the response body as JSON
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      throw error; // Re-throw the error to propagate it
    });
}

// Products Data
const apiUrl = '../data/products.json';
const feturedProducts = document.getElementById('featured-products1');

const productsCardData=()=>{fetchData(apiUrl)
  .then(data => {
    let productsCard='<div id="featured-products" class="featured-products owl-carousel owl-theme">';
    const products = data['products'];

    products.forEach(product => {
      // console.log(product);
     productsCard += `<div class="products-card">
      <div class="left">custom labels</div>
      <div class="right">
        <p class="right-1">-70%</p>
        <p class="right-2">hot</p>
      </div>
      
      <img src="${product.image}" alt="">
      <div class="box-product d-flex justify-content-between">
        <a href="#">Ericson</a>
        <p>Model 519</p>
      </div>
      <div class="price ">
        <h3>${product.title}</h3>
        <p>$999 <del>$3,299.00</del></p>
      </div>
        <div class="cart-product d-flex justify-content-between">
          <div class="add-to-cart-btn">
            <input type="number" name="number"
          min = "1" max="10" step="1" value="1">
            <button>Add to cart</button>
          </div>
          <div class="product-icon">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-arrow-down-up-across-line fa-rotate-90"></i>
          </div>
      </div>
      <div class="bottom-card d-flex justify-content-between align-items-center">
        <p><span class="color-green"><i class="fa-solid fa-sack-dollar"></i></span> Buy Now</p>
        <p><i class="fa-solid fa-circle-question color-red"></i>Question</p>
      </div>
    </div>`;

    
    // console.log(product);
 
      
    });
    console.log(feturedProducts.innerHTML=productsCard);
    var owl = $('#featured-products');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        620:{
            items:2,
            nav:false,
            loop:true,
        },
        767:{
            items:2,
            nav:false,
            loop:true,
        },
        800:{
            items:3,
        },
        1000:{
            items:3,
            nav:false,
            loop:true,
        },
        1200:{
            items:4,
            nav:false,
            loop:false
        }
    },
    // dots:false,
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})

  })
  .catch(error => {
    console.error('error');
  });
}
productsCardData();

// feturedProducts.addEventListener('mouseover', productsCardData);



//Search form

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
