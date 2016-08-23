# doubledutchAPI
---


----------
## **Dependencies:** ##
In order to run locally, you will need to install the following:

 - **Node.js** ([link](https://nodejs.org/en/)). Remember to specify the PATH.

## **RUN LOCALLY:** ##

 1.  In terminal, change the directory to src and execute "npm install", which will install all the libraries specified in the package.json
 
 2.  To then run the web-server, execute "node server.js" in the same directory
or
 if you prefer to use nodemon, which will automatically refresh the server when you make changes and save, execute "npm install -g nodemon" and when you execute the server use "nodemon server.js" instead.

 3. Currently Port is set in the `server.js` class to `8090` so go to Postman and put the link for whatever method you want to call. Switch the
 request to a `POST` request and then on `body` to input the parameters. An exmaple body is in the documentation directory.   
 
> Written with [StackEdit](https://stackedit.io/).