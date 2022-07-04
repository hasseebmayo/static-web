let shopItem = document.getElementById('cart-collec')

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
      let cartProductCard = () => {
        return shopItem.innerHTML = basket.map((x)=>{

            return `
            <div class="product-card" id=${x.id}>
              <img src=${x.src} alt="">
              <div class="prod-details">
                  <h3>${x.name}</h3>
                  <h4>${x.price}</h4>
              </div>
              <div class="adder">
                  <button id="minus" class='plus-btn' onclick='decrement()'>-</button>
                  <div id="value-input" '>${x.item}</div>
                  <button id="plus" onclick='increment()'>+</button>
              </div>
              <div class="remove-item" id='remove' onclick='divRemover()'>
                  x
              </div>
            </div>
          
              `
        })
            
       
        
    
    }
    
    cartProductCard();   
     
    
          })

          function calculation(){
            let items = document.getElementById('items');
            items.innerHTML = basket.map(x=>x.item).reduce((x,y)=>x+y,0)
        }   
        console.log(calculation());  
}
// function divRemover(this){
//     console.log(this.parentElement);
// }

function showCart() {
    let cartDiv = document.querySelector('.icon');
    let cartSpace = document.getElementById('cart-collec');
    cartDiv.classList.toggle('icon-margin');
    cartSpace.classList.toggle('active')
}


  
