const wishList = () => {
    let wishlistProducts = JSON.parse(localStorage.getItem("wishlistItems")) || [];
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
                  
                  <div class="cart-body d-flex">
                      <p>Model 206</p>
                      <button title="remove" class="remove-btn" onclick="removeWishListItems('${category}','${id}')">Remove</button>
  
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

wishList();


// Remove wish items
const removeWishListItems = (category, productid) => {
    const currentProduct = productid;
    const categoryId = category;
    // console.log(currentProduct)
    let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    wishlistItems.filter((item) => {
      if (item.productId.includes(currentProduct)) {
        wishlistItems.splice(wishlistItems.indexOf(item), 1);
      }
    });
    let set = localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    alert("Product removed to wishlist");
    location.reload();
  };
