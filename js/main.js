// scroll to top
const scrollToTop = () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
};
// newsletter form
const newsletterForm = document.getElementById("newsletter-form");
const newsletter = () => {
  const email = document.getElementById("newsletter-email").value;
  const storedNewsletterEmail = localStorage.getItem("newsletter_email");
  if (email == "") {
    alert("Please fill all the details");
  } else if (storedNewsletterEmail == email) {
    alert("Already Subscribed");
  } else {
    localStorage.setItem("newsletter_email", email);
    alert("Subscribed Successfully");
  }
};
newsletterForm.addEventListener("submit", newsletter);

//End Newsletter form **************************//

// fetch Data  function/////////////////////////////////////////////////////////
function fetchData(url, options = {}) {
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // This parses the response body as JSON
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      throw error; // Re-throw the error to propagate it
    });
}

// this is for truncate string ******
const limit = (string = "", limit = 0) => {
  return string.substring(0, limit);
};

// Buy From US Section  //

const buyFromUsUrl = "data/buyfromus.json";
const buyFromUsSection = document.getElementById("buyfromussection");

const buyFromUs = (term) => {
  fetchData(buyFromUsUrl).then((data) => {
    let buyFromUsCards = `<div id="category-products-${term}" class="category-products owl-carousel owl-theme blog-cards ">`;

    data[term].forEach((card) => {
      buyFromUsCards += `<div class="category-product top_categories fashion" data-fashion="fashion">
         <img src="${card.img}" alt="">
        <p>${card.name}</p>
  
      </div>`;
    });
    buyFromUsSection.innerHTML = buyFromUsCards;

    // category products

    var owl = $("#category-products-" + term);
    owl.owlCarousel({
      items: 5,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
          nav: false,
        },
        500: {
          items: 3,
        },
        767: {
          items: 3,
          nav: false,
          // loop:true,
        },

        1000: {
          items: 5,
          nav: false,
          // loop:true,
        },
      },
      // dots:true,
    });
    $(".play").on("click", function () {
      owl.trigger("play.owl.autoplay", [1000]);
    });
    $(".stop").on("click", function () {
      owl.trigger("stop.owl.autoplay");
    });
  });
};

buyFromUs("top_categories");
const btns = document.querySelectorAll("#category-btns *");

const resetActive = (btns) => {
  btns.forEach((btn) => {
    if (btn.classList.contains("active-btn")) {
      btn.classList.remove("active-btn");
    }
  });
};

const makeActiveBtn = (currentActive) => {
  currentActive.classList.add("active-btn");
  currentActive.firstChild.classList.add("active-btn");
};

const handleClick = (id) => {
  buyFromUs(id);
  let currentActive = document.getElementById(id);
  resetActive(btns);
  makeActiveBtn(currentActive);
};

//End section //

// Featured product section*****/////////////
// Products Data
const apiUrl = "data/products.json";
const feturedProducts = document.getElementById("featured-products1");
const addToCart = (productid, quantityid, category) => {
  const quantity = document.getElementById(quantityid).value;
  const currentProduct = productid;
  const categoryId = category;
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  // console.log(length.cartItems);
  let a = cartItems.find(({ productId }) => productId == currentProduct);
  if (!a == "") {
    alert("Item is already added to cart");
  } else {
    cartItems.push({
      productId: currentProduct,
      category: categoryId,
      quantity: quantity,
    });

    let set = localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Product Added to cart");
    location.reload();
  }
};
const addToWishlist = (productid, category) => {
  const currentProduct = productid;
  const categoryId = category;
  const wish = document.getElementById("wishlist" + productid);
  wish.classList.replace("fa-regular", "fa-solid");
  wish.style = "color:red";
  let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
  // console.log(length.cartItems);
  let a = wishlistItems.find(({ productId }) => productId == currentProduct);
  if (!a == "") {
    alert("Item is already added to wishlist");
  } else {
    wishlistItems.push({
      productId: currentProduct,
      category: categoryId,
    });

    let set = localStorage.setItem(
      "wishlistItems",
      JSON.stringify(wishlistItems)
    );
    alert("Product Added to wishlist");
  }
};

const productsCardData = (term) => {
  fetchData(apiUrl)
    .then((data) => {
      let productsCard = `<div id="featured-products-${term}" class="featured-products owl-carousel owl-theme">`;

      data[term].forEach((product) => {
        // console.log(product);

        productsCard += `<div class="products-card" id="${product.id}">
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
            <input id="quantity${product.id}" type="number" name="number"
          min = "1" max="10" step="1" value="1">
          
            <button id="${term + product.id}" onclick="addToCart('${
          product.id
        }', 'quantity${product.id}', '${term}')">Add to cart</button>
          </div>
          <div class="product-icon">
            <a onclick="addToWishlist('${
              product.id
            }','${term}')"><i id="wishlist${
          product.id
        }" class="fa-regular fa-heart"></i></a>
            <i class="fa-solid fa-arrow-down-up-across-line fa-rotate-90"></i>
          </div>
      </div>
      <div class="bottom-card d-flex justify-content-between align-items-center">
        <p><span class="color-green"><i class="fa-solid fa-sack-dollar"></i></span> Buy Now</p>
        <p><i class="fa-solid fa-circle-question color-red"></i>Question</p>
      </div>
    </div>`;
      });

      feturedProducts.innerHTML = productsCard;

      var owl = $("#featured-products-" + term);
      owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          620: {
            items: 2,
            nav: false,
            loop: true,
          },
          767: {
            items: 2,
            nav: false,
            loop: true,
          },
          800: {
            items: 3,
          },
          1000: {
            items: 3,
            nav: false,
            loop: true,
          },
          1200: {
            items: 4,
            nav: false,
            loop: false,
          },
        },
        // dots:false,
      });
      $(".play").on("click", function () {
        owl.trigger("play.owl.autoplay", [1000]);
      });
      $(".stop").on("click", function () {
        owl.trigger("stop.owl.autoplay");
      });
    })
    .catch((error) => {
      console.error("error");
    });
};
productsCardData("featured");
const featuredProductsBtns = document.querySelectorAll(
  "#featured-products-btns *"
);

const handleClick1 = (id) => {
  productsCardData(id);
  let currentActive = document.getElementById(id);
  resetActive(featuredProductsBtns);
  makeActiveBtn(currentActive);
};

// end section ****************//
// Blog Section Posts **************************************************

const blogUrl = "data/blogs.json";
const blogCardSection = document.getElementById("blog-cards-section");

const blogPosts = (term) => {
  fetchData(blogUrl).then((data) => {
    let blogCard = `<div id="blog-cards-${term}" class="owl-carousel owl-theme blog-cards " margin-bottom: 20px;">`;
    const blogs = data[term];
    blogs.forEach((blog) => {
      let description = limit(blog.description, 300);
      blogCard += `<div class="blog-card">
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
    blogCardSection.innerHTML = blogCard;
    // for blog posts Slider

    var owl = $("#blog-cards-" + term);
    owl.owlCarousel({
      items: 3,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
          loop: true,
        },
        550: {
          items: 2,
          loop: true,
        },
        767: {
          items: 2,
          nav: false,
          loop: true,
        },
        1000: {
          items: 3,
          nav: false,
          loop: true,
        },
        1200: {
          items: 3,
          nav: false,
          loop: false,
        },
      },
    });
    $(".play").on("click", function () {
      owl.trigger("play.owl.autoplay", [1000]);
    });
    $(".stop").on("click", function () {
      owl.trigger("stop.owl.autoplay");
    });
  });
};
blogPosts("latest_posts");
const blogPostsBtns = document.querySelectorAll("#blog-posts-btns *");
const handleClick2 = (id) => {
  blogPosts(id);
  let currentActive = document.getElementById(id);
  resetActive(blogPostsBtns);
  makeActiveBtn(currentActive);
};
// ENd blog ******************************************************************************
// Testimonial section ***//

const testimonialUrl = "data/testimonials.json";
const testimonialsSection = document.getElementById("testimonials-section");

const testimonialCards = () => {
  fetchData(testimonialUrl).then((data) => {
    let testimonialsCards =
      '<div id="testimonials-cards" class="owl-carousel owl-theme blog-cards " style="margin-top: 40px; margin-bottom: 20px;">';
    const Testimonials = data["testimonials"];
    Testimonials.forEach((testimonial) => {
      let Review = limit(testimonial.review, 200);
      testimonialsCards += `<div class="test-card">
    <p class="quote-s"><i class="fa-solid fa-quote-left"></i></p>
    <p>${Review}</p>
    <p class="name"> - ${testimonial.name}</p>

  </div>`;
    });
    testimonialsSection.innerHTML = testimonialsCards;
    // for testimonials slider
    var owl = $("#testimonials-cards");
    owl.owlCarousel({
      items: 3,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsiveClass: true,

      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        430: {
          items: 2,
        },
        767: {
          items: 2,
          nav: false,
          loop: true,
        },
        1000: {
          items: 3,
          nav: false,
          loop: false,
        },
        1200: {
          items: 3,
          nav: false,
          loop: false,
        },
      },
    });
    $(".play").on("click", function () {
      owl.trigger("play.owl.autoplay", [1000]);
    });
    $(".stop").on("click", function () {
      owl.trigger("stop.owl.autoplay");
    });
  });
};
testimonialCards();

//End Testimonials //******************************************** */

const searchRedirect = () => {
  const redirect =
    "search-page.html?query=" + document.getElementById("search-input").value;
  window.location.href = redirect;
};

const removeCartItems = (quantity1, category, productid) => {
  const quantity = quantity1;
  const currentProduct = productid;
  const categoryId = category;
  // console.log(currentProduct)
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.filter((item) => {
    if (item.productId.includes(currentProduct)) {
      cartItems.splice(cartItems.indexOf(item), 1);
    }
  });
  let set = localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert("Product removed to cart");
  location.reload();
};
const shoppingCart = () => {
  let cartProducts = JSON.parse(localStorage.getItem("cartItems"));
  // console.log(cartProducts);
  let cartdata = "";

  cartProducts.forEach((item) => {
    let category = item.category;
    let id = item.productId;
    let quantity = item.quantity;
    fetchData(apiUrl).then((data) => {
      let cartproducts = data[category];
      cartproducts.filter((data) => {
        if (data.id == id) {
          let totalprice = data.price * quantity;
          cartdata += `<div class="cart-item">
            <div class="cart-up1" >
                
                <div class="cart-body" style="padding-left: 10px;">
                    <img src="${data.image}" alt="">
                </div>
            </div>
            <div class="cart-up1" style="width: 200px;">
               
                <div class="cart-body">
                    <a href="">${data.title}</a>
                    
                </div>
            </div>
            <div class="cart-up1">
                
                <div class="cart-body">
                    <p>Model 206</p>
                </div>
            </div>
            <div class="cart-up1">
               
                <div class="cart-body">
                    <input type="number" min="1" step="1" max="10" value="${quantity}" disabled>
                   
                    <button title="remove" onclick="removeCartItems('${quantity}','${category}','${id}')"><i class="fa-solid fa-close"></i></button>
                </div>
            </div>
            <div class="cart-up1">
                
                <div class="cart-body">
                    <p>$${data.price}.00</p>
                </div>
            </div>
            <div class="cart-up1">
                <div class="cart-body">
                    <p>$ ${totalprice}.00</p>
                </div>
            </div>
            
        </div>`;
        }
      });
      document.getElementById("item-cart-dynamic").innerHTML = cartdata;
    });
  });
};
const wishList = () => {
  let wishlistProducts = JSON.parse(localStorage.getItem("wishlistItems"));
  // console.log(cartProducts);
  let wishdata = "";

  wishlistProducts.forEach((item) => {
    let category = item.category;
    let id = item.productId;
    fetchData(apiUrl).then((data) => {
      let wishproducts = data[category];
      wishproducts.filter((data) => {
        if (data.id == id) {
          wishdata += `<div class="cart-item">
            <div class="cart-up1" >
                
                <div class="cart-body" style="padding-left: 10px;">
                    <img src="${data.image}" alt="">
                </div>
            </div>
            <div class="cart-up1" style="width: 200px;">
               
                <div class="cart-body">
                    <a href="">${data.title}</a>
                    
                </div>
            </div>
            <div class="cart-up1">
                
                <div class="cart-body">
                    <p>Model 206</p>
                </div>
            </div>
            <div class="cart-up1">
                
                <div class="cart-body">
                    <p>$${data.price}.00</p>
                </div>
            </div>
           
            
        </div>`;
        }
      });
      document.getElementById("item-wish-dynamic").innerHTML = wishdata;
    });
  });
};

shoppingCart();

wishList();

// Pagination ******///

const pagination=(limit,items)=>{
  const numberOfItems = items.length;
  const itemPerPage = limit;
  const numberOfPages = Math.ceil(numberOfItems/itemPerPage);
  for (let i=0; i<numberOfPages; i++) {
    $('#pagination').append(`<button id="page${i+1}" onclick="handleClickpage(this.id)" class="btn btn-primary"
    value="${i+1}">${i+1}</button>`);
  }


}

//For all products ******//
const handleClickpage=(id)=>{
  const pageno=document.getElementById(id).value;
  window.location.href="/allproducts.html?pageno="+pageno;
}
const BuildPage=(pageno,limit,fullarr)=>{
  const trimStart = (pageno-1)*limit;
  const trimEnd = trimStart + limit;
  return fullarr.slice(trimStart,trimEnd);

}

const AllProductsData = () => {
  fetchData(apiUrl)
    .then((data) => {
      let productsCard = `<div id="featured-products" class="featured-products" style="display:flex;flex-wrap:wrap;">`;
      let fullarr = data['featured'].concat(data['latest']).concat(data['bestsellers']).concat(data['specials']);
      let itemPerPage = 8;
      let url_string = window.location.href;
      let url = new URL(url_string);
      let pageno = url.searchParams.get("pageno") || '1';
      pagination(itemPerPage,fullarr);
      const paginated=BuildPage(pageno,itemPerPage,fullarr);      
      paginated.forEach((product) => {
        productsCard += `<div class="products-card" id="${product.id}">
      <div class="left">custom labels</div>
      <div class="right">
        <p class="right-1">-70%</p>
        <p class="right-2">hot</p>
      </div>
      
      <a href="product-page.html?productCategory=${product.productCategory}&productid=${product.id}"><img src="${product.image}" alt=""></a>
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
            <input id="quantity${product.id}" type="number" name="number"
          min = "1" max="10" step="1" value="1">
          
            <button id="${product.id}" onclick="addToCart('${
          product.id
        }', 'quantity${product.id}', '${product.productCategory}')">Add to cart</button>
          </div>
          <div class="product-icon">
            <a onclick="addToWishlist('${
              product.id
            }','${product.productCategory}')"><i id="wishlist${
          product.id
        }" class="fa-regular fa-heart"></i></a>
            <i class="fa-solid fa-arrow-down-up-across-line fa-rotate-90"></i>
          </div>
      </div>
      <div class="bottom-card d-flex justify-content-between align-items-center">
        <p><span class="color-green"><i class="fa-solid fa-sack-dollar"></i></span> Buy Now</p>
        <p><i class="fa-solid fa-circle-question color-red"></i>Question</p>
      </div>
    </div>`;
      });

      document.getElementById('all-products').innerHTML = productsCard;

     
    })
    .catch((error) => {
      console.error("error");
    });
}
AllProductsData();

// For particular product*****//

const Product=()=>{
      let url_string = window.location.href;
      let url = new URL(url_string);
      let productCategory = url.searchParams.get("productCategory");
      let productid = url.searchParams.get("productid");
      let productItem = '';
      let productTop ='';

      fetchData(apiUrl)
      .then((data)=>{
        let fullarr = data['featured'].concat(data['latest']).concat(data['bestsellers']).concat(data['specials']);
        // console.log(fullarr);

        let itemdata = fullarr.filter((item)=>{
          if(item.id == productid && item.productCategory == productCategory){
            return true;
          }
          else{
            return false
          }
          
        })
        itemdata.forEach(item=>{
          productTop= `<h1 id="product-title">${item.title}</h1>
          <p class="left-hr-line"></p>`
          productItem = `  <div class="products-main-1">
          <div class="left-side">
            <div class="box1">
                <img src="https://source.unsplash.com/400x300/?camera" alt="">
            </div>
            <div class="box1">
                <img src="https://source.unsplash.com/400x300/?computer" alt="">
            </div>
            <div class="box1">
                <img src="https://source.unsplash.com/400x300/?camera" alt="">
            </div>
            <div class="box1">
                <img src="https://source.unsplash.com/400x300/?dell" alt="">
            </div>
            <div class="box1">
                <img src="https://source.unsplash.com/400x300/?Applemac" alt="">
            </div>

          </div>
          <div class="middle-side">
          <div class="left-side-grid products-card w-100">
              <!-- <div class="left">Pre Order</div> -->
                <div class="right">
                  <p class="right-1">-70%</p>
                  <p class="right-2">hot</p>
                </div>
                
                <img src="${item.image}" alt="">

            </div>

          </div>

    </div>
     <div class="right-side">
          <div class="right-side-top">

          
              <div id="product-page-tabs" class="right-side-top-main tabs">
                  <div class="tab description active">
                  <h3>Description</h3>
                  <p class="line start w-110"></p>
                  </div>
                  <div class="tab specifications">
                      <h3 class="color-gray">Specifications</h3>
                      <p class="line start w-110"></p>

                  </div>
                  <div class="tab">
                      <h3 class="color-gray">Reviews</h3>
                      <p class="line start w-110"></p>

                  </div>
                  <div class="tab">
                      <h3 style="padding-right: 0;" class="color-gray">Custom Tabs</h3>
                      <p class="line start w-110"></p>

                  </div>
                  
                  
                  
              </div>
              <div class="tab-content">
                <div class="active show-more-tab-content">
                  <section class="hide-text-auto1 overflow-hidden" id="hide-text-auto1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempora fuga laboriosam similique doloribus. Accusantium odit necessitatibus, culpa porro iure aliquid labore a corrupti beatae ligendi possimus ipsam consectetur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda esse rem saepe! Doloremque quisquam, nostrum in quas aliquam eos nulla. Esse obcaecati quo asperiores 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos illum quae ea nobis sequi quos voluptatum accusantium, eius perspiciatis veniam labore odio soluta dignissimos deleniti corporis amet possimus? Veritatis, nulla!</p>
                    <p>The Cinema HD features an active-matrix liquid crystal display that produces flicker-free images that deliver twice the brightness, twice the sharpness and twice the contrast ratio of a typical CRT display. Unlike other flat panels, it's designed with a pure digital interface to deliver distortion-free images that never need adjusting. With over 4 million digital pixels, the display is uniquely suited for scientific and technical applications such as visualizing molecular structures or analyzing geological data.

                    </p>
                    <p>Offering accurate, brilliant color performance, the Cinema HD delivers up to 16.7 million colors across a wide gamut allowing you to see subtle nuances between colors from soft pastels to rich jewel tones. A wide viewing angle ensures uniform color from edge to edge. Apple's ColorSync technology allows you to create custom profiles to maintain consistent color onscreen and in print. The result: You can confidently use this display in all your color-critical applications.</p>
                    <p>Housed in a new aluminum design, the display has a very thin bezel that enhances visual accuracy. Each display features two FireWire 400 ports and two USB 2.0 ports, making attachment of desktop peripherals, such as iSight, iPod, digital and still cameras, hard drives, printers and scanners, even more accessible and convenient. Taking advantage of the much thinner and lighter footprint of an LCD, the new displays support the VESA (Video Electronics Standards Association) mounting interface standard. Customers with the optional Cinema Display VESA Mount Adapter kit gain the flexibility to mount their display in locations most appropriate for their work environment.</p>
                    <p>The Cinema HD features a single cable design with elegant breakout for the USB 2.0, FireWire 400 and a pure digital connection using the industry standard Digital Video Interface (DVI) interface. The DVI connection allows for a direct pure-digital connection.</p>
                  </section>
                  <button class="show-more-tab btn-block" id="show-more-tab" onclick="showmore_tab()"><i class="fa-solid fa-chevron-down"></i> Show More</button>
                  <button class="show-more-tab btn-none" id="show-less-tab" onclick="show_less_tab()"><i class="fa-solid fa-chevron-up"></i> Show Less</button>

                </div>
                <div class="specifications"> 
                  <table>
                    <tr rowspan="2"class="thead">
                      <td >Style</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                      Style
                      </td>
                  <td>Sleek</td>
                </tr>
                  <tr rowspan="2"class="thead">
                    <td>Composition</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Ingredients</td>
                    <td>Aluminium</td>
                  </tr>
                  <tr>
                    <td>test1</td>
                    <td>30GB</td>
                  </tr>
                  <tr rowspan="2"class="thead">
                    <td >Processor</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Clockspeed</td>
                    <td>100 mhz</td>
                  </tr>
                  </table>
                   
                  </div>
                  <div class="review-tab">
                    <section class="review-tab-top">
                      <h3>Demo demo</h3>
                      <p>02/03/2022</p>
                    </section>
                    <p style="margin-top: 20px; margin-bottom: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis accusamus iure aspernatur? Voluptas impedit a est non quibusdam vero adipisci atque veniam nostrum numquam cupiditate, suscipit aut facere sequi.</p>
                    <section class="star-rating">
                      <i class="fa-solid fa-star yellow-color"></i>
                      <i class="fa-solid fa-star yellow-color"></i>
                      <i class="fa-solid fa-star yellow-color"></i>
                      <i class="fa-solid fa-star yellow-color"></i>
                      <i class="fa-regular fa-star"></i>

                    </section>

                  </div>
                
                    <div class="">
                      <p class="hide-text-auto">4 ipsum dolor sit amet consectetur adipisicing elit. Enim tempora fuga laboriosam similique doloribus. Accusantium odit necessitatibus, culpa porro iure aliquid labore a corrupti beatae quaerat eligendi possimus ipsam consectetur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda esse rem saepe! Doloremque quisquam, nostrum in quas aliquam eos nulla. Esse obcaecati quo asperiores impedit exercitationem libero temporibus voluptas hic?</p>
                    </div>
                
                
              </div>

              <div class="review-section-right">
                  <div class="star-rating">
                      <i class="fa-solid fa-star yellow-color"></i>
                      <i class="fa-solid fa-star yellow-color"></i>
                      <i class="fa-solid fa-star yellow-color"></i>
                      <i class="fa-solid fa-star yellow-color"></i>
                      <i class="fa-regular fa-star"></i>

                  </div>
                  <a href="">Based on 1 reviews </a>
                  <span style="padding-right: 10px;"> - </span>
                  <a href="">Write a review</a>

              </div>

          </div>
          <hr/>

          <div class="right-side-middle">
            <div class="middle-left">
              <h3><del>39.99$</del></h3>
              <h2 class="color-red">71.61$</h2>
              <p style="padding-bottom: 5px;">Ex tax:1,717.49$</p>
              <p style="padding-bottom: 5px;">Price in reward point: 400</p>
              
              <p>10 or more 69.04$</p>
              <p>10 or more 69.04$</p>
              <p>10 or more 69.04$</p>

          </div>
            <div class="right-side-middle-left">
              
              <div class="middle-middle">
                  <p class="color-light-green"><i class="fa-solid fa-check"></i> In Stock</p>
                  <div>
                      <li>Reward Points: 100</li>
                      <li>Model: Product 15</li>
                      <li>Weight: 12.50kg</li>
                      <li>Dimensions: 1.00cm <i class="fa-solid fa-xmark"></i> 2.00cm <i class="fa-solid fa-xmark"></i> 3.00cm</li>
                  </div>

              </div>
              <div class="middle-right">
                <img src="images/apple.png" alt="">
                <a href="">Apple</a>
            </div>
            </div>
              
              
          </div>
          <hr/>
          <div class="right-side-bottom">
              <div class="options">
                  <p>Another Select <span class="color-red">*</span></p>
                  <select name="" id="">
                      <option value="">--- Please Select ----</option>
                  </select>
              </div>
              <div class="options">
                  <p>Select list <span class="color-red">*</span></p>
                  <select name="" id="">
                      <option value="">--- Please Select ----</option>
                  </select>
              </div>
              <div class="options">
                  <p>Radio <span class="color-red">*</span></p>
                  <div class="radio-group-btn">

                  
                  <div class="radio-buttons">
                      <input type="radio" name="1" id="">
                  <label for="">Small (+7.85$)</label>
                  </div>
                  <div class="radio-buttons">
                      <input type="radio" name="1" id="">
                  <label for="">Medium (+8.85$)</label>
                  </div>
                  <div class="radio-buttons">
                      <input type="radio" name="1" id="">
                  <label for="">Large (+10.85$)</label>
                  </div>
                  </div>
              </div>
              <div class="options">
                  <p>Single choice(with image) <span class="color-red">*</span></p>
                  <div class="circles">
                    <div class="circle bg-aqua">

                      </div>
                      <div class="circle bg-violet">
                          
                      </div>
                      <div class="circle bg-aqua-dark">
                          
                      </div>
                      <div class="circle bg-red1">
                          
                      </div>  
                  </div>
                  
              </div>
              <div class="options">
                  <p>Text <span class="color-red">*</span></p>
                  <input type="text" placeholder="text">
              </div>
              <div class="options">
                  <p>Textarea <span class="color-red">*</span></p>
                  <textarea class="input-w-100"  name="" id="" cols="10" rows="5"></textarea>
              </div>
              <div class="options">
                  <p>File</p>
                  <button class="upload-file"><i class="fa-solid fa-arrow-up-from-bracket"></i> Upload File</button>

              </div>
              <div class="options">
                  <p>date <span class="color-red">*</span></p>
                  <input class="input-w-90" type="date" placeholder="text">
                  <button class="calender-btn"><i class="fa-solid fa-calendar-days"></i></button>
              </div>
              <div class="options">
                  <p>time <span class="color-red">*</span></p>
                  <input class="input-w-90"  type="time" placeholder="text">
                  <button class="calender-btn"><i class="fa-solid fa-calendar-days"></i></button>
              </div>
              <div class="options">
                  <p>Date & time <span class="color-red">*</span></p>
                  <input class="input-w-90"  type="datetime" placeholder="text">
                  <button class="calender-btn"><i class="fa-solid fa-calendar-days"></i></button>
              </div>
              <div class="right-side-button-cart">
                  <input type="number" name="number"
                min = "1" max="10" step="1" value="1">
                  <button style="width:410px;"><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                  <button  style="background-color: rgb(15, 114, 15); width: 170px;"><i class="fa-solid fa-sack-dollar"></i> Buy Now</button>
                  <button class="" style="background-color: red; width: 62px;"> <i class="fa-solid fa-circle-question"></i></button>
              </div>
              <hr>
              <div class="icons-with-text-bottom">
                  <span role="button"><i class="fa-solid fa-heart " style="color: red; margin-right: 5px;"></i> Add to Wishlist</span>
                  <span role="button"><i style="color: var(--theme-color); margin-left: 20px; margin-right: 5px;" class="fa-solid fa-arrow-down-up-across-line"></i>Compare this Product</span>
              </div>
              <div class="min-quantity">
                  <p><i class="fa-solid fa-info"></i> This Product has a minimum quantity of 2.</p>
              </div>
              <div class="social-menu  share-social">
                  <a href=""><i class="fa-brands fa-facebook"></i></a>
                 <a href=""><i class="fa-brands fa-twitter"></i></a>
                  <a href=""><i class="fa-brands fa-instagram"></i></a>
                  <a href=""><i class="fa-brands fa-linkedin"></i></a>
                  <a href=""><i class="fa-brands fa-youtube"></i></a>
                  <a href=""><i class="fa-brands fa-skype"></i></a>
                  <a href=""><i class="fa-brands fa-google-plus-g"></i></a>
              </div>
          </div>
          

      </div> `

        });
        document.getElementById('main-product-particular').innerHTML=productItem;
        document.getElementById('product-top').innerHTML=productTop;
        
          
        })

}      
Product();


