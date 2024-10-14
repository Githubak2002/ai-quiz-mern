import {BrowserRouter as Router,Route,Routes, Navigate} from "react-router-dom";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Navbar from "./Components/NavBar";
import ResetPass from "./Pages/ResetPass"

import { Toaster } from 'react-hot-toast';
import Footer from "./Components/Footer";
import Profile from "./Pages/Profile";
import { useAuthStore } from "../store/authStore";
import { Children, useEffect } from "react";
import Quiz from "./Pages/Quiz";
import MainQuizzSection from "./Pages/MainQuizzSection";
import GenerateQuizWithAI from "./Pages/GenerateQuizWithAI";

function App() {

  const {user, checkAuth, error} = useAuthStore();

  useEffect(() => {
    checkAuth();
  },[checkAuth])
  
  // console.log("error → ",error);
  // console.log("user → ",user);

  // === if user is login ===
  const RedirectToHome = ({children}) => {
    const {isAuthenticated} = useAuthStore();
    if(isAuthenticated)
      return <Navigate to='/' replace />
    return children;
  }

  // === is user authenticated ===
  const ProtectedRoute = ({children}) => {
    const {isAuthenticated} = useAuthStore();
    if(!isAuthenticated)
      return <Navigate to='/login' replace />
    return children;
  }

  // === is user verified ===
  const ProtectedRouteVerified = ({children}) => {
    const {isUserVerified} = useAuthStore();
    if(!isUserVerified)
      return <Navigate to='/profile' replace />
    return children;
  }




  return (
    <section className="mx-auto max-w-[1440px]">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={
            <RedirectToHome>
              <Signup />
            </RedirectToHome>
            } />
          <Route path="/login" element={
            <RedirectToHome>
              <Login />
            </RedirectToHome>
            } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute> 
            } />

          {/* <Route path="/reset-password" element={<ResetPass />} /> */}
          <Route path="/reset-password/:token" element={<ResetPass />} />

          {/* ============= QUIZ ============= */}

          <Route path="/allquiz" element={
            <ProtectedRoute>
              <MainQuizzSection />
            </ProtectedRoute> 
            } />


          <Route path="/quiz-with-ai" element={
            <ProtectedRouteVerified>
              <GenerateQuizWithAI />
            </ProtectedRouteVerified> 
          } />

          {/* <Route path="/quiz-with-ai" element={<GenerateQuizWithAI />} /> */}
          {/* <Route path="/allquiz" element={<MainQuizzSection />} /> */}
          {/* <Route path="/quiz" element={<Quiz />} /> */}

          {/* ==== all other routes will naviagte to home page (*) ==== */}
          <Route path="*" element={<Navigate to="/" replace />} />
          
        </Routes>
        <Footer />
      </Router>
    
      <Toaster 
      toastOptions={{
        className: ' text-xs sm:text-xs',
      }}
      />
    </section>
  )
}

export default App
