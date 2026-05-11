const translations = {

fr:{
title:"Bienvenue",
description:"Choisissez votre pays.",
button:"Continuer"
},

it:{
title:"Benvenuto",
description:"Scegli il tuo paese.",
button:"Continua"
},

de:{
title:"Willkommen",
description:"Wählen Sie Ihr Land.",
button:"Weiter"
},

es:{
title:"Bienvenido",
description:"Seleccione su país.",
button:"Continuar"
},

ro:{
title:"Bine ați venit",
description:"Selectați țara dvs.",
button:"Continuă"
},

md:{
title:"Bine ați venit",
description:"Selectați țara dvs.",
button:"Continuă"
}

};

function changeLanguage(lang){

document.getElementById("title").innerText =
translations[lang].title;

document.getElementById("description").innerText =
translations[lang].description;

document.getElementById("btn").innerText =
translations[lang].button;

}
