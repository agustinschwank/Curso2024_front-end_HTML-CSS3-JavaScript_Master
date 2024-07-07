'use strict';

addEventListener('DOMContentLoaded', () => {

    let phrase = 'En los dias de lluvia, me gusta tomar cafe.';

    let searchWord = prompt('¿Que palabra le gustaria remplazar de la frase "'+phrase+'" ?');
    let newWord = prompt('¿Nos puede decir por que palabra quiere?');

    function wordRemplase(search, word) {
        if(phrase.search(search) != -1) {
            return phrase.replace(search, word);
        } else {
            return `La palabra ${search}, no existe en la frase`;
        }
    }

    alert(wordRemplase(searchWord, newWord));

});
