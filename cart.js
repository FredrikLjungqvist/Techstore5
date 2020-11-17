// JavaScript for cart

function initCart() {
    document.getElementById("main").innerHTML = "";
    printTitle();
    initCard();
    printCart();
    initCounterButton();
    totalPrice();
}

function printCart() {
    let list = getCartList();
    for (let i = 0; i < list.length; i++) {
        let product = list[i];
        document.getElementById("printCart").appendChild(addInfoCard(i));
    }
     
}

function getCartList() {
    const cartList = localStorage.getItem("cartList");
    if (cartList) {
        return  JSON.parse(cartList);
    }
    return []
}

 function addInfoCard(i) {
    
    let container = document.createElement("div")
    container.classList.add("col", "mb-4")
    
    let list = getCartList()

    let div = document.createElement("div")
    div.classList.add("card", "mx-3", "my-3", "py-2", "justify-content-center")
    div.id = "div"
    
    let image = document.createElement("img")
    image.classList.add("card-img-top", "img-fluid")
    let imageUrl = list[i].image
    image.src += ("/assets/" +imageUrl);
    
    let div2 = document.createElement("div")
    div2.classList.add("card-body", "text-align-center")
    
    let title = document.createElement("h5")
    title.classList.add("card-title", "text-center")
    title.innerHTML += list[i].title
    
    let description = document.createElement("p")
    description.classList.add ("card-text", "text-center")
    description.innerHTML += list[i].price + " " + "kr"

    let button = document.createElement("button")
    button.classList.add("btn")
    button.innerText = "Ta bort"
    button.id = "removeBtn"
    
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

    document.getElementById("printCart").innerHTML = ""
    printCart()
    counterTotal()
    displayBuyButton()
    CartCounter()

} 

//Totalpris
 function totalPrice() {
     

let list = getCartList()
let initialValue = 0;

let sum = list.reduce(function (total, currentItem) {
    return total + currentItem.price;
}, initialValue);

   return sum
 
}


function betalt() {
    alert("Köpet genomfört")

    saveOrder()
    localStorage.removeItem("cartList");
    initCart();
    CartCounter();
}
function saveOrder() {
    let getOrder = getCartList()
    let orderObject = {
        date: new Date().toDateString(),
        products: getOrder
    }
    
    

let loggedInUser = getLoggedInUser()
loggedInUser.orders.push(orderObject)
syncUsers(loggedInUser)
}
function getLoggedInUser() {
    const loggedInUser =  localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        
        return  JSON.parse(loggedInUser);
    }
    return []
}
function getUsers() {
    const users = localStorage.getItem("userList");
    if(users){
        return JSON.parse(users)
        console.log(users)
    }
}

function syncUsers(loggedInUser) {
    let userList= getUsers()
    let userIndex = userList.findIndex((user)=>{
        return loggedInUser.username == user.username 
    })
    userList[userIndex] = loggedInUser
    localStorage.setItem("userList", JSON.stringify(userList))
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser))
}
function noItem() {
    let text = document.createElement("h1")
    text.id = "tom"
    text.innerText = "Din kundvagn är tom"
    document.getElementById("cart").appendChild(text)
}

function printTitle() {
    let title = document.createElement("h2")
    title.innerText = "Kundvagn"
    title.id = "titleCart"
    title.classList.add( "page-header", "h2")
    document.getElementById("cart").innerText = ""
    document.getElementById("cart").appendChild(title)
}

   
function CartCounter(){
    document.getElementById("count").innerHTML = ""
    let cartCounter = getCartList()
    cartCounter = document.getElementById("count").innerHTML = cartCounter.length;
                
   }

function initCard() {
    let bigCont = document.createElement("div")
    bigCont.classList.add("container", "my-2")
    
    let row = document.createElement("div")
    row.classList.add("row", "justify-content-center", "mx-3", "row-cols-1", "row-cols-md-5")
    row.id = "printCart"

    document.getElementById("cart").appendChild(bigCont)
    bigCont.appendChild(row)

}

function initCounterButton() {
    let list = getCartList()
    
    setTextById("price", "")
    setTextById("buy", "") 
    
    let counterDiv = document.createElement("div")
    counterDiv.id = "counterDiv"
    let price = document.createElement("p")
    price.id = "price"
    
    document.getElementById("cart").appendChild(counterDiv)
    counterDiv.appendChild(price)
    price.innerText = counterTotal()
    counterTotal()

    let buttonDiv = document.createElement("div");
    buttonDiv.id = "buttonDiv"
    document.getElementById("cart").appendChild(buttonDiv)
    displayBuyButton()
    
}
function counterTotal() {
    let list = getCartList()
    document.getElementById("price").innerText = ""
    if (list.length>0) {
        document.getElementById("price").innerText = "Totalt pris: " + totalPrice() + " kr";
        } 
}

function displayBuyButton() {
    let list = getCartList()
    document.getElementById("buttonDiv").innerHTML = ""
    if (list.length>0){
    let button = document.createElement("button")
       button.innerHTML = "Slutför ditt köp"
       button.addEventListener("click", betalt)
       button.id = "buyBtn"
       button.classList.add("btn", "btn-primary")
       document.getElementById("buttonDiv").appendChild(button)
    }else{
        noItem()
    }
}

function setTextById(htmlId, text) {
    let element = document.getElementById(htmlId)
    if (element) {
        element.innerText=text
    }
}

