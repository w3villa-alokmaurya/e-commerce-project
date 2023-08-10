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

//End Newsletter form **************************//

// fetch Data  function/////////////////////////////////////////////////////////
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

// this is for truncate string ******
const limit =(string = '', limit = 0) =>{  
  return string.substring(0, limit)
}

// Buy From US Section  //

const buyFromUsUrl = '../data/buyfromus.json';
const buyFromUsSection = document.getElementById('buyfromussection');

const buyFromUs=(term)=>{
  fetchData(buyFromUsUrl)
  .then(data=>{
    let buyFromUsCards = `<div id="category-products-${term}" class="category-products owl-carousel owl-theme blog-cards ">`;

    data[term].forEach(card=>{
      buyFromUsCards+=`<div class="category-product top_categories fashion" data-fashion="fashion">
         <img src="${card.img}" alt="">
        <p>${card.name}</p>
  
      </div>`;
      
    });
    buyFromUsSection.innerHTML=buyFromUsCards;
    

    // category products


var owl = $('#category-products-'+term);
owl.owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        500:{
            items:3
        },
        767:{
            items:3,
            nav:false,
            // loop:true,
        },
        
        1000:{
            items:5,
            nav:false,
            // loop:true,
        }
    }
    // dots:true,
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})

  })
}

buyFromUs('top_categories');
const btns = document.querySelectorAll('#category-btns *');  

const resetActive=(btns)=>{
  btns.forEach(btn=>{
    if(btn.classList.contains('active-btn')){
      btn.classList.remove('active-btn');
    }
  })
}

const makeActiveBtn=(currentActive)=>{
  currentActive.classList.add('active-btn');
  currentActive.firstChild.classList.add('active-btn');

}

const handleClick=(id)=>{
  buyFromUs(id);
  let currentActive = document.getElementById(id);
  resetActive(btns);
  makeActiveBtn(currentActive);
}

//End section //


// Featured product section*****/////////////
// Products Data
const apiUrl = '../data/products.json';
const feturedProducts = document.getElementById('featured-products1');

const productsCardData=(term)=>{fetchData(apiUrl)
  .then(data => {
    let productsCard=`<div id="featured-products-${term}" class="featured-products owl-carousel owl-theme">`;

    data[term].forEach(product => {
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
      
    });
    feturedProducts.innerHTML=productsCard;
    var owl = $('#featured-products-'+term);
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
productsCardData('featured');
const featuredProductsBtns = document.querySelectorAll('#featured-products-btns *');

const handleClick1=(id)=>{
  productsCardData(id);
  let currentActive = document.getElementById(id);
  resetActive(featuredProductsBtns);
  makeActiveBtn(currentActive);
}

// end section ****************//


// Blog Section Posts **************************************************

const blogUrl = '../data/blogs.json';
const blogCardSection = document.getElementById('blog-cards-section');

const blogPosts = (term) =>{
  fetchData(blogUrl)
  .then(data=>{
    let blogCard = `<div id="blog-cards-${term}" class="owl-carousel owl-theme blog-cards " margin-bottom: 20px;">`;
    const blogs = data[term];
    blogs.forEach(blog=>{
      let description = limit(blog.description, 300);
      blogCard+=`<div class="blog-card">
      <p class="date"><span>02</span><br>Aug</p>
      <img src="${blog.image}" alt="">
      <div class="middle-blog-text">
        <p><i class="fa-solid fa-user"></i> ${blog.author}</p>
        <p><i class="fa-solid fa-comment"></i> ${blog.comments}</p>
        <p><i class="fa-solid fa-eye"></i> ${blog.views}views</p>
        
        
      </div>
      <div class="bottom-blog-text">
        <h1>${blog.title}</h1>
        <p>${description}</p>
        <button>Read more <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div> `;
      
    });
    blogCardSection.innerHTML=blogCard;
    // for blog posts Slider

        var owl = $('#blog-cards-'+term);
        owl.owlCarousel({
            items: 3,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    loop:true,
                },
                550:{
                    items:2,
                    loop:true,
                },
                767:{
                    items:2,
                    nav:false,
                    loop:true,
                },
                1000:{
                    items:3,
                    nav:false,
                    loop:true,
                },
                1200:{
                    items:3,
                    nav:false,
                    loop:false
                }
            }
        });
        $('.play').on('click', function () {
            owl.trigger('play.owl.autoplay', [1000])
        })
        $('.stop').on('click', function () {
            owl.trigger('stop.owl.autoplay')
        })


  });
}
blogPosts('latest_posts');
const blogPostsBtns = document.querySelectorAll('#blog-posts-btns *');
const handleClick2=(id)=>{
  blogPosts(id);
  let currentActive = document.getElementById(id);
  resetActive(blogPostsBtns);
  makeActiveBtn(currentActive);


}
// ENd blog ******************************************************************************
// Testimonial section ***//

const testimonialUrl = '../data/testimonials.json';
const testimonialsSection = document.getElementById('testimonials-section');

const testimonialCards = ()=>{
  fetchData(testimonialUrl)
  .then(data=>{
   let testimonialsCards = '<div id="testimonials-cards" class="owl-carousel owl-theme blog-cards " style="margin-top: 40px; margin-bottom: 20px;">';
   const Testimonials = data['testimonials'];
   Testimonials.forEach(testimonial=>{
    let Review = limit(testimonial.review, 200);
    testimonialsCards+=`<div class="test-card">
    <p class="quote-s"><i class="fa-solid fa-quote-left"></i></p>
    <p>${Review}</p>
    <p class="name"> - ${testimonial.name}</p>

  </div>`
   });
    testimonialsSection.innerHTML=testimonialsCards;
    // for testimonials slider
    var owl = $('#testimonials-cards');
    owl.owlCarousel({
        items: 3,
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
            430:{
                items:2,
            },
            767:{
                items:2,
                nav:false,
                loop:true,
            },
            1000:{
                items:3,
                nav:false,
                loop:false
            },
            1200:{
                items:3,
                nav:false,
                loop:false
            }
        }
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })


  });
}
testimonialCards();

//End Testimonials //******************************************** */
//Search form



function redirect_search() {
  window.location.href = "/search-page";
  
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