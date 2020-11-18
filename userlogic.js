window.addEventListener("Load",initsite)
document.getElementById("loginbtn").addEventListener("click", loginUser)
document.getElementById("logoutbtn").addEventListener("click", logoutUser)
document.getElementById("createAcc").addEventListener("click", createUser)

function initsite(){
    showlogin()
}

function autenticate(){
    const loggedInUser = fetchLoggedInUser()

    if (loggedInUser){
        hidelogin()
        console.log("Logged in")
    }

}

function fetchLoggedInUser(){
    return localStorage.getItem("loggedInUser")
}

function fetchUser(){
    let Userlist = localStorage.getItem("userList")

    if(!Userlist){
        return[]
    }

    Userlist = JSON.parse(Userlist)
    return Userlist

}

function closeModal(){
    let modalcontainer  = document.getElementById("theModal");
    modalcontainer.style.display = "none"
    
}


function loginUser(){
    const Username = document.getElementById("userInput").value
    const Password = document.getElementById("passInput").value

    const Userlist =  fetchUser()

    let foundUser = undefined

    for (let i = 0; i < Userlist.length; i++) {
        const userlist = Userlist[i];
        if (Username == userlist.username && Password == userlist.password){
            closeModal()
            hidelogin()
            document.getElementById("UserPreOrders").style.display ="block"
            foundUser = userlist
            
        }else{
        }   
    }

    if(foundUser){
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser))
        hidelogin()
        document.getElementById("userInput").value =""
        document.getElementById("passInput").value =""
        initLoggedIn()

    }



}

function logoutUser(){
    localStorage.removeItem("loggedInUser")
    showlogin()
    window.location="index.html"
}

function showlogin(){
    document.getElementById("modalbutton").classList.remove("hide")
    document.getElementById("logoutbtn").classList.add("hide")
}

function hidelogin(){
    document.getElementById("modalbutton").classList.add("hide")
    document.getElementById("logoutbtn").classList.remove("hide")

}
/** Logic for the append user creation */
function createUserObj(){
    const creUsername = document.getElementById("nameInput").value
    const crePassword = document.getElementById("passwordInput").value
    
    UserName = creUsername
    PassWord = crePassword

    if (UserName == "" || PassWord == ""){
        alert("Invalid Username or password")
        return
    }else{
        
    }
    pushUser()

}

function GetUser(){
    const Users = localStorage.getItem("userList");
    if (Users){
        return JSON.parse(Users)
    }
    else{
        return []
    }
}

function pushUser(){
    let userList = GetUser()
        console.log(userList)

        UserName = document.getElementById("nameInput").value
        PassWord = document.getElementById("passwordInput").value

        let newUserInfo = {
            username:UserName,
            password:PassWord,
            order: []
         }
    console.log(newUserInfo)
    console.log(userList)
    userList.push(newUserInfo)
    localStorage.setItem("userList",JSON.stringify(userList))
    window.location = "index.html"
}

function createUser(){
    closeModal()
    document.getElementById("userBox").innerHTML=""
   document.getElementById("main").innerHTML=""
   document.getElementById("cart").innerHTML=""

    let userbox = document.getElementById("userBox")

    let creationCard = document.createElement("div")
    creationCard.id="creationCard"

    let carddesign = document.createElement("div")
    carddesign.id="carddesign"

    let creationTitle = document.createElement("h3")
    creationTitle.id="creationTitle"
    creationTitle.innerText = "Create Account"

    let nameInput = document.createElement("input")
    nameInput.id="nameInput"
    nameInput.placeholder ="Create a Username"

    let passwordInput = document.createElement("input")
    passwordInput.id="passwordInput"
    passwordInput.type = "password"
    passwordInput.placeholder ="Create a Password"

    let creationBtn = document.createElement("button")
    creationBtn.id="creationBtn"
    creationBtn.innerText ="Create Account"

    carddesign.appendChild(creationTitle)
    carddesign.appendChild(nameInput)
    carddesign.appendChild(passwordInput)
    carddesign.appendChild(creationBtn)
    creationCard.appendChild(carddesign)

    userbox.appendChild(creationCard)
    document.getElementById("creationBtn").addEventListener("click", createUserObj)
}