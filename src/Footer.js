import React from "react";

function Footer() {
  return (
    <footer style={{
      background: "#f9f9f9",
      padding: "2rem 0",
      textAlign: "center",
      borderTop: "1px solid #eee",
      marginTop: "2rem"
    }}>
      <h2>Contact Us</h2>
      <p>
        To place orders call, text, or WhatsApp:{" "}
        <a href="tel:1234567890">123-456-7890</a>
      </p>
      <p>
        <a href="sms:1234567890" style={{ marginRight: "1rem" }}>Text</a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </p>
      <hr style={{ margin: "2rem 0", borderColor: "#eee" }} />
      <p style={{ fontSize: "0.9rem", color: "#888" }}>
        &copy; {new Date().getFullYear()} Advait Kitchen. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;