# amazon-clone
E-commerce clone web app using React + Redux + NestJS + Mongo 

## Setting up database
The database I'm using is MongoDB with docker runtime. So you need a docker runtime install for the purpose if you're using the `docker-compose.yml` as the database.
### To setup the database using docker `docker-compose.yml` with your terminal. 
- Install docker runtime in your environment.
- run `docker-compose up -d` with the flag `d` for the detached option.
- `docker ps` to check if the docker already running. Make sure 2 images(`mongo-expres` & `mongo:latest`) are running if you didn't do any changes in the `docker-compose.yml` file.

### Post installation
- The http route for the mongodb as stated in the `/backend/src/app.module.ts`: `mongodb://localhost:27017/amazon`
- For the management of the mongodb service: `localhost:8081`

## Setup the backend
- Change directory to `backend`
- `npm install` to install the dependencies
- `npm run start:dev` for the development mode.

## Setup the frontend
- Using the different terminal, change directory to `frontend`
- `npm install` to install the dependencies.
- `npm start` to start the service.