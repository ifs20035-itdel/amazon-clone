# amazon-clone
E-commerce clone web app using React + Redux + NestJS + Mongo 

## Setting up database
The database I'm using is MongoDB with docker runtime. So you need a docker runtime install for the purpose if you're using the `docker-compose.yml` as the database.
### To setup the database using docker `docker-compose.yml` with your terminal. 
- Install docker runtime in your environment.
- run `docker-compose up -d` with the flag `d` for the detached option.
- `docker ps` to check if the docker already running. Make sure 2 images(`mongo-expres` & `mongo:latest`) are running if you didn't do any changes in the `docker-compose.yml` file.
