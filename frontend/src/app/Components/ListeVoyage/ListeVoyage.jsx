"use client"

import CarteVoyage from "../CarteVoyage/CarteVoyage";
import "./listeVoyage.css";
import Link from "next/link";

export default function ListeVoyage(props) {
  const { voyages } = props;
  return (
    <>
      <p>{props.NomVoyage}</p>
    <div>
      {voyages && (
        <ul className="voyages-list">
          {voyages.map((voyage, index) => (
            <Link key={index} href={"/voyages/" + voyage.id}>
              <li>
                <CarteVoyage
                  NomVoyage={voyage.NomVoyage}
                  prix={voyage.prix + " €"}
                  DateDepart={voyage.destination.DateDepart}
                  DateRetour={voyage.destination.DateRetour}
                  Description={voyage.destination.Description}
                  NomPays={voyage.destination.NomPays}
                  NomVille={voyage.destination.NomVille}
                  image={voyage.destination.image}
                  />
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
      </>
  );
}
