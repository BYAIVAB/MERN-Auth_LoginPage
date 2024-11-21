 MERN Auth Login Page

This project is a **Login Authentication System** built using the **MERN Stack (MongoDB, Express, React, Node.js)**. 

## Features ->

- User Authentication: Login, Sign-up, and Logout.
- Email Verification.
- Secure password hashing with **bcrypt**.
- Token-based authentication using **JWT (JSON Web Tokens)**.
- Frontend styled with **TailwindCSS**.
- Real-time error handling and user feedback with **React Hot Toast**.
- State management using **Zustand**.

## Tech Stack ->
# Frontend -
- **React** (UI library)
- **TailwindCSS** (CSS framework)
- **Vite** (Build tool)
- **Axios** (HTTP client)
- **Framer Motion** (Animations)
- **Lucide-React** (Icon library)
- **React Router DOM** (Routing)

# Backend -
- **Node.js** (Runtime)
- **Express** (Framework)
- **MongoDB** (Database)
- **JWT** (Authentication)
- **bcrypt** (Password hashing)
- 
### Installation ->

1. Install dependencies:

   #### Backend
   ```bash
   cd backend
   npm install
   ```

   #### Frontend
   ```bash
   cd frontend
   npm install
   ```

2. Create a `.env` file in both the backend and frontend directories:

   #### Backend `.env`
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

   #### Frontend `.env`
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   ```

3. Start the application:

   #### Backend
   ```bash
   cd backend
   npm start
   ```

   #### Frontend
   ```bash
   cd frontend
   npm run dev
   ```

## Scripts ->

# Backend -
- `npm start`: Start the backend server.

# Frontend -
- `npm run dev`: Run the frontend in development mode.
