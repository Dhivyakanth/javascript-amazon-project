export const cart = [

];
export function updateCart(){
    let addQuantity=0;
        cart.forEach((item) =>{
          addQuantity+=item.quantity;
        });
        document.querySelector('.js-addQuantity').innerHTML = addQuantity; 
        console.log(cart);
  }
export function addToCart(itemId){
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
  }