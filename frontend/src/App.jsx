import { Route, Routes, Navigate } from "react-router-dom"; // Added Navigate
import FloatingShape from "./components/FloatingShape";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import DashboardPage from "./pages/DashboardPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import { useAuthStore } from "./store/authStore";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";


// Protected routes that require authentication
const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} />;
  }

  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace={true} />;
  }

  return children;
};

// Redirecting authenticated users to the homepage
const RedirectingAuthenticatedUsers = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to bg-green-600 flex items-center justify-center relative overflow-hidden">
      <FloatingShape color="bg-green-500" size="w-64 h-64" top="5%" left="10%" delay={0} />
      <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" left="80%" delay={5} />
      <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="10%" delay={2} />

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <DashboardPage />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/signup"
          element={
            <RedirectingAuthenticatedUsers>
              <SignUpPage />
            </RedirectingAuthenticatedUsers>
          }
        />

        <Route
          path="/login"
          element={
            <RedirectingAuthenticatedUsers>
              <LoginPage />
            </RedirectingAuthenticatedUsers>
          }
        />

        <Route path="/verify-email" element={<EmailVerificationPage />} />

        <Route
          path="/forgot-password"
          element={
            <RedirectingAuthenticatedUsers>
              <ForgetPasswordPage />
            </RedirectingAuthenticatedUsers>}
        />

        <Route
          path="/reset-password/:token"
          element={
            <RedirectingAuthenticatedUsers>
              <ResetPasswordPage />
            </RedirectingAuthenticatedUsers>}
        />

      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
