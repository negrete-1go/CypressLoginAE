# CypressLoginAE
This is a Cypres Framework implementing POM and Cucumber for a Ecommerce

# CypressLoginDemo
This is a Cypress Framework using page object model

### Before to start make sure you have the following installed on your local machine:
[Node.js]
[npm]
[VisualStudioCode] 
[Git]


### Instalation

### 1. Clone the repository 

git clone https://github.com/negrete-1go/CypressLoginAE.git
cd CypressLoginAE

### 2. Install Dependencies

npm install

### 3. Fixture folder usually should be ignore to avoid security leaks but for testing purposses to show the framework it was upload it to the repository

{
"user": "<your_user>", 
"password": "<your_password>" 
}


### 5 Run Login Feature throught cypress Test Runner 

npx cypress open  

This will launch the Cypress test runner, where you can select the login feature file to run test interactively

### OR run the next command to see it in headless mode

npx cypress run