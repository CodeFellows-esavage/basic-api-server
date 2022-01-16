# basic-api-server
Creating a basic-api-server to perform CRUD Operations on a database for code401 Lab 03

- Developed By: Erik Savage

Deployment URL: [https://esavage-basic-api-server.herokuapp.com](https://esavage-basic-api-server.herokuapp.com/)

![Data Flow](/UML.png)

## Installation
- to install run `git@github.com:eriksavage/basic-api-server.git`
- `cd` into basic-api-server
- run `npm install`

## Usage
- To start server run : `npm start`
- To test server run: `npm run test`

## Models

### Cat
```
'Cat', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}
```

### Food
```
'Food', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
  },
  healthy: {
    type: DataTypes.BOOLEAN,
  },
}
```

## Routes

### Cat
-  POST `/cat`, requires a cat object: returns created cat object from database
-  GET `/cat`, returns an array of all cat objects entered in the database
-  GET `/cat/:id`, requires database id returns a specific cat object entered in the database
-  POST `/cat/:id`, requires database id and a cat object: updates a specific cat object entered in the database
-  DELETE `/food/:id`, requires database id: deletes a specific food object from the database

### Food
-  POST `/food`, requires a food object: returns created food object from database
-  GET `/food`, returns an array of all food objects entered in the database
-  GET `/food/:id`, requires database id returns a specific food object entered in the database
-  POST `/food/:id`, requires database id and a food object: updates a specific food object entered in the database
-  DELETE `/food/:id`, requires database id: deletes a specific food object from the database

## Features
- Error Handling
  - sends 404 if route or method is unavailable

## Testing
Verifies the following:
- 404 on a bad route
- 404 on a bad method

The correct status codes and returned data for each REST route:
- Create a record using POST
- Read a list of records using GET
- Read a record using GET
- Update a record using PUT
- Destroy a record using DELETE

## Resources
- sequelize docs
- jest docs
- supertest docs
- http cats
- Code Fellows
- Daniel Jackson
- Kellen Linse