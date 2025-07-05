import React from "react";

const images = [
  { src: "/images/dish1.jpeg", caption: "Onion Pakoda/Kanda bhajji" },
  { src: "/images/dish2.jpeg", caption: "Kolhapuri Misal Pav" },
  { src: "/images/dish3.jpeg", caption: "Vada Pav" },
  { src: "/images/dish6.jpeg", caption: "Moon dal halwa" },
  { src: "/images/dish4.jpeg", caption: "Bhel" },
  { src: "/images/dish5.jpeg", caption: "Dahi vada" },
  { src: "/images/feedback1.jpeg", caption: "Housewarming party catering feedback" },
  { src: "/images/feedback5.jpeg", caption: "Marathi-Wedding catering feedback " },
  { src: "/images/feedback2.jpeg", caption: "Kids Birthday party catering feedback" },
  { src: "/images/feedback3.jpeg", caption: "Single order feedback" },
  { src: "/images/feedback4.jpeg", caption: "Single order feedback" }
  // Add more images as needed
];

function Gallery() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Gallery & Feedback</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
        {images.map((img, idx) => (
          <div key={idx} style={{ maxWidth: 250, textAlign: "center" }}>
            <img
              src={img.src}
              alt={img.caption}
              style={{ width: "100%", borderRadius: "8px", boxShadow: "0 2px 8px #ccc" }}
            />
            <div style={{ marginTop: "0.5rem", fontWeight: "bold" }}>{img.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;