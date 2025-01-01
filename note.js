// soucrce file == https://www.youtube.com/watch?v=9zUHg7xjIqQ
// for docker file write this scripts so that and the second . of copy and json means locate the filee to /app
// FROM  node:22
// WORKDIR /app
// COPY package.json .
// RUN npm install
// COPY . .
// EXPOSE 3000
// CMD [ "node", "index.js" ]

// const { application } = require("express")

// after this build an image 
// docker build -t {name of image} {location of the app}


// check the list of image 
// docker image ls

// to run docker image 
// docker run {name of the image 


// docker sidd$ docker run -d --name {name of the container we are creating }backend-container {name of the image}backend-dockerd

// how to delete docker cotainer 
// docker rm 997f7a24e9f6{docker id or name} -f

// same run but with port forword for that -p flag is used 
// docker sidd$ docker run -p 3000:3000 -d --name {name of the container we are creating }backend-container {name of the image}backend-dockerd

// first port for container and the second for local machine 


// how to see files in container 
//  docker exec -it {meansing intractive mode } backend-docker {name of the contaier }  bash {terminal name }
// docker exec -it  backend-container bash

// how to view the content of file ?

// we use cat index.js{name of the file }



// how to update the docker image or contianer 
// we have to delete the old container 
// and build the container and run the shit

// volume can help to avoid this problem of rebuild and rerun the container 
// docker sidd$ docker run -p -v pathtofolderonloaction:pathtofolderoncontainer  3000:3000 -d --name backend-container backend-docker


// to make file in dockerfile we use 
//  touch testfile

// to make read only file we use :ro at the last of 
// $ docker run -p 3000:3000 -v /Users/sidd/Desktop/node-docker/:/app:ro -d --name backend-container backend-docker

// for mac 
// docker sidd$ docker run -p 3000:3000 -v $(pwd):/app -d --name backend-container backend-docker


// new volume is required when node models is deleted from local host 
// $ docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules -d --name backend-container backend-node1



// now to pass env veriable we use the following cammand
// docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules -d --name backend-container backend-node
// correct cammand 
// docker sidd$ docker run -p 3000:4000 -v $(pwd):/app -v /app/node_modules --env PORT=4000 -d --name backend-container backend-node


// at some point we will have alot of variable env in this case its recommanded to create .env file to store all the ports 
// to use the file to use the conatiner we can writ the following 
// docker run -p 3000:4000 -v $(pwd):/app -v /app/node_modules --env-file ./env -d --name backend-container backend-node


// docker volume ls
// this also exist 

// this is used to delete volume which is not in use 
// docker volune prune 


// / how to delete docker cotainer  with volumex
// docker rm 997f7a24e9f6{docker id or name} -fv


                //   when we create an application that might use more then one conatiner and to manage that its complicated and moreover we
                //   have to start all the container indivisibley however there is solution for that which is also know as compose provided by 
                //   docker 

                // for that reason we will create yml file 
                // version: '3'
                // services:
                //   node-app:
                //    build: .
                //    ports:
                //      - '3000:3000'
                //    volumes:
                //      - ./:/app
                //      - /app/node_modules
                    
                //   #  environment:
                //   #  - ports:3000
                
                //    env_file:
                //     - ./.env
                //   this is the docker compsoe fiel then we have to use 
                // docker-compose up -d 




                // when we make chaneges to the image file we need to use --build in ducker compose since it is dump 
                // docker-compose up -d --build

        

                // Development vs Production configs

                // we have created three files called 
                // 1. docker-compose.yml
                // 2. docker-compose.dev.yml
                // 3. docker-compose.prod.yml

                // new we have to use this as per our requirement if we are in dev we will use dev or vicc-vasa

                // f means file 
                // docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d 



                // point to  be noted 
                // when we write docker for the production we should not include the nodemon package since in production its not required  to do so 
                // we have to addd --only==production in dockerfile 
                // FROM  node:22
                // WORKDIR /app
                // COPY package.json .
                // RUN npm install --only==production
                // COPY . ./
                // ENV PORT 3000
                //  EXPOSE $PORT


//                 that how we make two container in docker 
//                 # version: "3"
// services:
//   node-app:
//    build: .
//    ports:
//      - '3000:3000'
//    volumes:
//      - ./:/app
//      - /app/node_modules
    
//    environment:
//    - ports:3000
   
//   mongo-anyname:
//    image: mongo
//    environment:
//      - MONGO_INITDB_ROOT_USERNAME = sidd
//      - MONGO_INITDB_ROOT_PASSWORD = ishu@123
//   #  env_file:
//   #   - ./.env
  
// enter the bash cli

// now lets connect the mongo using this 

// cmd => mongo -u "{{username }}""  -p "{{password }}""
//  thsi is real wsy 
// mongosh -u "sidd" -p "ishu@123"


// mongosh -u sidd -p "sidd@123" --authenticationDatabase admim


// how to connect react to mongo in docker 