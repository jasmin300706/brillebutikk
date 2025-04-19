
var produkter=[
    {
        navn:"Trendy og glamorøse solbriller",
        pris:299,
        bilde:"trendy_briller.jpg"
    },
    {
        navn:"Robuste briller som tåler alt",
        pris:600,
        bilde:"robuste_briller.jpg"
    },
    {
        navn:"Stilige og avslappende solbriller",
        pris:450,
        bilde:"stilige_briller.jpg"
    },
    {
        navn:"Elegante og vakre lesebriller",
        pris:1049,
        bilde:"elegante_briller.jpg"
    }
];

var listeBriller=document.getElementById("listeBriller");

for(var i=0; i<produkter.length; i++) {
    var brille = produkter[i];
    listeBriller.innerHTML += 
        "<div id='brille_boks'>" +
            "<img src='" + brille.bilde + "' alt='" + brille.navn + "'>" +
            "<h5>" + brille.navn + "</h5>" +
            "<p>Pris: " + brille.pris + " kr</p>" +
        "</div>";
}



var butikk=document.getElementById("navn");
var produkter=document.getElementById("produkter");
var butikk_form=document.getElementById("butikk_form");
var navn=document.getElementById("navn");
var nummer=document.getElementById("nummer");
var email=document.getElementById("email");
var valg=document.getElementById("valg");
var kvittering = document.getElementById("kvittering");


butikk_form.onsubmit=function(evt){
    evt.preventDefault();

    kvittering.innerHTML =
        "<h3>Takk for bestillingen, " + navn.value + "!</h3>" +
        "<p>Du har valgt: <strong>" + valg.value + "</strong></p>" +
        "<p>Vi sender deg en bekreftelse til <strong>" + email.value + "</strong>.</p>";
       
    butikk_form.reset();

}
