"use strict";

let boutonCalendrier = document.getElementById("genererCalendrier");
let zoneCalendrier = document.getElementById("zoneCalendrier");

boutonCalendrier.addEventListener("click", function () {

    let premierJour = parseInt(document.getElementById("premierJour").value);
    let mois = parseInt(document.getElementById("mois").value);
    let annee = parseInt(document.getElementById("annee").value);
    let taille = document.getElementById("taille").value;
    let couleurTitre = document.getElementById("couleurTitre").value;
    let couleurCase = document.getElementById("couleurCase").value;

    if (isNaN(premierJour) || premierJour < 1 || premierJour > 7) {
        alert("Le premier jour doit être entre 1 et 7.");
    } else if (isNaN(mois) || mois < 1 || mois > 12) {
        alert("Le mois doit être entre 1 et 12.");
    } else if (isNaN(annee) || annee < 1) {
        alert("L'année doit être positive.");
    } else {
        zoneCalendrier.innerHTML = calendrier(premierJour, mois, annee, taille, couleurTitre, couleurCase);
    }

});

function calendrier(premierJour, mois, annee, taille, couleurTitre, couleurCase) {

    let joursSemaine = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

    let nomsMois = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    let nombreJours = new Date(annee, mois, 0).getDate();

    let jour = 1;

    let html = "";

    html += `<h2>${nomsMois[mois - 1]} ${annee}</h2>`;

    html += `<table class="${taille}">`;

    html += "<tr>";

    for (let i = 0; i < joursSemaine.length; i++) {
        html += `<th style="background-color:${couleurTitre};">${joursSemaine[i]}</th>`;
    }

    html += "</tr>";

    html += "<tr>";

    for (let i = 1; i < premierJour; i++) {
        html += `<td style="background-color:${couleurCase};"></td>`;
    }

    for (let i = premierJour; i <= 7; i++) {
        html += `<td style="background-color:${couleurCase};">${jour}</td>`;
        jour++;
    }

    html += "</tr>";

    while (jour <= nombreJours) {

        html += "<tr>";

        for (let i = 1; i <= 7; i++) {

            if (jour <= nombreJours) {
                html += `<td style="background-color:${couleurCase};">${jour}</td>`;
                jour++;
            } else {
                html += `<td style="background-color:${couleurCase};"></td>`;
            }

        }

        html += "</tr>";

    }

    html += "</table>";

    return html;
}

zoneCalendrier.innerHTML = calendrier(1, 4, 2024, "moyen", "#3498db", "#ffffff");