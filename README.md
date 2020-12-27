# RESTful-API-with-Node.js

Shop REST API with products, orders, users. 

You can GET & **POST** at /products route and GET, **PATCH**, **DELETE** for a specific product id at /products/{id}. 

For orders you can **GET** & **POST** at /orders and also **GET** & **DELETE** for a specific order id at /orders/{id}. 

User signup through /signup and user login through /login both are secured with JWT,  password with bcrypt. (login & signup are POST request and /userId **DELETE**) 

Routes in **BOLD** have authentication. 
