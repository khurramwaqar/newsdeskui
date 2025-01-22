import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Signup from "./auth/Signup";

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthRoute = location.pathname === "/auth/signup";

  return (
    <div className="flex">
      {!isAuthRoute && <Sidebar />}
      <div className="flex-1">

        <div>{children}</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
