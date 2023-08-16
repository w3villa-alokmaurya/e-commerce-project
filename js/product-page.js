// For particular product*****//
const Product = () => {
  let url_string = window.location.href;
  let url = new URL(url_string);
  let productCategory = url.searchParams.get("productCategory");
  let productid = url.searchParams.get("productid");
  let productItem = '';
  let productTop = '';
  let productmiddle = '';
  let productleft = '';
  fetchData(apiUrl)
    .then((data) => {
      let fullarr = data['featured'].concat(data['latest']).concat(data['bestsellers']).concat(data['specials']);
      // console.log(fullarr);

      let itemdata = fullarr.filter((item) => {
        if (item.id == productid && item.productCategory == productCategory) {
          return true;
        }
        else {
          return false
        }

      })
      itemdata.forEach(item => {
        productleft = `<div class="box1">
      <img src="${item.image}" alt="">
  </div>
  <div class="box1">
      <img src="${item.image}" alt="">
  </div>
  <div class="box1">
      <img src="${item.image}" alt="">
  </div>
  <div class="box1">
      <img src="${item.image}" alt="">
  </div>
  <div class="box1">
      <img src="${item.image}" alt="">
  </div>
`
        productTop = `<h1 id="product-title">${item.title}</h1>
      <p class="left-hr-line"></p>`
        productItem = ``;
        productmiddle = `<div class="left-side-grid products-card w-100">
      <!-- <div class="left">Pre Order</div> -->
        <div class="right">
          <p class="right-1">-70%</p>
          <p class="right-2">hot</p>
        </div>
        
        <img src="${item.image}" alt="">

    </div>`

      });
      // document.getElementById('main-product-particular').innerHTML=productItem;
      document.getElementById('product-middle').innerHTML = productmiddle;
      document.getElementById('product-left').innerHTML = productleft;

      document.getElementById('product-top').innerHTML = productTop;
    })

}
Product();

//tab  ****************//
Tabs('#product-page-product-tabs', '#product-page-product-tabcontent');
Tabs('#most-viewed-tabs', '#most-viewed-tabcontent');


function showmore_tab() {
  let showmore = document.getElementById('hide-text-auto1');
  showmore.classList.add('overflow-none');
  showmore.classList.remove('overflow-hidden');
  document.getElementById('show-more-tab').classList.remove('btn-block');
  document.getElementById('show-more-tab').classList.add('btn-none');
  document.getElementById('show-less-tab').classList.add('btn-block');
  document.getElementById('show-less-tab').classList.remove('btn-none');
}
function show_less_tab() {
  let showmore = document.getElementById('hide-text-auto1');
  showmore.classList.remove('overflow-none');
  showmore.classList.add('overflow-hidden');
  document.getElementById('show-more-tab').classList.remove('btn-none');
  document.getElementById('show-more-tab').classList.add('btn-block');
  document.getElementById('show-less-tab').classList.add('btn-none');
  document.getElementById('show-less-tab').classList.remove('btn-block');
}


