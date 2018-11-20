# NodeJS RestFul API

The purpose of this guide, is to show you just a way to construct RestFul API based in NodeJS and using a MongoDB instance to persist the data.


### What will you need?

1. You're going to need a Docker installation in your local dev environment if you want to use the **build&run.sh**.
2. You're going to need a DB Instance, hosted in any provider across the cloud, BTW you can create a free instance here.[Get it here](https://mlab.com/)


### Assumptions.

You're going to develop a NodeJS based API Rest, due to it's supossed to have a basic knowledge of Ecmascript and at least basic Bash knowledge.

### Let's get start with this.

How does it works?

First of all, you can test this solution in two different ways:
1. Local or remote dockerization process.
2. Non dockerized deployment process (Local NodeJS - Only for development.)

If you have chosen the first option:
1. Go to the folder app.
2. In the console if you're in a Unix like system you should change the permissions on the **build&run.sh**
```console
MacBook-Pro-de-Roberto:app robertotrujillo$ chmod +x build\&run.sh 
```
3. Execute the script:
```console
MacBook-Pro-de-Roberto:app robertotrujillo$ ./build\&run.sh
```
4. Now you should be **Up&Running** and see a screen like this one:
![alt text](https://github.com/rkobismarck/node-js/blob/media-content/docker-nodejs-1.png "Docker Container Running")

If you have chosen the second option:
1. Go to the folder app.
2. Perform an npm install
3. Perform an npm start

