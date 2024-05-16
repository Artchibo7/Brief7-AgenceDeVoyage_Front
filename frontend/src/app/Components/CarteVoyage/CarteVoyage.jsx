"use  client";

import "./carteVoyage.css";
import Image from "next/image";

export default function carteVoyage(props) {
  // const { image } = props;
  return (
    <div className="carteVoyage">
      <div className="carteVoyage-information">
        <p className="carteVoyage-name">{props.NomVoyage}</p>
        <p className="carteVoyage-description">{props.Description}</p>
      </div>
      {props.image && (
        <Image
          className="carteVoyage-image"
          width={250}
          height={250}
          src={props.image}
          alt={"Image de " + props.name}
        />
      )}
    </div>
  );
}
