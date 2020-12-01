let entier = document.getElementById("entier")
let flottant = document.getElementById("flottant");
let nonNumerique = document.getElementById("non-numerique");
let random = document.getElementById("random");
let trunc = document.getElementById("trunc").innerHTML;
let textReplace = document.getElementById("replace").innerHTML;
let operande = 10;

entier.innerHTML *= operande;

flottant.innerHTML *= operande;

if (isNaN(nonNumerique)){
    nonNumerique.innerHTML = "0";
}

random.innerHTML = Math.trunc(Math.random() * 100);

document.getElementById("trunc").innerHTML = Math.trunc(trunc);

document.getElementById("replace").innerHTML = textReplace.replace('Hello world !', "Pête Matthias");

console.log(random());