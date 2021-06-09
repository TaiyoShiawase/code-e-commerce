# E-Commerce Website for Code Fresh Apparel


Members:

- Alegre, Mary Therese
- Barriga, Hosea
- Fajardo, RJ

NOTE: do not migrate the db just import the sql file provided. 

Products are pre-populated and does not have admin side.

npm install -> npm start


BUGS:
- product images are just from internet or just image addresses so it requires internet to be displayed / faulty on searh results display but works when viewed

- filter not working properly (Price Range and Type)

- payment not implemented last part would be the order sumamry 

- error and success messages not working but after adding it to cart the quantity will be deducted and it can be seen in the cart 
(access the cart from the homepage or localhost:8080/, we make the 
navbar as partials and included it in every ejs file but some pages wont display the cart icon)




CAN: 

- login/logout
- registration
- search specific brand name (Tigerhoods, Code, HoneyCo)
- view product specifiy quantity 
- add to cart
- quantity count is updated everytime it is added to cart
- delete it from cart
- checkout but no payment
- prices are dynamic
