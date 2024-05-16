"use client";

import Navbar from "../Components/Navbar/Navbar";
import "./reservation.css";
import React, { useState } from "react";
import Footer from "../Components/Footer/Footer";

function Reservation() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      telephone: formData.telephone,
      statut: {id: 1},
      voyage: {id: 3}
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/reservation/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        alert('Message envoyé !');
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
        });
      } else {
        console.error('Erreur en envoyant le formulaire de réservation');
      }
    } catch (error) {
      console.error('Erreur en envoyant le formulaire de réservation ', error);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex">
          <label>
            <input
              className="input"
              type="text"
              placeholder=""
              required="Le nom est obligatoire"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
            />
            <span>Nom</span>
          </label>

          <label>
            <input
              className="input"
              type="text"
              placeholder=""
              required="le prénom est obligatoire"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
            />
            <span>Prénom</span>
          </label>
        </div>

        <label>
          <input
            className="input"
            type="email"
            placeholder=""
            required="Veillez entrer une adresse email valide"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            className="input"
            placeholder=""
            type="tel"
            required="Veuillez entrer un numéro de téléphone valide"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
          />
          <span>Téléphone</span>
        </label>

        <button type="submit" className="fancy">
          <span className="top-key"></span>
          <span className="text">Envoyer</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </form>
    </>
  );
}

export default Reservation;
