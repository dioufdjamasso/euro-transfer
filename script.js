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
