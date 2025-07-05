import React from "react";
import menuData from "./menu.json";

function Menu() {
  return (
    <div style={{ maxWidth: 700, margin: "2rem auto", padding: "1rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Our Menu</h1>
      {menuData.map((category, catIdx) => (
        <div key={catIdx} style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ borderBottom: "2px solid #eee", paddingBottom: "0.5rem", color: "#333" }}>
            {category.category}
          </h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {category.items.map((item, idx) => (
              <li
                key={idx}
                style={{
                  marginBottom: "1.5rem",
                  borderBottom: "1px solid #eee",
                  paddingBottom: "1rem"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{item.name}</span>
                  <span style={{ fontWeight: "bold", color: "#333" }}>{item.price}</span>
                </div>
                <div style={{ color: "#666", fontSize: "0.96rem", marginTop: "0.5rem" }}>
                  {item.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Menu;