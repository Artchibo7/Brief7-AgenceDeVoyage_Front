"use client";

import "./voyageDetails.css";
import Image from "next/image";

export default function VoyageDetails(props) {
  return (
    <div className="voyage-details">
      {props.image && (
        <Image
          className="voyage-details-image"
          width={250}
          height={250}
          src={props.image}
          alt={"Image de " + props.name}
        />
      )}
      <div className="voyage-details-information">
        <p className="voyage-details-name">{props.NomVoyage}</p>
        <p className="voyage-details-description">{props.Description}</p>
        <p className="voyage-details-date">{props.DateDepart}</p>
        <p className="voyage-details-date">{props.DateRetour}</p>
        <p className="voyage-details-prix">{props.prix}</p>
      </div>
    </div>
  );
}
