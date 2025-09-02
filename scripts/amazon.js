import {cart,updateCart,addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
let productHTML ='';

products.forEach((element) =>{
  const html=`
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src = "${element.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${element.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            
            src="images/rating/rating-${element.rating.stars*10}.png">
          <div class="product-rating-count link-primary">
            ${element.rating.count}
          </div>
        </div>

        <div class="product-price">
          $${(element.priceCents/100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
          <select class="js-selector-${element.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart js-add-to-cart js-added-to-cart-${element.id}">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary"  data-productid = "${element.id}">
          Add to Cart
        </button>
      </div>`;
      productHTML+=html;
  });
document.querySelector('.js-gridSelector').innerHTML = productHTML;

/*unction addToCart(itemId){
  let matchItem="";
  cart.forEach((item) =>{
    if(itemId === item.productId){
      matchItem = item;
    }
  });
  
  const quantitySelector= document.querySelector(`.js-selector-${itemId}`);

  const quantity = Number(quantitySelector.value); 

  if(matchItem){
    matchItem.quantity+=quantity;
  }
  else{
    cart.push({
      productId : itemId,
      quantity : quantity
    });
  }
}*/
document.querySelectorAll('.add-to-cart-button').forEach((button) =>{
    button.addEventListener('click',()=>{
      const itemId = button.dataset.productid;
      addToCart(itemId);

      document.querySelector(`.js-added-to-cart-${itemId}`).classList.add('visible');
      document.querySelector(`.js-added-to-cart-${itemId}`).innerHTML='<img src="images/icons/checkmark.png"> Added';
      
      setTimeout(()=>{
      document.querySelector(`.js-added-to-cart-${itemId}`).classList.remove('visible');
      },2000);       

      updateCart();
      
    })
  });