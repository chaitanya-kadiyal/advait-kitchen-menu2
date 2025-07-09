import React, { useState } from "react";
import dish1 from './images/dish1.jpeg';
import dish2 from './images/dish2.jpeg';
import dish3 from './images/dish3.jpeg';
import dish4 from './images/dish4.jpeg';
import dish5 from './images/dish5.jpeg';
import dish6 from './images/dish6.jpeg';
import feedback1 from './images/feedback1.jpeg';
import feedback2 from './images/feedback2.jpeg';
import feedback3 from './images/feedback3.jpeg';
import feedback4 from './images/feedback4.jpeg';
import feedback5 from './images/feedback5.jpeg';

const images = [
  { src: dish1, caption: "Onion Pakoda/Kanda bhajji" },
  { src: dish2, caption: "Kolhapuri Misal Pav" },
  { src: dish3, caption: "Vada Pav" },
  { src: dish6, caption: "Moon dal halwa" },
  { src: dish4, caption: "Bhel" },
  { src: dish5, caption: "Dahi vada" },
  { src: feedback1, caption: "Housewarming party catering feedback" },
  { src: feedback5, caption: "Marathi-Wedding catering feedback " },
  { src: feedback2, caption: "Kids Birthday party catering feedback" },
  { src: feedback3, caption: "Single order feedback" },
  { src: feedback4, caption: "Single order feedback" }
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
            style={{ 
              width: 250, 
              height: 300, 
              textAlign: "center", 
              cursor: "pointer",
              display: "flex",
              flexDirection: "column"
            }}
            onClick={() => openPopup(img)}
          >
            <div style={{ 
              flex: 1, 
              overflow: "hidden", 
              borderRadius: "8px", 
              boxShadow: "0 2px 8px #ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <img
                src={img.src}
                alt={img.caption}
                style={{ 
                  width: "100%", 
                  height: "200px", 
                  objectFit: "cover", 
                  borderRadius: "8px"
                }}
              />
            </div>
            <div style={{ marginTop: "0.5rem", fontWeight: "bold", height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {img.caption}
            </div>
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
              style={{ 
                maxWidth: "90vw", 
                maxHeight: "80vh", 
                borderRadius: 8, 
                display: "block",
                objectFit: "contain"
              }}
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
