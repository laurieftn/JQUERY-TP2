$(document).ready(function(){
    $('#button_valider').click(function(){ // Récupérer les valeurs au clic sur le bouton, on les transforme en nombres décimaux
        var first = parseFloat($('#first').val()); // Pour récupérer les valeurs de chaque input
        var second = parseFloat($('#second').val());
        var third = parseFloat($('#third').val());
        var fourth = parseFloat($('#fourth').val());
        var fifth = parseFloat($('#fifth').val());

        if (first >= 0 && first <= 20 && second >= 0 && second <= 20 && third >= 0 && third <= 20 && fourth >= 0 && fourth <= 20 && fifth >= 0 && fifth <= 20){ // pour limiter les valeurs entre 0 et 20

        var result = (first + second + third + fourth + fifth)/5; // calcul de la moyenne

        if (result < 10){
            alert("Votre moyenne est de :" + result + " - En dessous de la moyenne");
        }

        else if (result >= 10 && result < 13){
            alert("Votre moyenne est de :" + result + " - Moyen");
        }

        else if (result >= 13 && result < 16){
            alert("Votre moyenne est de :" + result + " - Bien");
        }

        else if (result >= 16 && result < 20){
            alert("Votre moyenne est de :" + result + " - Très Bien");
        }

        else {
            alert("Votre moyenne est de :" + result + " - Excellent");
        }
        }
        else { // affiche une erreur si valeur autre qu'entre 0 et 20
            alert("Erreur");
        }
});
});