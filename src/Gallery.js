import React, { useState } from "react";

const images = [
  { src: "/images/dish1.jpeg", caption: "Onion Pakoda/Kanda bhajji" },
  { src: "/images/dish2.jpeg", caption: "Kolhapuri Misal Pav" },
  { src: "/images/dish3.jpeg", caption: "Vada Pav" },
  { src: "/images/dish6.jpeg", caption: "Moon dal halwa" },
  { src: "/images/dish4.jpeg", caption: "Bhel" },
  { src: "/images/dish5.jpeg", caption: "Dahi vada" },
  { src: "/images/dish7.jpeg", caption: "Dabeli" },
  { src: "/images/dish8.jpeg", caption: "Khaman Dhokala" },
  { src: "/images/dish9.jpeg", caption: "Dal and Rice" },
  { src: "/images/dish10.jpeg", caption: "Palak Pulav" },
  { src: "/images/dish11.jpeg", caption: "Shahi Paneer with Rice" },
  { src: "/images/feedback1.jpeg", caption: "Housewarming party catering feedback" },
  { src: "/images/feedback5.jpeg", caption: "Marathi-Wedding catering feedback " },
  { src: "/images/feedback2.jpeg", caption: "Kids Birthday party catering feedback" },
  { src: "/images/feedback3.jpeg", caption: "Single order feedback" },
  { src: "/images/feedback4.jpeg", caption: "Single order feedback" }
  // Add more images as needed
];

function Gallery() {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (img) => setPopupImage(img);
  const closePopup = () => setPopupImage(null);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Gallery & Feedback</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
        {images.map((img, idx) => (
          <div
            key={idx}
            style={{ maxWidth: 250, textAlign: "center", cursor: "pointer" }}
            onClick={() => openPopup(img)}
          >
            <img
              src={img.src}
              alt={img.caption}
              style={{ width: "100%", borderRadius: "8px", boxShadow: "0 2px 8px #ccc" }}
            />
            <div style={{ marginTop: "0.5rem", fontWeight: "bold" }}>{img.caption}</div>
          </div>
        ))}
      </div>

      {/* Popup overlay */}
      {popupImage && (
        <div
          onClick={closePopup}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}
            onClick={e => e.stopPropagation()}
          >
            <img
              src={popupImage.src}
              alt={popupImage.caption}
              style={{ maxWidth: "90vw", maxHeight: "80vh", borderRadius: 8, display: "block" }}
            />
            <div style={{ color: "#fff", textAlign: "center", marginTop: 12, fontSize: 18 }}>
              {popupImage.caption}
            </div>
            <button
              onClick={closePopup}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                background: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                fontSize: 20,
                cursor: "pointer",
                boxShadow: "0 2px 8px #0005"
              }}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;