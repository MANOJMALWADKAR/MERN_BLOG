# install React and Tailwind CSS

# Create Pages and Routes

# Header Section

# Create and Run Server

-- npm init -y(in Root Directory) creates package.json file
-- npm i express
-- create index.js file in api folder(in Root Directory)
-- npm i nodemon(for live server running)

# Connect to Database

-- npm i mongoose (creates a connection between MongoDB and the Node.js JavaScript runtime environment. It provides a straightforward, schema-based solution to model application data.)

-- npm i dotenv( keep passwords, API keys, and other sensitive data out of your code.)

-- dotenv.config() (configure .env file before use of process.env.filename )

-- Sign in to mongoDB
-- Create Database user
-- Add a connection IP Address
-- copy connection string and add it in mongoose.connect(process.env.MONOGO_CONNECTION_KEY)

# Create User Modal

-- User.model.js
// Define the user schema
// Create the user model from the schema

# create test API

-- user.routes.js
// Creates user Routes

-- user.controoler.js
// here all logic functions related api comes here

# Create SignUp API Route

-- create auth.route.js and add route to it
(router.post('/signip',signup))

-- create auth.controller.js
// here add logic function for signup functionality

-- npm i bcryptjs -- hash passsword
// const hashPassword = bcryptjs.hashSync(password, 10)

# Add Middleware and function to handle error

-- error.js
-- middleware
//app.use((err, req, res, next) => {
//logic
})

# Desing UI For SignUp

# Add Functionality to SignUp Page

-- first read the data from user input field(using onChange())
-- store the into State
-- Make request to Backend By sending user data to Signup API Route
-- errorMessage and isLoading state add to it
