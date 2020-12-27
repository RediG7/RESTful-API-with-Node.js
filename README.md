# RESTful-API-with-Node.js

Shop REST API with products, orders, users. 

You can GET & **POST** at /products route and GET, **PATCH**, **DELETE** for a specific product id at /products/{id}. 

For orders you can **GET** & **POST** at /orders and also **GET** & **DELETE** for a specific order id at /orders/{id}. 

User signup through /signup and user login through /login both are secured with JWT,  password with bcrypt. (login & signup are POST request and /userId **DELETE**) 

Routes in **BOLD** have authentication. 

PROJECT TREE
```
|   .gitignore
|   app.env
|   app.js
|   package-lock.json
|   package.json
|   README.md
|   server.js
|   
+---api
|   +---controllers
|   |       orders.js
|   |       products.js
|   |       user.js
|   |       
|   +---middleware
|   |       check-auth.js
|   |       
|   +---models
|   |       order.js
|   |       product.js
|   |       user.js
|   |       
|   \---routes
|           orders.js
|           products.js
|           user.js
|
+---node_modules
|
\---uploads
        1609078953315httpReturnCodes.png
        1609079139681httpReturnCodes.png
        1609079230173httpReturnCodes.png
```
