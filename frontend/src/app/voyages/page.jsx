"use client";

import "./page.css";
import { useEffect, useState } from "react";
import Navbar from "./../Components/Navbar/Navbar";
import ListeVoyage from "./../Components/ListeVoyage/ListeVoyage";
import Footer from "./../Components/Footer/Footer";

export default function Voyages() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [voyage, setVoyage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/voyages"
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
      {!loading && !error && voyage && <ListeVoyage voyages={voyage} />}
      {!loading && error && <div>Une erreur est survenue</div>}
     
      <Footer />
    </main>
  );
}
