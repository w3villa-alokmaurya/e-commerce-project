let product_tabs = document.querySelectorAll('.tabs div');
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
