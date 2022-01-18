import React from "react";

export default function ImageUpload({ image, setImage, imageStyle }) {
  return (
    <div className="main-image">
      {image && (
        <div>
          <div style={imageStyle}>
            <img
              alt="not found"
              height="700px"
              src={URL.createObjectURL(image)}
            />
          </div>
          <button onClick={() => setImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
    </div>
  );
}
