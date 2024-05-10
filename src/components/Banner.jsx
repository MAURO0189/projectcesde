// eslint-disable-next-line no-unused-vars
import React from "react";
import ImgMain from "../../public/imgmain.png";

function Banner() {
  return (
    <>
      <img
        src={ImgMain}
        alt="Aqui esta el banner"
        style={{ maxWidth: "1280px", maxHeight: "900px" }}
      />
    </>
  );
}

export default Banner;
