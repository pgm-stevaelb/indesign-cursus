import React from "react";
import Image from '@theme/IdealImage';

export default function TwoColumns({children, imgLink, imgAlt, imgPos}) {
  return (
    <div style={{
      display: "flex",
    }}>
      <Image img={require(imgLink)} alt={imgAlt} />
      {children}
    </div>
  );
}