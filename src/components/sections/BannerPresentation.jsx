import React from "react";

export default function BannerPresentation() {
  return (
    <div className="banner-presentation__wrapper">
      <p className="title">
        Embrace the Urban Vibes with Nocta's Latest Collection
      </p>
      <p className="text-content">
        At Nocta, we believe in more than just clothing; we believe in a
        lifestyle. Our brand is a testament to the restless spirit of the night,
        where creativity thrives and boundaries fade.
      </p>
      <div className="motion-circle">
        <svg viewBox="0 0 200 200">
          <path
            d="M0 100a100 100 0 1 0 200 0a100 100 0 1 0 -200 0"
            id="path-circle"
            fill="none"
          ></path>
          <text fill="#ff3b00">
            <textPath href="#path-circle" textLength="610">
            - Nocta - Redefining Streetwear
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
