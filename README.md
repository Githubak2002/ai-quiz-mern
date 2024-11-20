# QuizifyAI

QuizifyAI — a quiz web application built using the MERN stack (MongoDB, Express, React, Node.js) with advanced JWT authentication and AI-generated quizzes through the Google Gemini API. This application allows users to take quizzes on various topics, generate quizzes using AI, and offers a secure and user-friendly experience.

## Features

- **Advanced JWT Authentication**: Secure user authentication with features such as email verification and password recovery.
- **Take Quizzes on Various Topics**: Explore a wide range of topics and test your knowledge.
- **AI-Generated Quizzes**: Generate quizzes on any topic using the Google Gemini API for an engaging learning experience.
- **Beginner Friendly**: Easy to use interface suitable for all users, regardless of technical expertise.
- **Fully Secure**: All user data is handled securely with best practices in mind.

### Functionality
- **Email Verification**: Confirmation emails sent upon signup.
- **Error Handling**: Informative messages for various scenarios.
- **Forgot Password & Reset**: Password recovery via email.
- **Signup, Login, Logout Endpoints**: RESTful API for user management.
- **Check Auth Endpoint**: Verifies user authentication.
- **Sending Verification Emails**: Automated verification process.

### Frontend Setup
- **User-Friendly UI**: Responsive signup and login pages.
- **Signup Logic**: User registration with validation.
- **Email Verification Integration**: Activation link sent to users.
- **Protected Routes**: Access restriction for authenticated users.
- **Secure Login**: JWT-based session management.
- **Forgot Password Handling**: UI for password reset requests.

### Backend Setup
- **MERN Stack**: Node.js and Express for API handling.
- **MongoDB**: Secure storage for user and quiz data.
- **JWT Authentication**: Secure access to protected routes.
- **RESTful API Development**: Smooth communication between frontend and backend.
- **Google Gemini API Integration**: AI-generated quizzes on user-defined topics.



## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **AI Integration**: Google Gemini API
- **Zustand** (State Management)


## NPM Package Details

- **cookie-parser**: Middleware to parse cookies
- **jsonwebtoken**: For generating and verifying JSON Web Tokens (JWTs)
- **dotenv**: For managing environment variables
- **express**: A web framework for Node.js
- **bcryptjs**: For hashing passwords
- **mongoose**: An Object Data Modeling (ODM) library for MongoDB
- **nodemon**: Automatically restarts the server when file changes are detected
- **mailtrap**: For testing email sending (if using Mailtrap)
- **crypto**: Built-in package for cryptographic functions
  - `randomInt(10, 20)`
  - `randomBytes(20).toString('hex')`

---

## JWT Methods

1. **`jwt.sign(payload, secretOrPrivateKey, options)`**
   - **Purpose**: Create a new JWT.
   - **Parameters**:
     - `payload`: Data to include in the token (e.g., user ID, roles).
     - `secretOrPrivateKey`: Secret key to sign the token.
     - `options`: Optional settings (e.g., expiration time).
   - **Usage**: Generate a token to send to clients or store for later use.
   - **Example**:
     ```javascript
     const token = jwt.sign({ userId: '1234' }, 'your-secret-key', { expiresIn: '1h' });
     ```

2. **`jwt.verify(token, secretOrPublicKey, options, callback)`**
   - **Purpose**: Check if a JWT is valid and decode it.
   - **Parameters**:
     - `token`: The JWT to verify.
     - `secretOrPublicKey`: Key used to sign the token for verification.
     - `options`: Optional settings (e.g., expected audience).
     - `callback`: Function called with verification result or error.
   - **Usage**: Verify token validity and extract payload if valid.
   - **Example**:
     ```javascript
     jwt.verify(token, 'your-secret-key', (err, decoded) => {
       if (err) {
         console.error('Invalid token');
       } else {
         console.log('Decoded payload:', decoded);
       }
     });
     ```

3. **`jwt.decode(token, options)`**
   - **Purpose**: Decode a JWT without verifying its signature.
   - **Parameters**:
     - `token`: The JWT to decode.
     - `options`: Optional settings (e.g., whether to get header or payload).
   - **Usage**: Extract and view token payload without validation. Useful for debugging.
   - **Example**:
     ```javascript
     const decoded = jwt.decode(token);
     console.log('Decoded payload:', decoded);
     ```

---

# Zustand Store Usage

Zustand is a small, fast, and scalable state management solution for React applications. It provides a simple API for managing global state with minimal boilerplate.

## Key Points

### Creating a Store
To create a global state store, use the `create` function from Zustand:
```javascript
import create from 'zustand';

const useCountStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
}));

```

### Reading a state
```javascript
const count = useCountStore((state) => state.count);
```

### Updating a state
Update the state using setState
```javascript
useCountStore.setState({ count: 0 });
```

Use "setState" when you want to update the state - Example -
```javascript
useAuthStore.setState({ forgotPassPopup: true });
```
  
Use the "selector function" when you want to read state values - Example - 
```javascript
const isVisible = useAuthStore((state) => state.forgotPassPopup);
```
<img width="1099" alt="QuizifyAI" src="https://github.com/user-attachments/assets/5d7ce235-1493-449e-81a7-a52a9fb2bb87">



