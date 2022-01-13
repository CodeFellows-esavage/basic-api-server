# basic-api-server
Creating a basic-api-server to perform CRUD Operations on a database for code401 Lab 03

Deployment URL: NOT DEPLOYED ATM

![Data Flow](/UML.png)

## Installation
- to install run `git@github.com:eriksavage/basic-api-server.git`
- `cd` into basic-api-server
- run `npm install`

## Usage
- To start server run : `npm start`
- To test server run: `npm run test`

## Routes
-  GET `/food`, requires `name` query parameter: returns an object `{ name: namesent}`

## Features
- Error Handling
  - sends 404 if route or method is unavailable

## Testing
Verifies the following:
- Too be implemented