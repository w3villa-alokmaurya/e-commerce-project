
function checkLoggedIn() {
    const token = sessionStorage.getItem('token');

    if (!token == '') {
      return true;
    }
    else {
      return false;
    }
  }

  
const apiUrl = "data/products.json";
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
async function fetchData(url, options = {}) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        throw error; // Re-throw the error to propagate it
    }
}
//search redirect to search page
const searchRedirect = () => {
    const redirect =
      `search-page.html?query=${document.getElementById("search-input").value || document.getElementById("search-input1").value}` ;
      console.log(redirect)
    window.location.href = redirect;
  };

  // Pagination ******///

const pagination = (limit, items,func) => {
    const numberOfItems = items.length;
    const itemPerPage = limit;
    const numberOfPages = Math.ceil(numberOfItems / itemPerPage);
    for (let i = 0; i < numberOfPages; i++) {
      $('#pagination').append(`<button id="page${i + 1}" onclick="${func}" class="btn btn-primary"
        value="${i + 1}">${i + 1}</button>`);
    }
  }

  const BuildPage = (pageno, limit, fullarr) => {
    const trimStart = (pageno - 1) * limit;
    const trimEnd = trimStart + limit;
    return fullarr.slice(trimStart, trimEnd);
  
  }
  

// this is for truncate string ******
const limit = (string = "", limit = 0) => {
    return string.substring(0, limit);
};

const Tabs=(tabs, tabcontent)=>{
    const pageTabs = document.querySelectorAll(`${tabs} div`);
    const pagetabcontent = document.querySelectorAll(`${tabcontent} div`);
    pageTabs.forEach((tab, index)=>{
        tab.addEventListener('click',()=>{
            pagetabcontent.forEach((content)=>{
                content.classList.remove('active');
            });
            pageTabs.forEach((tab)=>{
                tab.classList.remove('active')
            });
            pagetabcontent[index].classList.add('active');
            pageTabs[index].classList.add('active');

        })
    })

}
// Tabs('#most-viewed','#most-viewed-content');


//mobile header things



const showMobileSearch=(id)=>{
    const element = document.getElementById(id);
    const s=document.getElementById('search-form');
    s.classList.add('overlay');
    s.classList.add('dis-flex');
  
  }
const  hideMobileSearch=()=>{
    const s=document.getElementById('search-form');
    s.classList.remove('overlay');
    s.classList.remove('dis-flex');

}

const showMobileMenu=(id)=>{
    const element= document.getElementById(id);
    const menu = document.getElementById('mobile-menu');
    menu.classList.add('overlay');
    menu.classList.add('dis-flex')
    // document.getElementById('mobile-menu').classList.add('active');
    


}
const hideMobileMenu=()=>{
    const menu = document.getElementById('mobile-menu');
    menu.classList.remove('overlay');
    menu.classList.remove('dis-flex')    


}
  