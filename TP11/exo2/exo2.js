"use strict";

let formulaire = document.getElementById("formulaireVisite");

let tableauVisiteurs = document.getElementById("tableauVisiteurs");

formulaire.addEventListener("submit", function (event) {

    event.preventDefault();

    let nom = document.getElementById("nom").value;

    let prenom = document.getElementById("prenom").value;

    let etude = document.getElementById("etude").value;

    if (nom === "" || prenom === "" || etude === "") {

        alert("Veuillez remplir tous les champs.");

    } else {

        let ligne = document.createElement("tr");

        ligne.innerHTML = `
            <td>${nom}</td>
            <td>${prenom}</td>
            <td>${etude}</td>
        `;

        tableauVisiteurs.appendChild(ligne);

        formulaire.reset();

    }

});