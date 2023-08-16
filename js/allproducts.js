
// Pagination ******///

const pagination = (limit, items) => {
  const numberOfItems = items.length;
  const itemPerPage = limit;
  const numberOfPages = Math.ceil(numberOfItems / itemPerPage);
  for (let i = 0; i < numberOfPages; i++) {
    $('#pagination').append(`<button id="page${i + 1}" onclick="handleClickpage(this.id)" class="btn btn-primary"
      value="${i + 1}">${i + 1}</button>`);
  }
}

//For all products ******//
const handleClickpage = (id) => {
  const pageno = document.getElementById(id).value;
  window.location.href = "allproducts.html?pageno=" + pageno;
}
const BuildPage = (pageno, limit, fullarr) => {
  const trimStart = (pageno - 1) * limit;
  const trimEnd = trimStart + limit;
  return fullarr.slice(trimStart, trimEnd);

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
      pagination(itemPerPage, fullarr);
      const paginated = BuildPage(pageno, itemPerPage, fullarr);
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
            
              <button id="${product.id}" onclick="addToCart('${product.id
          }', 'quantity${product.id}', '${product.productCategory}')">Add to cart</button>
            </div>
            <div class="product-icon">
              <a onclick="addToWishlist('${product.id
          }','${product.productCategory}')"><i id="wishlist${product.id
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
