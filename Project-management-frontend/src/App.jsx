import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import LoginSignUp from "./Login";
import HomePage from "./HomePage";
import ProfilePage from "./profile"; // Renamed to match the import

function App() {
  const [userId, setUserId] = useState(null); // Tracks the logged-in user's ID

  return (
    <Router>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Routes>
          {/* Default Route */}
          <Route
            path="/"
            element={
              <LoginSignUp onLoginSuccess={(id) => setUserId(id)} />
            }
          />
          {/* Home Route */}
          <Route
            path="/home"
            element={
              userId ? (
                <HomePage userId={userId} />
              ) : (
                <div className="text-center">Please log in to access this page.</div>
              )
            }
          />
          {/* Profile Route */}
          <Route
            path="/profile/:userId"
            element={<ProfileWrapper />}
          />
        </Routes>
      </div>
    </Router>
  );
}

// Wrapper to extract `userId` from URL and pass it to ProfilePage
function ProfileWrapper() {
  const { userId } = useParams();
  return <ProfilePage userId={parseInt(userId, 10)} />;
}

export default App;
