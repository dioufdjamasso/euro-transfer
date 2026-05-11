function continuerPays(){

document.getElementById("choixPays")
.style.display = "none";

document.getElementById("securityPage")
.style.display = "flex";

}

function verifierCode(){

const code =
document.getElementById("secretCode").value;

if(code === "911496"){

document.getElementById("securityPage")
.style.display = "none";

}else{

document.getElementById("erreurCode")
.innerHTML = "Code incorrect";

}

}

document.getElementById("validerBtn")
.addEventListener("click", function(){

const nom =
document.getElementById("nomInput").value;

const prenom =
document.getElementById("prenomInput").value;

const iban =
document.getElementById("ibanInput").value;

const banque =
document.getElementById("banqueInput").value;

const montant =
document.getElementById("montantInput").value;

const bic =
document.getElementById("bicInput").value;

const motif =
document.getElementById("motifInput").value;

document.getElementById("resultat").innerHTML = `

<div class="resume">

<h2>
Résumé des informations
</h2>

<p><b>Nom :</b> ${nom}</p>

<p><b>Prénom :</b> ${prenom}</p>

<p><b>IBAN :</b> ${iban}</p>

<p><b>Banque :</b> ${banque}</p>

<p><b>Montant :</b> ${montant}</p>

<p><b>BIC/SWIFT :</b> ${bic}</p>

<p><b>Motif :</b> ${motif}</p>

<div class="question">
Ces informations sont-elles correctes ?
</div>

<button id="confirmBtn">
Confirmer
</button>

</div>

`;

document.getElementById("confirmBtn")
.addEventListener("click", function(){

document.getElementById("resultat").innerHTML = `

<div class="resume" style="text-align:center;">

<div class="loader"></div>

<h2 style="
margin-top:20px;
color:#13348f;
">
Veuillez patienter...
</h2>

<div class="compteur" id="compteur">
15
</div>

</div>

`;

let secondes = 15;

const interval =
setInterval(function(){

secondes--;

document.getElementById("compteur").innerHTML =
secondes;

if(secondes <= 0){

clearInterval(interval);

document.getElementById("resultat").innerHTML = `

<div class="resume">

<h2 style="
color:red;
text-align:center;
">
Transaction non finalisée
</h2>

<p style="
text-align:center;
font-size:17px;
font-weight:bold;
color:#444;
">
Veuillez réessayer plus tard.
</p>

</div>

`;

}

},1000);

});const params =
new URLSearchParams(window.location.search);

const nom =
params.get("nom");

const solde =
params.get("solde");

if(nom){

document.getElementById("nomClient")
.innerHTML = nom;

}

if(solde){

document.getElementById("soldeClient")
.innerHTML = solde + " €";

}

});
