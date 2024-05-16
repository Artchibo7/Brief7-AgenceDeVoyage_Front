"use client";

import "./page.css";
import { useEffect, useState } from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";
import VoyageDetail from "@/app/Components/VoyageDetails/VoyageDetail";

export default function voyage(props) {
  const [voyage, setVoyage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/voyage/" + props.params.voyageId
        );
        const data = await response.json();
        setVoyage(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <Navbar />
      {loading && !error && <div>Données en cours de chargement !</div>}
      {!loading && !error && voyage && (
        <VoyageDetail
          NomVoyage={voyage.NomVoyage}
          DateDepart={voyage.DateDepart}
          DateRetour={voyage.DateRetour}
          Description={voyage.Description}
          prix={voyage.prix}
          image={voyage.destination.image}
          voyageId={voyage.id}
        />
        
      )}
      {!loading && error && <div>Une erreur est survenue</div>}
      <Footer />
    </main>
  );
}
