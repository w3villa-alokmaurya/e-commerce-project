function listview(){
    document.getElementById('listview').classList.add('displaynone');
    document.getElementById('gridview').classList.add('displayblock');

    
}


function gridview(){
    document.getElementById('gridview').classList.add('displaynone');
    document.getElementById('listview').classList.add('displayblock');
}



const search = (key) => {

    fetchData(apiUrl)
    .then(data => {
      let fullarr = data['featured'].concat(data['latest']).concat(data['bestsellers']).concat(data['specials']);
      // console.log(fullarr);
      fullarr.forEach(value=>{
         // Find all the product with the search term
      
        if (value.title.toLowerCase().includes(key.toLowerCase())) {
          var result = value;
          console.log(result);
        }
  
      })
    })
  }
  const searchForm = document.getElementById('search-form');
  
  const searchHandle = () => {
    let searchInput = document.getElementById('search-input').value;
    search(searchInput);
  
  }
  searchForm.addEventListener('submit', searchHandle);
  