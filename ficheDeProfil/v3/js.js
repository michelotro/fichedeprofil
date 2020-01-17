

let step = document.querySelectorAll(".step");
let coloreBarre = document.querySelectorAll('.bar');

step.forEach(rond => {
    rond.addEventListener("click", function () {
        rond.classList.toggle("active");
        let coloreBarre = rond.nextElementSibling;
        if (coloreBarre != null) {
            coloreBarre.classList.toggle('active');
        }
    });
});

fetch('http://localhost:1337/competences-metiers')
.then(resp => resp.json())
.then(data => {
    // console.log(data);
    
    let section = document.getElementById('metier');

    data.forEach(element => {
        console.log(element.intitule);
        let h4 = document.createElement('h4');
        h4.textContent = element.intitule;
        section.appendChild(h4);

        let divContainer = document.createElement('div');
        divContainer.classList.add('container');
        section.appendChild(divContainer);
        
        afficherCritere(divContainer, "comprendre", element.comprendre);
        afficherCritere(divContainer, "dupliquer", element.dupliquer);
        afficherCritere(divContainer, "analyser", element.analyser);
        afficherCritere(divContainer, "evaluer", element.evaluer);
        afficherCritere(divContainer, "concevoir", element.concevoir);
        afficherCritere(divContainer, "inventer", element.inventer);
    
        // console.log(element.comprendre);
        // console.log(element.dupliquer);
        // console.log(element.analyser);
        // console.log(element.evaluer);
        // console.log(element.concevoir);
        // console.log(element.inventer);           
    });
    
    let compMetier = document.querySelectorAll('h4');
    let h3CompFront = document.createElement('h3');
    let h3CompBack = document.createElement('h3');
    console.log(compMetier);
    h3CompFront.textContent = '1. Développer la partie front-end d\'une application web ou web mobile en intégrant les recommandations de sécurité :';
    section.insertBefore(h3CompFront, compMetier[0]);
    
    h3CompBack.textContent = '2. Développer la partie back-end d\'une application web ou web mobileen intégrant les recommandations de sécurité :';
    section.insertBefore(h3CompBack, compMetier[4]);
});

function afficherCritere(divContainer, critere, niveau){
    let divTitre = document.createElement('div');
    let para = document.createElement('p');
    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    let li4 = document.createElement('li');
    let li5 = document.createElement('li');

    divTitre.classList.add('titre');
    divContainer.appendChild(divTitre);

    para.textContent = critere;
    divTitre.appendChild(para);

    ul.classList.add('stepbar');
    divTitre.appendChild(ul);

    li1.textContent = 1;
    li1.classList.add('step');
    if (niveau >=1){
        li1.classList.add('active');
    }
    ul.appendChild(li1);

    li2.classList.add('bar');
    if (niveau >= 1){
        li2.classList.add('active')
    };
    ul.appendChild(li2);

    li3.textContent = 2;
    li3.classList.add('step');
    if (niveau >= 2){
        li3.classList.add('active')
    };
    ul.appendChild(li3);

    li4.classList.add('bar');
    if (niveau >= 2) {
        li4.classList.add('active')
    };
    ul.appendChild(li4);

    li5.textContent = 3;
    li5.classList.add('step');
    if (niveau == 3) {
        li5.classList.add('active')
    };
    ul.appendChild(li5);
}


