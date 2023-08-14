

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
      productItem = `<div class="products-main-1">
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

let product_tabs = document.getElementById('product-page-tabs');
console.log(product_tabs)
let tabcontent = document.querySelectorAll('.tab-content div')
product_tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabcontent.forEach((content) => {
        content.classList.remove("active");
      });
      product_tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tabcontent[index].classList.add("active");
      product_tabs[index].classList.add("active");
    });
  });

  
  // const Tabs=(tabs,tabcontent)=>{
  //   console.log(tabs);
  //   tabs.forEach((tab,index)=>{
  //     tab.addEventListener("click", ()=>{
  //       tabcontent.forEach((content)=>{
  //         content.classList.remove("active")
  //       })
  //       tabs.forEach((tab)=>{
  //         tab.classList.remove("active")
  //       })
  //       tabcontent[index].classList.add("active");
  //       tabs[index].classList.add("active");

  //     })
  //   })
    
  // }


function showmore_tab(){
    let showmore= document.getElementById('hide-text-auto1');
    showmore.classList.add('overflow-none');
    showmore.classList.remove('overflow-hidden');
    document.getElementById('show-more-tab').classList.remove('btn-block');
    document.getElementById('show-more-tab').classList.add('btn-none');
    document.getElementById('show-less-tab').classList.add('btn-block');
    document.getElementById('show-less-tab').classList.remove('btn-none');
}
function show_less_tab(){
    let showmore= document.getElementById('hide-text-auto1');
    showmore.classList.remove('overflow-none');
    showmore.classList.add('overflow-hidden');
    document.getElementById('show-more-tab').classList.remove('btn-none');
    document.getElementById('show-more-tab').classList.add('btn-block');
    document.getElementById('show-less-tab').classList.add('btn-none');
    document.getElementById('show-less-tab').classList.remove('btn-block');
}


