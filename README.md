# Todo List API Node MySQL
Simple Todo List API with Node and Sequelize.

## Installation Steps
To use this application you must have MySQL and Yarn installed in your machine.

### 1. Install Dependencies 
To download all dependencies, go to the project root directory and execute in your terminal:

    yarn


### 2. Create Database

    CREATE DATABASE todo_node_sequelize;
    

### 3. Create Tables
To create the tables, go to the project root directory and execute in your terminal:

    yarn sequelize db:migrate
    

### 4. Environment configuration
Create a *.env* file in the project root directory and change the values according to your MySQL configurations:

    DB_HOST=localhost
    DB_USER=username
    DB_PASS=password
    DB_DATABASE=todo_node_sequelize


### 5. Run the application
To run the application, go to the project root directory and execute in your terminal:

    yarn dev

#### The application is running! Enjoy it!