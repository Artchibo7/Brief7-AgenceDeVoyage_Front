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
        <div className="card">
          {props.image && (
            <img
              className="voyage-details-image"
              width={250}
              height={250}
              src={voyageId.Destination.image}
              alt={"Image de " + NomVoyage}
            />
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
            <a href="/destination" className="btn btn-primary">
              Retour vers les destinations
            </a>
          </div>
        </div>
      <Reservation voyageId={voyageId} />
    </>
  );
}
