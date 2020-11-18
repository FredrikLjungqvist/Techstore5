document.getElementById("preOrdersBtn").addEventListener("click", initLoggedIn)
function initLoggedIn() {

    document.getElementById("preOrdersBtn").style.display ="block"
    document.getElementById("main").innerHTML=""
    document.getElementById("cart").innerHTML=""
    document.getElementById("loggedIn").innerHTML = ""
    renderContent()
    getOrders()

}
function ShowOrders(){
    document.getElementById("UserPreOrders").classList.remove("hide")
}

function getLoggedInUser() {
    const loggedInUser =  localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        
        return  JSON.parse(loggedInUser)
    }
    return []
}
function getCartList() {
    const cartList = localStorage.getItem("cartList");
    if (cartList) {
        return  JSON.parse(cartList);
    }
    return []
}
function renderContent() {
    let welcomeMsg = document.createElement("h2")
    welcomeMsg.innerHTML = "Välkommen " + getLoggedInUser().username
    welcomeMsg.classList.add("welcomeMsg")
    
    let orderText = document.createElement("h4")
    orderText.innerHTML = "Dina beställningar:"
    
    let user= getLoggedInUser()
    if (user.order<1) {
        orderText.innerHTML = "Du har inga beställningar."
    }
    document.getElementById("loggedIn").append(welcomeMsg, orderText)
}
function getOrders() {
    let user = getLoggedInUser();
    user.orders.forEach((order) => {
        let sum = 0
        let date = document.createElement("h5")
        date.classList.add("date")
        date.id = "dateId"
        date.innerHTML = order.date 
        document.getElementById("loggedIn").appendChild(date)
        
        order.products.forEach((product) => {
            let productName = document.createElement("p")
            productName.innerHTML =  product.title
            productName.id = "productName"
            document.getElementById("loggedIn").appendChild(productName)
            sum +=product.price
        })
        
        let price = document.createElement("p")
        price.innerHTML = "Totalt pris: " + sum + " kr"
        price.className = "slutPris"
        document.getElementById("loggedIn").appendChild(price)    
        })
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
function getUsers() {
    const users = localStorage.getItem("userList");
    if(users){
        return JSON.parse(users)
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

