## Recipe Scocial App with User Authentication

This project is a Recipe Manager web application that allows users to create, post, and save recipes. The application is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack and utilizes user authentication for secure access. The frontend is developed with React.js and styled using Tailwind CSS, providing a responsive and user-friendly interface.

### Features:

**1. User Authentication:** 
The app includes a user authentication system that allows users to sign up and log in securely. Passwords are encrypted using bcrypt to ensure data privacy.

**2. Create and Post Recipes:** 
Users can create and post their own recipes, providing details such as recipe name, ingredients, instructions, cooking time, and an image URL.

**3. Save Recipes:** 
Logged-in users can save recipes to their profile for future reference. Saved recipes are associated with the user's account.

**4. View Recipes:** 
The app features a home page where users can view a collection of recipes created by various users. Each recipe includes its details and an option to save the recipe if the user is logged in.

**5. Saved Recipes Page:** 
A separate page allows users to view their saved recipes, displaying the recipe details they've chosen to save.

**6. Tailwind CSS:** 
The application is designed using the Tailwind CSS framework.

### Technologies Used:

- **Frontend:** React.js for building user interfaces
- **Styling:** Tailwind CSS for responsive and modern styling
- **Backend:** Node.js and Express.js for server-side logic
- **Database:** MongoDB for data storage
- **User Authentication:** bcrypt for password hashing, JWT (JSON Web Tokens) for secure user authentication
- **Data Fetching:** Axios for making HTTP requests

### Usage:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies for the frontend: `cd frontend && npm install`
4. Install dependencies for the backend: `cd backend && npm install`
5. Start the backend server: `npm start` in the `backend` directory
6. Start the frontend development server: `npm start` in the `frontend` directory
7. Access the app in your web browser at `http://localhost:3000`

### Contributor: Priyanku Gogoi

**Note:**

Before running the project, make sure to create a `.env` file in the backend directory with necessary environment variables (e.g., `DB_URL`, `SECRET_KEY`) for the MongoDB connection and user authentication.
