import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Gallery from "./Gallery";
import Menu from "./Menu";
import Footer from "./Footer";

// 404 Not Found component
function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist or was moved.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <nav style={{ padding: "1rem", background: "#333" }}>
          <Link to="/" style={{ color: "#fff", marginRight: "2rem", textDecoration: "none", fontWeight: "bold" }}>
            Home
          </Link>
          <Link to="/gallery" style={{ color: "#fff", marginRight: "2rem", textDecoration: "none", fontWeight: "bold" }}>
            Gallery
          </Link>
          <Link to="/menu" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
            Menu
          </Link>
        </nav>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/menu" element={<Menu />} />
            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;