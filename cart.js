// JavaScript for cart

function initSite() {
    printCart()
    
}

function printCart() {
    let list = getCartList()
    for (let i = 0; i < list.length; i++) {
       let product = list[i];
      
       document.getElementById("main").appendChild(addInfoCard(i))
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

 function addInfoCard(i) {

    let list = getCartList()
   let div = document.createElement("div")
   div.className = "card"
   div.style.width = "18 rem"
   div.id = "div"
   
   let image = document.createElement("img")
   image.className = "card-img-top"
   let imageUrl = list[i].image
   image.src += ("/assets/" +imageUrl);
   
   let div2 = document.createElement("div")
   div2.className = "card-body"
   
   let title = document.createElement("h5")
   title.className = "card-title"
   title.innerHTML += list[i].title
   
   let description = document.createElement("p")
   description.className = "card-text"
   description.innerHTML += list[i].description

   let button = document.createElement("button")
   button.classList.add = ("btn", "btn-primary")
   button.innerText = "ta bort"
   
   button.onclick = function(){
    removeProduct(i)}

   div.append(image, div2);
   div2.append(title, description, button);
return div
}

function removeProduct(i) {
    let cart = getCartList()
    cart.splice(i,1)
    localStorage.setItem("cartList", JSON.stringify(cart))
    document.getElementById("main").innerHTML = ""
    printCart()
} 