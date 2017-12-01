/* 
Exercice : afficher les nombres pairs et impairs
*/

var nombre = Number(prompt("Entrez le nombre initial :"));

for (var i = nombre; i < nombre + 9; i++) {  //ds l'énoncé :Le programme ne doit afficher que 10 nombres (y compris celui saisi) et non 11.
    if (i % 2 === 0) {
        console.log(i + " est pair");
    } else {
        console.log(i + " est impair");
    }
}
