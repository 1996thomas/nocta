import React from "react";
import BannerPresentation from "./BannerPresentation";

export default function Presentation() {
  return (
    <div className="section">
      <BannerPresentation />
      <div className="presentation__wrapper">
        <div className="title">Unleash Your Inner Edge with Nocta Apparel.</div>
        <div className="text-scroll__wrapper">
          <p>
            Discover the allure of Nocta, where every stitch, every fabric, and
            every design detail is meticulously crafted to perfection
          </p>
        </div>
        <div className="presentation">
          <div className="image">
            <img src="/nocta/nocta-cover.jpeg" alt="" />
          </div>
          <div className="content">
            <p>Where Fashion Meets the Streets</p>
          </div>
        </div>
      </div>
    </div>
  );
}
