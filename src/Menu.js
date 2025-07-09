import React from "react";
import menuData from "./menu.json";

// Helper function to format price with 2 decimal places and dollar sign
const formatPrice = (price) => {
  return `$${parseFloat(price).toFixed(2)}`;
};

const styles = {
  menuContainer: {
    maxWidth: 800,
    margin: "3rem auto",
    padding: "2rem",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
    fontFamily: "'Garamond', 'Georgia', serif"
  },
  menuHeader: {
    textAlign: "center",
    marginBottom: "3rem",
    position: "relative",
    paddingBottom: "15px"
  },
  menuTitle: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "0.5rem",
    fontWeight: "600",
    letterSpacing: "1px"
  },
  menuSubtitle: {
    fontSize: "1rem",
    color: "#777",
    fontStyle: "italic",
    marginBottom: "1.5rem"
  },
  decorativeLine: {
    width: "60px",
    height: "3px",
    background: "linear-gradient(to right, #f3c622, #f87e30)",
    margin: "0 auto"
  },
  categoryContainer: {
    marginBottom: "3.5rem",
    position: "relative"
  },
  categoryTitle: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "1.5rem",
    fontWeight: "500",
    letterSpacing: "0.5px",
    paddingBottom: "10px",
    borderBottom: "2px solid #f3c622",
    display: "inline-block"
  },
  menuItemsList: {
    listStyle: "none",
    padding: 0
  },
  menuItem: {
    marginBottom: "1.8rem",
    paddingBottom: "1.8rem",
    borderBottom: "1px dashed #ddd",
    transition: "all 0.3s ease"
  },
  menuItemHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px"
  },
  menuItemName: {
    fontWeight: "600",
    fontSize: "1.2rem",
    color: "#222"
  },
  menuItemPrice: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    color: "#f87e30",
    backgroundColor: "#fff8e8",
    padding: "4px 12px",
    borderRadius: "20px"
  },
  menuItemDescription: {
    color: "#555",
    fontSize: "1rem",
    lineHeight: "1.6",
    fontStyle: "italic"
  }
};

function Menu() {
  return (
    <div style={styles.menuContainer}>
      <div style={styles.menuHeader}>
        <h1 style={styles.menuTitle}>Our Menu</h1>
        <p style={styles.menuSubtitle}>Authentic homemade delicacies</p>
        <div style={styles.decorativeLine}></div>
      </div>
      
      {menuData.map((category, catIdx) => (
        <div key={catIdx} style={styles.categoryContainer}>
          <h2 style={styles.categoryTitle}>
            {category.category}
          </h2>
          <ul style={styles.menuItemsList}>
            {category.items.map((item, idx) => (
              <li
                key={idx}
                style={styles.menuItem}
              >
                <div style={styles.menuItemHeader}>
                  <span style={styles.menuItemName}>{item.name}</span>
                  <span style={styles.menuItemPrice}>{formatPrice(item.price)}</span>
                </div>
                <div style={styles.menuItemDescription}>
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
