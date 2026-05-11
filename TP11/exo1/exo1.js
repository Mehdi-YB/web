"use strict";

let definitions = new Map();

definitions.set("html", {
    titre: "HTML",
    texte: "HTML sert à structurer le contenu d'une page web.",
    image: ""
});

definitions.set("css", {
    titre: "CSS",
    texte: "CSS sert à modifier l'apparence d'une page web.",
    image: ""
});

definitions.set("javascript", {
    titre: "JavaScript",
    texte: "JavaScript sert à rendre une page web dynamique.",
    image: ""
});

let mots = document.querySelectorAll(".mot-definition");

let popup = document.getElementById("popup");
let popupTitre = document.getElementById("popupTitre");
let popupTexte = document.getElementById("popupTexte");
let popupImage = document.getElementById("popupImage");

for (let i = 0; i < mots.length; i++) {

    mots[i].addEventListener("mouseover", function (event) {

        let mot = this.dataset.mot;
        let definition = definitions.get(mot);

        popupTitre.textContent = definition.titre;
        popupTexte.textContent = definition.texte;

        if (definition.image !== "") {
            popupImage.src = definition.image;
            popupImage.style.display = "block";
        } else {
            popupImage.style.display = "none";
        }

        popup.style.left = event.pageX + 15 + "px";
        popup.style.top = event.pageY + 15 + "px";

        popup.classList.remove("cache");

    });

    mots[i].addEventListener("mouseout", function () {
        popup.classList.add("cache");
    });

}