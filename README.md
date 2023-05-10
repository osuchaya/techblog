# Model View Controller - Tech Blog

Visit the deployed site (full-stack application) at https://techblog-osuchaya.herokuapp.com/

The database generated are hosted in JAWSDB MySQL cloud.

Please see the repository where this project is located at https://github.com/osuchaya/techblog

## Code source
No starter code was given for this project. The project was built from scratch.

## Technology Used
| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Node.js    | [https://nodejs.org](https://nodejs.org) | 
| Sequelize | [https://www.npmjs.com/package/sequelize](https://www.npmjs.com/package/sequelize) |
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| Express.js | [https://www.npmjs.com/package/express] | (https://www.npmjs.com/package/express) |
| dotenv |[https://www.npmjs.com/package/dotenv]|(https://www.npmjs.com/package/dotenv)|
| MySQL2 |[https://www.npmjs.com/package/mysql2]|(https://www.npmjs.com/package/mysql2)|
| BCrypt | [https://www.npmjs.com/package/bcrypt] | (https://www.npmjs.com/package/bcrypt) |
| Express Handlebars | [https://www.npmjs.com/package/express-handlebars] | (https://www.npmjs.com/package/express-handlebars) |
| Session | [https://www.npmjs.com/package/express-session] | (https://www.npmjs.com/package/express-session) |

## Description
This project is part of Module 14 on Model View Controller (MVC) where the author utilized Sequelize package to create Models and relationships between User and Blog posts and for tabulating seed data into the database, use Handlebars to render the different, compartmentalized components to the  HTML-like main page and to create different routes to receive input from the responsive front-end through Javascript files in public folder for executing requests and deliver responses.
This project is considered comprehensive full-stack development as it entails both front and back end elements. Furthermore, this project involves the use of session, cookies and password generation and hashing to add security to the web application itself and to render personalized profile/page to the logged-in user. The hashing of generated password is facilitated by bcrypt's hooks and hashing.


## Installation and Usage
Install Node version 16.0 in order to run this application successfully. Please ensure to:
1. Generate an .env file and store your sensitive data i.e. your MySQL username and password there. The database name is 'techblog_db'.
2. Have the following packages installed as listed in package.json file: MySQL2, Sequelize, dotenv, bcrypt, connect-session-sequelize, express-handlebars, express-session and express by type in "npm i" in your integrated terminal. Upon successful installation, within the command line interface, access MySQL by typing in "mysql -u root -p", enter your password as prompted and source the database by typing "source db/schema.sql". If Query is OK, type "quit", seed the database by typing "npm run seed" then run the server by typing 'npm start' in the Integrated Terminal. 

## License
This project is currently under GPL3.0 license.

## Learning points
The author has learnt steeply from module through generating and testing API routes, connecting front and back end through public javascript files, rendering pages through Handlebars, generating connecting database through Sequelize. Furthermore, the author has learned to use cloud database storage provider such as JAWSDB and to deploy full-stack app via Heroku.

## Credits
Resources were consulted to complete this application such as the documentations on how to use Sequelize, dotenv, mysql2, session, cookies, handlebars and the help of tutor to complete this challenge.





