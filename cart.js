// JavaScript for cart
function initSite() {
    printCart();
}

function printCart() {
    let list = getCartList()
   for (let i = 0; i < list.length; i++) {
       let product = list[i];
       document.getElementById("main").innerHTML += product.title + " " + product.description + " " + product.price;
   }
    
    
}
function getCartList() {
    let cartList = localStorage.getItem("cartList")
    if (cartList) {
        cartList = JSON.parse(cartList)
    } else {
        cartList = []
    }
    return cartList
}