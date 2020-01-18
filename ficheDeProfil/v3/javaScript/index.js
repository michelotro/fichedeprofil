

//-------------------------AJAX request using 'fetch'-------------------------

fetch('http://localhost:1337/competences-metiers')
.then(resp => resp.json())
.then(data => {
   
    let sectionMetier = document.getElementById('metier');

    data.forEach(element => {

        let h4 = document.createElement('h4');
        h4.textContent = element.intitule;
        sectionMetier.appendChild(h4);

        let divContainer = document.createElement('div');
        divContainer.classList.add('container');
        sectionMetier.appendChild(divContainer);
        
        afficherCritere(divContainer, "comprendre", element.comprendre);
        afficherCritere(divContainer, "dupliquer", element.dupliquer);
        afficherCritere(divContainer, "analyser", element.analyser);
        afficherCritere(divContainer, "evaluer", element.evaluer);
        afficherCritere(divContainer, "concevoir", element.concevoir);
        afficherCritere(divContainer, "inventer", element.inventer);       
    });

    let titreSectionMetier = document.createElement('h2');
    let compMetier = document.querySelectorAll('h4');
    let h3CompFront = document.createElement('h3');
    let h3CompBack = document.createElement('h3');
    
    titreSectionMetier.textContent = 'Compétences métier';
    sectionMetier.prepend(titreSectionMetier);
    
    h3CompFront.textContent = '1. Développer la partie front-end d\'une application web ou web mobile en intégrant les recommandations de sécurité :';
    sectionMetier.insertBefore(h3CompFront, compMetier[0]);
    
    h3CompBack.textContent = '2. Développer la partie back-end d\'une application web ou web mobileen intégrant les recommandations de sécurité :';
    sectionMetier.insertBefore(h3CompBack, compMetier[4]);
    
});

fetch('http://localhost:1337/competences-technologiques')
.then(resp => resp.json())
.then(data => {
   
    let sectionTechno = document.getElementById('techno');

    data.forEach(element => {
        let h4 = document.createElement('h4');
        h4.textContent = element.intitule;
        sectionTechno.appendChild(h4);

        let divContainer = document.createElement('div');
        divContainer.classList.add('container');
        sectionTechno.appendChild(divContainer);
        
        afficherCritere(divContainer, "comprendre", element.comprendre);
        afficherCritere(divContainer, "dupliquer", element.dupliquer);
        afficherCritere(divContainer, "analyser", element.analyser);
        afficherCritere(divContainer, "evaluer", element.evaluer);
        afficherCritere(divContainer, "concevoir", element.concevoir);
        afficherCritere(divContainer, "inventer", element.inventer);          
    });

    let titreSectionTechno = document.createElement('h2');

    titreSectionTechno.textContent = 'Compétences Technologiques';
    sectionTechno.prepend(titreSectionTechno);
});

fetch('http://localhost:1337/competences-humaines')
.then(resp => resp.json())
.then(data => {
    
    let sectionHumaines = document.getElementById('humaines');

    data.forEach(element => {
        // console.log(element.intitule);
        let h4 = document.createElement('h4');
        h4.textContent = element.intitule;
        sectionHumaines.appendChild(h4);

        let divContainer = document.createElement('div');
        divContainer.classList.add('container');
        sectionHumaines.appendChild(divContainer);
        
        afficherniveau1(divContainer, "Niveau 1", element.niveau_1);
        afficherNiveau2(divContainer, "Niveau 2", element.niveau_2);
        afficherNiveau3(divContainer, "Niveau 3", element.niveau_3);
        afficherNiveau4(divContainer, "Niveau 4", element.niveau_4);
        afficherNiveau5(divContainer, "Niveau 5", element.niveau_5);
        afficherNiveau6(divContainer, "Niveau 6", element.niveau_6);
    });

    let titreSectionHumaines = document.createElement('h2');
    titreSectionHumaines.textContent = 'Compétences Humaines';
    sectionHumaines.prepend(titreSectionHumaines);
    progres(); 
});




