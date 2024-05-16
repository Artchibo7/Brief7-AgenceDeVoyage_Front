"use client";

import Reservation from "@/app/Reservation/page";
import "./voyageDetails.css";
import Image from "next/image";

export default function VoyageDetail(props) {
  const {
    NomVoyage,
    Description,
    DateDepart,
    DateRetour,
    prix,
    voyageId,
    image,
  } = props;
  return (
    <>
    <div className="container mt-5 mb-5 text-center d-flex justify-content-center">
        <div className="card">
          {props.image && (
            <div className="CetteImage">
              <img
                className="CetteImage"
                src={image}
                alt={"Image de " + NomVoyage}
              />
            </div>
          )}
          <div className="card-body">
            <h5
              className="card-title"
              style={{ textAlign: "center", color: "red" }}
            >
              Détails du voyage
            </h5>
            <p className="voyage-details-name">{NomVoyage}</p>
            <p className="voyage-details-description">{Description}</p>
            <p className="voyage-details-date">Date de depart {DateDepart}</p>
            <p className="voyage-details-date">Date de retour {DateRetour}</p>
            <p className="voyage-details-prix">Le prix {prix} €</p>

          </div>
        </div>
      <Reservation voyageId={voyageId} />
    </div>
    </>
  );
}
