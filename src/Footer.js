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
        Open Friday,Saturday and Sundays Only
      </p>
      <p>
        Takeouts and Catering Orders, Price mentioned per Plate
      </p>
      <p>
        To place orders call, text, or WhatsApp:{" "}
        <a href="tel:612-735-2692">612-735-2692</a>
      </p>
       <p>
        WhatsApp:{" "}
        <a href="tel:901-602-7007">901-602-7007</a>
      </p>
      <p>
        <a href="sms:612-735-2692" style={{ marginRight: "1rem" }}>Text</a>
        <a href="https://wa.me/901-602-7007" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </p>
      <hr style={{ margin: "2rem 0", borderColor: "#eee" }} />
      <p style={{ fontSize: "0.9rem", color: "#888" }}>
        &copy; {new Date().getFullYear()} Advait Kitchen. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;