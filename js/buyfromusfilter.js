// get the data from json file

// let buyfromusurl = "data/buyfromus.json";

// async function getData(url) {
//     let response = await fetch(url);
//     let data = await response.json();
//     return data;
// }


top_categories= [
    {
    "name": "Fashion",
    "image":"https://images.unsplash.com/photo-1603820252378-5669708f95ee?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFzaGlvbmdpcmx8fHx8fHwxNjkwNzgwOTg4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
    },
    {
        "name": "Footwear",
        "image":"https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdHdlYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        "name": "Beauty",
        "image":"https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdHdlYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        "name": "bags",
        "image":"https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFnc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        "name": "Health and beauty",
        "image":"https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        "name": "Home Decor",
        "image":"https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        "name": "Electronics",
        "image":"https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }
    
    

],

electronics = [
    {
        "name" : "mobiles",
        "img" : "https://images.unsplash.com/photo-1596558450268-9c27524ba856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=100"
    },
    {
        "name" : "laptops",
        "img" : "https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=100"
    },
    {
        "name" : "headphones",
        "img" : "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=100"
    },
    {
        "name" : "speakers",
        "img" : "https://images.unsplash.com/photo-1585605109191-03cc36051fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=100"
    },
    {
        "name" : "cameras",
        "img" : "https://images.unsplash.com/photo-1491796014055-e6835cdcd4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=100"
    },
    {
        "name" : "accessories",
        "img" : "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=100"
    }
],
beauty = [
    {
        "name" : "makeup",
        "img" : "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=100"
    },
    {
        "name" : "skincare",
        "img" : "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=100"
    },
    {
        "name" : "haircare",
        "img" : "https://images.unsplash.com/photo-1624939461078-66a124b3539c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=100"
    },
    {
        "name" : "fragrances",
        "img" : "https://images.unsplash.com/photo-1587304946976-cbbbafce2133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
    },
    {
        "name" : "tools",
        "img" : "https://images.unsplash.com/photo-1600228397442-46ea628b4bdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=100"
    },
    {
        "name" : "accessories",
        "img" : "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=100"
    }
];
fashion = [
    {
        "name" : "Jeans",
        "img" : "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=100"
    },
    {
        "name" : "T-shirts",
        "img" : "https://images.unsplash.com/photo-1616006897093-5e4635c0de35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=100"
    },
    {
        "name" : "Shirts",
        "img" : "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=100"
    },
    {
        "name" : "Sweaters",
        "img" : "https://images.unsplash.com/photo-1579954568250-8b7abc7743e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=100"
    },
    {
        "name" : "Jackets",
        "img" : "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=100"
    },
    {
        "name" : "Suits",
        "img" : "https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=100"
    }
];



// function display(category){

//     // let show_category = false;
//     // let cat = document.getElementById(category);
//     // let notch = document.getElementById(category).firstChild;  
//     // current = 'top_categories';
//     // prev = 'top_categories';
//     // localStorage.setItem('prev', prev);
//     // localStorage.setItem('current', current);

//     // if(category=="top_categories"){
//     //     prev = localStorage.getItem('current');
//     //     localStorage.setItem('prev', prev);
//     //     let prevcat = document.getElementById(prev);
//     //     if(prevcat.classList.contains('active')){
//     //         prevcat.classList.remove('active');
//     //         prevcat.firstChild.classList.remove('active');
//     //     }
       
//     //     show_category=true;
//     //     cat.classList.add('active');
//     //     notch.classList.add('active');
//     //     // console.log(category);
//     //     localStorage.setItem('current', category);
        
        
//     // }
//     // else if(category == "fashion"){
//     //     prev = localStorage.getItem('current');
//     //     // console.log(prev);
//     //     let prevcat = document.getElementById(prev);
//     //     if(prevcat.classList.contains('active')){
//     //         prevcat.classList.remove('active');
//     //         prevcat.firstChild.classList.remove('active');
//     //     }
//     //     localStorage.setItem('prev', prev);
//     //     // console.log(localStorage.getItem('prev'));
//     //     show_category=true;
//     //     cat.classList.add('active');
//     //     notch.classList.add('active');
//     //     // console.log(category);
//     //     localStorage.setItem('current', category);
//     //     // console.log(localStorage.getItem('current'));

//     // }
//     // else if(category=="beauty"){
//     //     prev = localStorage.getItem('current');
//     //     console.log(prev);
//     //     let prevcat = document.getElementById(prev);
//     //     if(prevcat.classList.contains('active')){
//     //         prevcat.classList.remove('active');
//     //         prevcat.firstChild.classList.remove('active');
//     //     }
//     //     localStorage.setItem('prev', prev);
//     //     // console.log(localStorage.getItem('prev'));
//     //     show_category=true;
//     //     cat.classList.add('active');
//     //     notch.classList.add('active');
//     //     // console.log(category);
//     //     localStorage.setItem('current', category);
//     //     // console.log(localStorage.getItem('current'));

//     // }
//     // else if(category=="electronics"){
//     //     prev = localStorage.getItem('current');
//     //     console.log(prev);
//     //     let prevcat = document.getElementById(prev);
//     //     if(prevcat.classList.contains('active')){
//     //         prevcat.classList.remove('active');
//     //         prevcat.firstChild.classList.remove('active');
//     //     }
//     //     localStorage.setItem('prev', prev);
//     //     // console.log(localStorage.getItem('prev'));
//     //     show_category=true;
//     //     cat.classList.add('active');
//     //     notch.classList.add('active');
//     //     // console.log(category);
//     //     localStorage.setItem('current', category);
//     //     // console.log(localStorage.getItem('current'));
        
//     // }


//     let product_tabs = document.querySelectorAll('.button-container button');
//     let tabcontent = document.querySelectorAll('.tab-content div')
//     product_tabs.forEach((tab, index) => {
//     tab.addEventListener("click", () => {
//       tabcontent.forEach((content) => {
//         content.classList.remove("active");
//       });
//       product_tabs.forEach((tab) => {
//         tab.classList.remove("active");
//         // tab.firstChild.classList.remove("active");
        
//       });
//       tabcontent[index].classList.add("active");
//       product_tabs[index].classList.add("active");
//     });
//   });
    
    
// }

const topCategoriestabs = document.getElementById('top_categories');
const electronicstabs = document.getElementById('electronics');
const beautytabs =  document.getElementById('beauty');
const fashiontabs = document.getElementById('fashion');

const category_products = document.querySelectorAll('.category-product');

// Turns node list into an array
const allFilteredDivsArray = Array.from(category_products)

topCategoriestabs.addEventListener('click', topCategories)
function topCategories() {
  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')
    div.classList.add('show')
  })
}

electronicstabs.addEventListener('click', electronics)
function electronics() {
  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.electronics) {
      div.classList.add('remove')
    }

  })
}

beautytabs.addEventListener('click', beauty)
function beauty() {
  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.beauty) {
      div.classList.add('remove')
    }

  })
}

fashiontabs.addEventListener('click', fashion)
function fashion() {
  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')
    
    if (!div.dataset.fashion) {
      div.classList.add('remove')
    }

  })
}





  