import React from "react";
import { Link } from "react-router-dom";
import homepagedish from "./images/homepagedish.jpeg";

function HomePage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to Advait Kitchen</h1>
      <p>Authentic Maharashtrian & Indian Food</p>
      <p>Where every bite tells a flavorful tale!</p>
      <div>
      <img src={homepagedish} style={{ width: "350px", borderRadius: "1rem", margin: "2rem auto" }}/>
      </div>      
      <p>"Delicious homemade food, made with love and delivered fresh to your doorstep"</p>
      <div style={{ margin: "2rem 0" }}>
        <Link to="/menu">
          <button style={{ padding: "1rem 2rem", margin: "0 1rem", fontSize: "1rem", borderRadius: "6px", border: "none", background: "#333", color: "#fff", cursor: "pointer" }}>
            View Menu
          </button>
        </Link>
        <Link to="/gallery">
          <button style={{ padding: "1rem 2rem", margin: "0 1rem", fontSize: "1rem", borderRadius: "6px", border: "none", background: "#333", color: "#fff", cursor: "pointer" }}>
            View Gallery
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;