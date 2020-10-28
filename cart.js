// JavaScript for cart
function printCart() {
    let list = getCartList()
   for (let i = 0; i < list.length; i++) {
       const element = list[i];
       
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