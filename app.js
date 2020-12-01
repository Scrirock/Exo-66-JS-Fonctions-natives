let entier = document.getElementById("entier")
let flottant = document.getElementById("flottant");
let nonNumerique = document.getElementById("non-numerique");
let random = document.getElementById("random");
let trunc = document.getElementById("trunc");
let textReplace = document.getElementById("replace");
let operande = 10;

entier.innerHTML *= operande;

flottant.innerHTML = parseFloat(flottant.innerHTML * operande + parseInt(entier.innerHTML));

if (isNaN(nonNumerique)){
    nonNumerique.innerHTML = 0;
}

random.innerHTML = Math.trunc(Math.random() * 100);

trunc.innerHTML = Math.trunc(trunc.innerHTML);

textReplace.innerHTML = textReplace.innerHTML.replace('world', "Pête Matthias");

console.log(random());