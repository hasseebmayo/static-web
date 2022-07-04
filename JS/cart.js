

var shopItem = document.getElementById('cart-item');

function showCart(){
    let cartDiv = document.querySelector('.icon');
    let cartSpace = document.getElementById('cart-collec');
    cartDiv.classList.toggle('icon-margin');
    cartSpace.classList.toggle('active')
}


var basket=[];
let plusButton = document.querySelectorAll('.addCart');
for(let i=0; i < plusButton.length; i++){
    plusButton[i];
    plusButton[i].addEventListener('click',()=>{
      let idGetter = plusButton[i].parentElement.getAttribute('id');     
      let imageSrc = plusButton[i].previousElementSibling.previousElementSibling.previousElementSibling.getAttribute('src');     
      let getProductName = plusButton[i].previousElementSibling.previousElementSibling.innerHTML;     
      let getPrice = plusButton[i].previousElementSibling.innerHTML;
      let obj = {id:idGetter,src:imageSrc,name:getProductName,price:getPrice,item:1};
     
      let search = basket.find((x)=>x.id === idGetter);
      
      
      if(search === undefined){
        basket.push(obj);
      }else {
        search.item += 1;
      }
      console.log(basket.map(x=>x.id === "product-1"))

          })
        
    
}









