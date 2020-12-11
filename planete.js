
console.log('rdy');

// On déclare les variables que l'on va utiliser/manipuler
// Ce sont des élèments HTML
let age         = document.getElementById('age');
let date        = document.getElementById('date');
let btn         = document.getElementById('btn');
let response    = document.getElementById('response');

// On écoute le click sur le bouton
btn.addEventListener('click', () => {
    // Au click sur le bouton on lance la fonction getCategory
    getCategory();
})

// Définition de la fonction getCategory
function getCategory() {
    // Instruction de la fonction getCategory
    // Poussin entre 6 et 7 ans
    if((age.value >= 6 && age.value <= 7) || (date.value >= '2013-01-01')) {
        // On ajoute un contenu de type text dans l'élement HTML response
        response.textContent = 'Poussin';
        // On lance la fonction getPlanete avec en parametre 'mars'
       getPlanete('mars');
    // Pupille entre 8 et 9 ans
    } else if((age.value >= 8 && age.value < 10) || (date.value >= '2011-01-01')) {
        response.textContent = 'Pupille';
        getPlanete('jupiter');
    // Minime entre 10 et 11 ans
    } else if((age.value >= 10 && age.value < 12) || (date.value >= '2009-01-01')) {
        response.textContent = 'Minime';
        getPlanete ('saturn');
    // Cadet entre 12 et 17 ans
    } else if((age.value >= 12 && age.value < 18) || (date.value >= '2003-01-01')) {
        response.textContent = 'Cadet';
        getPlanete('uranus');
    } else {
        response.textContent = 'Veuillez saisir un age compris entre 6 et 17 ans';
    }
}

// La fonction get planete prend un parametre
function getPlanete(planete_name) {
    // On crée un élément HTML de type img
    let planete_element = document.createElement('img');
    // On modifie/definir les parametres src/alt
    planete_element.src = planete_name + '.png';
    planete_element.setAttribute('alt', 'la planete ' + planete_name);
    // On ajoute une classe
    planete_element.classList.add('planete_img');
    // Ici on passe la variable planete_name en classe
    planete_element.classList.add(planete_name);
    // On ajoute un enfant à response dans le HTML
    response.appendChild(planete_element);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
}
