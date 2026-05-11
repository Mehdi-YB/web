"use strict";

let dateEvenement = new Date("2027-01-05 00:00:00");

let compteRebours = document.getElementById("compteRebours");

function afficherCompteRebours() {

    let maintenant = new Date();

    let difference = dateEvenement - maintenant;

    if (difference <= 0) {

        compteRebours.textContent = "C'est ton anniversaire !";

    } else {

        let jours = Math.floor(difference / (1000 * 60 * 60 * 24));
        let heures = Math.floor((difference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((difference / (1000 * 60)) % 60);
        let secondes = Math.floor((difference / 1000) % 60);

        compteRebours.textContent =
            jours + " jours " +
            heures + " heures " +
            minutes + " minutes " +
            secondes + " secondes";

        setTimeout(afficherCompteRebours, 1000);

    }

}

afficherCompteRebours();