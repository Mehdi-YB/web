function calculerDevis() {

    let surface = parseFloat(document.getElementById("surface").value);
    let epaisseur = parseFloat(document.getElementById("epaisseur").value);

    let message = document.getElementById("message");
    let devis = document.getElementById("devis");
    let btnPdf = document.getElementById("btnPdf");

    if (
        isNaN(surface) ||
        isNaN(epaisseur) ||
        surface <= 0 ||
        epaisseur < 15 ||
        epaisseur > 35
    ) {
        message.innerHTML = "Erreur : la surface doit être positive et l'épaisseur doit être comprise entre 15 cm et 35 cm.";

        devis.style.display = "none";
        btnPdf.style.display = "none";
    }

    else {
            message.innerHTML = "";

            let epaisseurMetre = epaisseur / 100;
            let volume = surface * epaisseurMetre;

            let nbCamion = Math.ceil(volume / 9);
            let volumeFacture = nbCamion * 9;

            let cimentKg = volume * 350;
            let cimentTonnes = cimentKg / 1000;

            let prixBetonHT = volumeFacture * 91;
            let prixTransportHT = nbCamion * 140;

            let prixHT = prixBetonHT + prixTransportHT;
            let tva = prixHT * 0.20;
            let prixTTC = prixHT + tva;

            let numero = Math.floor(Math.random() * 10000);

            document.getElementById("numeroDevis").innerHTML = "N°" + numero;

            document.getElementById("dateDevis").innerHTML =
                new Date().toLocaleDateString();

            document.getElementById("volumeReel").innerHTML =
                volume.toFixed(2) + " m³";

            document.getElementById("volumeFacture").innerHTML =
                volumeFacture + " m³";

            document.getElementById("prixBeton").innerHTML =
                prixBetonHT.toFixed(2) + " €";

            document.getElementById("camions").innerHTML =
                nbCamion;

            document.getElementById("transport").innerHTML =
                prixTransportHT.toFixed(2) + " €";

            document.getElementById("ciment").innerHTML =
                cimentTonnes.toFixed(2) + " tonnes";

            document.getElementById("ht").innerHTML =
                prixHT.toFixed(2) + " €";

            document.getElementById("tva").innerHTML =
                tva.toFixed(2) + " €";

            document.getElementById("ttc").innerHTML =
                prixTTC.toFixed(2) + " €";

            devis.style.display = "block";
            btnPdf.style.display = "block";
        }
    }


function telechargerPDF() {

    let element = document.getElementById("devis");

    let options = {
        margin: 0.3,

        filename: "devis-beton.pdf",

        image: {
            type: "jpeg",
            quality: 1
        },

        html2canvas: {
            scale: 2,
            scrollY: 0
        },

        jsPDF: {
            unit: "cm",
            format: "a4",
            orientation: "portrait"
        }
    };

    html2pdf()
        .set(options)
        .from(element)
        .save();
}