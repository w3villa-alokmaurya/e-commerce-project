function listview() {
    document.getElementById('listview').classList.add('displaynone');
    document.getElementById('gridview').classList.add('displayblock');


}


function gridview() {
    document.getElementById('gridview').classList.add('displaynone');
    document.getElementById('listview').classList.add('displayblock');
}



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
//Search form

const searchproduct = "/data/products.json"

const search = (key) => {
    fetchData(searchproduct)
        .then(data => {
            let fullarr = data['featured'].concat(data['latest']).concat(data['bestsellers']).concat(data['specials']);
            // console.log(fullarr);
            let products = '';
            let gridproducts='';
            if(key === ""){
                products += `<p>Not found</p>`;
                document.getElementById('search-products').innerHTML = products;
                document.getElementById('gridview').innerHTML = products;
                return
            }
            results = fullarr.filter((data) => {
                if (data.title.toLowerCase().includes(key.toLowerCase())) {
                    return true;
                }
                return false;
            })
            document.getElementById('search-input-value').value = key;
            if (results.length > 0) {
                results.forEach(value => {
                    // Find all the product with the search term

                            products += `<div class="products-card">
                                <div class="left">custom labels</div>
                                <div class="right">
                                <p class="right-1">-70%</p>
                                <p class="right-2">hot</p>
                                </div>
                                
                                <img src="https://source.unsplash.com/400x300/?shoes" alt="">
                                <div class="box-product d-flex justify-content-between">
                                <a href="#">Ericson</a>
                                <p>Model 519</p>
                                </div>
                                <div class="price ">
                                <h3>${value.title}</h3>
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
                             gridproducts += `<div class="grid-view-products">
                            <div class="left-side-grid products-card w-100">
                              <div class="left">Pre Order</div>
                                <div class="right">
                                  <p class="right-1">-70%</p>
                                  <p class="right-2">hot</p>
                                </div>
                                
                                <img src="https://source.unsplash.com/400x300/?fashiongirl" alt="">
            
                            </div>
                            <div class="right-side-grid">
                              <div class="right-side-grid-top">
                                <span>Brand <a href="">Ericson</a></span> <span>Model: model 994</span>
                              </div>
                              <div class="right-side-grid-middle">
                                <h3>${value.title}</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatem nam error optio consectetur vel! Aliquam quod libero consequatur magnam nostrum, mollitia est omnis! Facere fuga voluptate ut dolore inventore.</p>
                                <h3 class="orange-color">1,717.49$ <span><del>2,000$</del></h3></span>
                                <small>Ex tax:1,717.49$</small>
                              </div>
                              <div class="right-side-grid-bottom">
                                <div class="add-to-cart-btn">
                                  <input type="number" name="number"
                                min = "1" max="10" step="1" value="1">
                                  <button><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                                </div>
                                <div class="product-icon">
                                  <i class="fa-regular fa-heart"></i>
                                  <i class="fa-solid fa-arrow-down-up-across-line fa-rotate-90"></i>
                                </div>
                              </div>
                              <div class="bottom-card d-flex align-items-center">
                                <p><span class="color-green"><i class="fa-solid fa-sack-dollar"></i></span> Buy Now</p>
                                <p><i class="fa-solid fa-circle-question color-red" style="padding-left: 20px;"></i>Question</p>
                              </div>
                              
            
                            </div>
                          </div>
                          <hr style="padding-bottom: 10px;"/>`;

                            document.getElementById('search-products').innerHTML = products;
                            document.getElementById('gridview').innerHTML = gridproducts;
                            console.log(gridproducts);
                })
            } else {
                console.log("Main Yha hu")
                products += `<p>Not found</p>`;
                document.getElementById('search-products').innerHTML = products;

            }

        })
}
//   const searchForm = document.getElementById('search-form');

const searchHandle = () => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var query = url.searchParams.get("query");
    search(query);

}

const gridView=()=>{
    const gridShow = document.getElementById('gridview');
    gridShow.classList.add('displayblock');
    gridShow.classList.remove('displaynone');
    const listShow = document.getElementById('listview');
    listShow.classList.add('displaynone');
    listShow.classList.remove('displayblock');
}
const listView=()=>{
    const gridShow = document.getElementById('gridview');
    gridShow.classList.add('displaynone');
    gridShow.classList.remove('displayblock');
    const listShow = document.getElementById('listview');
    listShow.classList.add('displayblock');
    listShow.classList.remove('displaynone');
}
listView();
searchHandle();

const refreshsearch=()=>{
    const query= document.getElementById('search-input-value').value;
    const url = "/search-page.html?query="+query;
    window.location.href=url;
    
}
document.getElementById('search-page-search-btn').addEventListener('click', refreshsearch)