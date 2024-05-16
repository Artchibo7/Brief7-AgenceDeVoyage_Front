"use client";

import Reservation from "@/app/Reservation/page";
import Image from "next/image";

export default function VoyageDetail(props) {

    const {NomVoyage, Description, DateDepart, DateRetour, prix, image} = props;
  return (
    <>
    <div className="voyage-details">
      {props.image && (
          <img
          className="voyage-details-image"
          width={250}
          height={250}
          src={voyage.Destination.image}
          alt={"Image de " + NomVoyage}
          />
        )}
      <div className="voyage-details-information">
        <p className="voyage-details-name">{NomVoyage}</p>
        <p className="voyage-details-description">{Description}</p>
        <p className="voyage-details-date">{DateDepart}</p>
        <p className="voyage-details-date">{DateRetour}</p>
        <p className="voyage-details-prix">{prix}</p>
      </div>
    </div>
    <Reservation />
        </>
  );
}