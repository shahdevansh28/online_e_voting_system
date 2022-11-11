# online_e_voting_system

Build a Voting App created with the MERN stack

## User Stories

* As an authenticated user, I can keep my polls and come back later to access them.
* As an authenticated user, I can share my polls with my friends.
* As an authenticated user, I can see the aggregate results of my polls.
* As an authenticated user, I can delete polls that I decide I don't want anymore.
* As an authenticated user, I can create a poll with any number of possible items.
* As an unauthenticated or authenticated user, I can see and vote on everyone's polls.
* As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)
* As an authenticated user, if I don't like the options on a poll, I can create a newoption.

## Getting Started

Include a `.env` file in the `server` directory with the following environment variables.

```
PORT = 4000
DATABASE = 'mongodb://localhost/<DATABASE_NAME>'
SECRET = 'ThisIsATemporarySecretKey'
```

In the `client` directory with the follow this steps.

```
1. Open terminal in `client` directory
2. Type `npm install` to install packages mentioned in `pacakge.json` file.
3. Press `Enter` to install and wait untill installation completes.
```

To Run the peoject follow this steps.

```
1. Open `cmd` and run `mongod` command to start mongodb server
2. Open terminal in the project directory
3. Change directory to `online_e_voting_system/client` and Run `npm start`
4. Open other termial and change directory to `online_e_voting_system/server`
5 .Run `npm start`
6. Project will Run on 3000 port in browser and server will run on 4000 port
```
