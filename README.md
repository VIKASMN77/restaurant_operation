The entire project is deployed successfully: https://restuarant-crud-operation-4.onrender.com/

Restaurant Management System - CRUD Operations

Project Description The Restaurant Management System is a full-stack web application designed to efficiently manage restaurant-related data. It supports Create, Read, Update, and Delete (CRUD) functionalities for managing restaurant information, such as name, type (cuisine), location, rating, and top_food. The project is aimed at simplifying restaurant management and enhancing operational efficiency.

Features Add Restaurant: Add new restaurant details, including name, type, location, rating, and top_food. View Restaurants: Display a list of all restaurants with their details. Update Restaurant: Edit restaurant information directly from the interface. Delete Restaurant: Remove a restaurant from the database. Responsive design ensures compatibility across devices.

Technologies Used Frontend: React Bootstrap (for styling)

Backend: Node.js Express.js

Database: MongoDB

Version Control: Git and GitHub

Setup Instructions Prerequisites: Node.js installed on your system. MongoDB server running locally or use MongoDB Atlas for cloud hosting.

Steps: Clone the repository: git clone https://github.com//.git

Navigate to the project directory: cd

Install dependencies: npm install

Set up a .env file in the root directory and add the following: PORT=5000 MONGO_URI=your_mongodb_connection_string

Start the development server: npm start

Access the application at http://localhost:5000. API Endpoints GET /restaurants - Fetch all restaurants. POST /restaurants - Add a new restaurant. PUT /restaurants/:id - Update an existing restaurant. DELETE /restaurants/:id - Delete a restaurant by ID.

Project Structure

├── frontend/ │ ├── src/ │ │ ├── components/ │ │ ├── pages/ │ │ └── App.js │ └── package.json ├── backend/ │ ├── models/ │ ├── controllers/ │ ├── routes/ │ └── server.js ├── .env ├── .gitignore ├── package.json └── README.md

Contributors Dhanush M Shushruth Gowda M B Vikas M N Vinay A S

Future Scope Add search functionality to filter restaurants by name, type, or rating. Implement customer feedback and review systems. Develop a mobile-friendly version of the application. Integrate third-party APIs for enhanced location-based services.
