# milestone-backend

Backend for personal habit/goal setting app.

## Setup

1. Install dependencies using [`yarn` classic](https://classic.yarnpkg.com/lang/en/), [MongoDB](https://docs.mongodb.com/manual/administration/install-community/), [`nodemon` (install it globally)](https://www.npmjs.com/package/nodemon).
1. To build(?)/setup Mongo locally (might not need this step... Check in future. Also check if I should commit generated Mongo files)
   1. `sudo mkdir -p ./data/db/`
   1. `sudo chown `id -u` ./data/db`
   1. `yarn db-start`
1. Once MongoDB is setup and running, setup the dev environment db by following the steps in "Setup and Look Around the DB" section below
1. To run development server: `yarn dev`

The Express server should be running on `localhost:3000`.
The MongoDb server should be running on `mongodb://localhost:27017`.

## DB Stuff

For now, I'm going to be using the following naming convention for this project's MongoDB databases: `ms<Environemnt>DB` (example: `msDevDB`).

### Setup and Look Around the DB

I'm using a Mongo Compass to look view/edit my DB's. [You can get it here](https://docs.mongodb.com/compass/master/install).

Start up the MongoDB server running (with `yarn dev`). Then open Compass and connect to it by pasting this url `mongodb://localhost:27017`.

Finally, create a new database by pressing the "Create Database" button on the top left corner of Compass. Name it to `msDevDB`, then for the required collection name, use `milestones`. You should be all setup now!
