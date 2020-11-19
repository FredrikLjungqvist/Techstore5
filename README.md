# Techstore5
link repo: https://github.com/FredrikLjungqvist/Techstore5
Assignment from TechStore to make e-commerce webpage project with functionality to display products and store a shopping cart in local storage. Additional functionality to with login function was added. We also made some design decisions that altered the original design given to us by the client. 

The project had a fresh reboot 2020-10-27 as the designers had acquired new skills to make the project more up to par with current market design standards.

Project design alterations from client description and mockups:
Graphic:
*Added login/logout and orders button to navbar - The buttons are kept in the same style as the rest of the navbar and placed next to the cart button. The Login button switches to Logout if user is logged in and the Orders button gets displayed once the user is logged in. 
*Added hoover effect to navbar buttons - This was made to enhance the user experience and make the navbar more user friendly. 
*Added gradient to the background color in main page - To give a better user experience and make the page more vivid. 
*Made the product cards in cart have a static width and height - To give more symmetrical satisfaction and more in line with current market standards.  
*Added additional view the see previous orders - No real focus was given to the design except for readability of previous orders.
*Added modal popup when login button is pressed. The main area of the page is faded to grey to enhance the sense of the popup is Infront of everything else - The popup is kept in the same style as the rest of the page. 
Logic/HTML CSS
*Added modal popup login form from HTML - This was to keep the project cleaner and keeping the lines code and the amount of files lower. This was also made to prevent the navbar from being cluttered. 
*Made all product cards render from JavaScript in the same HTML document. - This was made by having one DIV in the HTML and append everything to it. The reason for this design is that it's more up to par with industry standards on how web pages are made. This also makes it easier to add more functionality without getting additional HTML documents. 
*Added six more products to the product list.
*Made login function using local storage. - This was made by adding a "user list" to local storage that saves username, password and orders for all users. We also made a "logged in user" entry in local storage that handles the current logged in user. 
