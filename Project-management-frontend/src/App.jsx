import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignUp from "./Login";
import HomePage from "./HomePage";
import StudentDetails from "./StudentDetails";

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
          {/* Student Details Route */}
          <Route
            path="/studentdetails"
            element={
              <StudentDetails
                userId={userId}
                onComplete={() => setUserId(null)}
              />
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
