// eslint-disable-next-line no-unused-vars
import React from "react";
import ImgMain from "../../public/banner0.png";

function Banner() {
  return (
    <>
      <img
        src={ImgMain}
        alt="Aqui esta el banner"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </>
  );
}

export default Banner;
