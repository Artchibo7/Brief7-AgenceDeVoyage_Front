"use  client";

import "./carteVoyage.css";
import Image from "next/image";

export default function carteVoyage(props) {
  const { image, NomVoyage } = props;
  return (
    <div className="carteVoyage">
      <div className="carteVoyage-information">
        <p className="carteVoyage-description">{NomVoyage}</p>
      </div>
      {image && (
        <div
          className="carteImg"
          width={250}
          height={250}
          style={{ 
            backgroundImage: `url(${image})`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
          
          }}
          alt={"Image de " + NomVoyage}
        ></div>
      )}
    </div>
  );
}
