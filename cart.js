// JavaScript for cart

function initSite() {
    printCart()
    totalPrice()
    makePayment()
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
    let container = document.createElement("div")
    container.classList.add("col", "mb-4")
    
    let list = getCartList()
    let div = document.createElement("div")
    div.className = "card"
    
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
    description.innerHTML += list[i].price + " " + "kr"

    let button = document.createElement("button")
    button.classList.add("btn", "btn-primary")
    button.innerText = "ta bort"
    
    button.onclick = function(){
        removeProduct(i)}

    container.appendChild(div);
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
    totalPrice()
} 

//Totalpris
 function totalPrice() {
     
document.getElementById("test").innerHTML = ""
let list = getCartList()
let initialValue = 0;

let sum = list.reduce(function (total, currentValue) {
    return total + currentValue.price;
}, initialValue);
if (sum>0) {
    document.getElementById("test").innerHTML = "Totalt " + sum + " Kronor"
 }else{
     document.getElementById("test").innerHTML = ""
 }
}

//Slutför köp
function makePayment() {
   let btn = document.getElementById("knapp")
   btn.innerHTML = "Slutför Köp"
   btn.addEventListener("click", betalt)
       
}
function betalt() {
    alert("Köpet genomfört")
}
