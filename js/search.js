function listview() {
  document.getElementById('listview').classList.add('displaynone');
  document.getElementById('gridview').classList.add('displayblock');
}
function gridview() {
  document.getElementById('gridview').classList.add('displaynone');
  document.getElementById('listview').classList.add('displayblock');
}

Tabs('#most-viewed-search-tabs', '#most-viewed-search-tabcontent');


const handleClickpageSearchPaginate = (id, query) => {
  const pageno = document.getElementById(id).value;
  window.location.href = `search-page.html?query=${query}&pageno=${pageno}`;

}

//Search form

const searchproduct = "data/products.json"

const search = (key) => {
  fetchData(searchproduct)
    .then(data => {
      let fullarr = data['featured'].concat(data['latest']).concat(data['bestsellers']).concat(data['specials']);
      // console.log(fullarr);
      let products = '';
      let gridproducts = '';
      if (key === "") {
        products += `<p>Not found</p>`;
        document.getElementById('search-products').innerHTML = products;
        document.getElementById('gridview').innerHTML = products;
        return
      }
      const paginatedUrl = `handleClickpageSearchPaginate(this.id,'${key}')`;

      results = fullarr.filter((data) => {
        if (data.title.toLowerCase().includes(key.toLowerCase())) {
          return true;
        }
        return false;
      })
      document.getElementById('search-input-value').value = key;
      let itemPerPage = 3;
      let url_string = window.location.href;
      let url = new URL(url_string);
      let pageno = url.searchParams.get("pageno") || '1';
      pagination(itemPerPage, results,paginatedUrl);
      const paginated = BuildPage(pageno, itemPerPage, results);
      if (paginated.length > 0) {
        paginated.forEach(value => {
          // Find all the product with the search term

          products += `<div class="products-card">
                                <div class="left">custom labels</div>
                                <div class="right">
                                <p class="right-1">-70%</p>
                                <p class="right-2">hot</p>
                                </div>
                                
                                <a href="product-page.html?productCategory=${value.productCategory}&productid=${value.id}" ><img src="${value.image}" alt=""></a>
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
                            <div class="left-side-grid products-card">
                              <div class="left">Pre Order</div>
                                <div class="right">
                                  <p class="right-1">-70%</p>
                                  <p class="right-2">hot</p>
                                </div>
                                
                                <a href="product-page.html?productCategory=${value.productCategory}&productid=${value.id}" ><img src="${value.image}" alt=""></a>
            
                            </div>
                            <div class="right-side-grid">
                              <div class="right-side-grid-top">
                                <span>Brand <a href="">Ericson</a></span> <span>Model: model 994</span>
                              </div>
                              <div class="right-side-grid-middle">
                                <h3>${value.title}</h3>
                                <p>${value.description}</p>
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
          // console.log(gridproducts);
        })
      } else {
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

const gridView = () => {
  const gridShow = document.getElementById('gridview');
  gridShow.classList.add('displayblock');
  gridShow.classList.remove('displaynone');
  const listShow = document.getElementById('listview');
  listShow.classList.add('displaynone');
  listShow.classList.remove('displayblock');
}
const listView = () => {
  const gridShow = document.getElementById('gridview');
  gridShow.classList.add('displaynone');
  gridShow.classList.remove('displayblock');
  const listShow = document.getElementById('listview');
  listShow.classList.add('displayblock');
  listShow.classList.remove('displaynone');
}
listView();
searchHandle();

const refreshsearch = () => {
  const query = document.getElementById('search-input-value').value;
  const url = "/search-page.html?query=" + query;
  window.location.href = url;

}
document.getElementById('search-page-search-btn').addEventListener('click', refreshsearch);

// Search filter

const handleFilter = (id) => {
  const element = document.getElementById(id);
  const mainElement = document.getElementById(`${id}-1`);
  if (mainElement.classList.contains('active')) {
    element.innerHTML = `<i class="fa-solid fa-plus"></i>`
    mainElement.classList.replace('active', 'search-filter-none');
  }
  else {
    element.innerHTML = `<i class="fa-solid fa-minus"></i>`
    mainElement.classList.replace('search-filter-none', 'active');
  }


}

const rangeSlider = () => {
  let rangeMin = 10;
  const range = document.querySelector(".range-selected");
  const rangeInput = document.querySelectorAll(".price-selector input");
  const rangePrice = document.querySelectorAll(".price-input input");

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minRange = parseInt(rangeInput[0].value);
      let maxRange = parseInt(rangeInput[1].value);
      if (maxRange - minRange < rangeMin) {
        if (e.target.className === "min") {
          rangeInput[0].value = maxRange - rangeMin;
        } else {
          rangeInput[1].value = minRange + rangeMin;
        }
      } else {
        rangePrice[0].value = minRange;
        rangePrice[1].value = maxRange;
        range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
      }
    });
  });

  rangePrice.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = rangePrice[0].value;
      let maxPrice = rangePrice[1].value;
      if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });
}
rangeSlider();

