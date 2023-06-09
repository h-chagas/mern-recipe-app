## Recipe App ##
### A MERN webapp project ###

#### Technologies ####

See the packages used in this project

##### Client side #####

* React framework

##### Server side #####

* [express](https://www.npmjs.com/package/express)
* [cors](https://www.npmjs.com/package/cors)
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [nodemon](https://www.npmjs.com/package/nodemon), as a dev dependency

##### Stack #####

As a M.E.R.N project, this web application is built using

* [React](https://react.dev/)
* [Node.js](https://nodejs.org/en)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)

#### Tips ####

##### Environment variable #####

In order to hide the database and other API username and passwords, create a .env in the root of the server directory. If you need to use secret information on the front-end side, just add another .env file into the client root directory.

__MongoDB__
I named the username and password variables as MONGODB_USERNAME and MONGODB_PASSWORD. You can change it as you like in _index.js_ file