
//EXERCICE 1
function multiplication(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultat = num1 * num2;
    document.getElementById('resultat').innerHTML = resultat;
}

//EXERCICE 2
const button1 = document.querySelector('#toggleButton')

button1.onclick = masquer ;

function masquer() {
    let texte = document.querySelector('#texte');
    if (texte.style.display === 'none') {
      texte.style.display = 'block';
    } else {
      texte.style.display = 'none';
    }
  };

//EXERCICE 3
  function getEnteredColor() {
    let userColor = (document.getElementById('colorinput').value);
    if (/^#[0-9A-Fa-f]{6}$/i.test(userColor)){
       document.body.style.backgroundColor = userColor;
    } else {
      alert('Veuillez rentrer un code hexadécimal valide');
    }
  }

  function applyColor(){
    let buttonOk = document.getElementById('colorPicker').value;
    document.body.style.backgroundColor = buttonOk;
  }
 
//EXERCICE 4
  function afficheImage(){
    let adresse = document.getElementById('imageAdress').value;
    let image = document.getElementById('imageAffichee');
    image.src = adresse;
  }

//EXERCICE 5
  function modulable(){
    let modulo = document.getElementById('modulo').value;
    const reste = modulo % 5;
    let text = document.getElementById('text');
    text.innerText = " Si on divise " + modulo + " par 5, le reste est de " + reste;
  }

//EXERCICE 6
  function age() {
    let ageUser = parseFloat(document.getElementById('ageUser').value);
    let annee = 365;
    let jours = ageUser * annee;
    let texage = document.getElementById('texage');
    texage.innerText = " Vous avez vécu " + jours + " jours ";
  }

//EXERCICE 7
  function ecartAge(){
    let ageUsers = parseFloat(document.getElementById('ageUsers').value);
    let ageVise = parseFloat(document.getElementById('ageVise').value);
    let annees = 365;
    let jour = ageUsers * annees;
    let nombrejours = ageVise * annees ;
    let ecart = nombrejours - jour;
    let nbjours = document.getElementById('nbjours');
    nbjours.innerText = " Vous avez vécu " + jour + " jours.Il y a encore " + ecart + " avant vos " + ageVise + " ans ";

    if(ageVise < ageUsers){
      alert("erreur");
    }
  
  }
   
//EXERCICE 8
  function ouiounon() {
    let confirmation = confirm("Voulez-vous continuer ?");
    if (confirmation) { 
      alert("Vous avez dis OUI! \u{1F60A}"); 
    } else {
      alert("Vous avez dis NON \u{1F61E}");
    }
  }
 
//EXERCICE 9
  function convertToWord(number) {
    const numberWords = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq'];
    return numberWords[number];
}

  function checkNumber() {
    const numberInput = document.getElementById("numberInput").value;
    const nombres = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq'];
    const nombre = parseInt(numberInput);

    if (isNaN(nombre) || nombre < 0 || nombre > 5) {
    alert('Veuillez entrer un nombre entre 0 et 5.');
  } else {
    const lettres = nombres[nombre];
    alert(`Le nombre que vous avez saisi est : "${lettres}"`);
  }
}

//EXERCICE 10
 let produitsPredefinis = ["pain", "lait", "oeufs", "fromage", "fruits"];

 function ajouterProduit() {
     
     let nouveauProduit = document.getElementById('nouveauProduit').value;
     if (nouveauProduit.trim() !== '') {
     if (!produitsPredefinis.includes(nouveauProduit)) {
     let nouveauElement = document.createElement('li');
         nouveauElement.textContent = nouveauProduit;
         document.getElementById('listeCourses').appendChild(nouveauElement)
         document.getElementById('nouveauProduit').value = '';
         } else {
             alert("Ce produit est déjà sur la liste !");
         }
     }
 }


//EXERCICE 11
   const randomNumber = Math.floor(Math.random() * 100) + 1; 

  function checkGuess() {
     const userGuess = parseInt(document.getElementById("userGuess").value);

     if (isNaN(userGuess)) {
    document.getElementById("result").textContent = "Veuillez entrer un nombre valide.";
  }  else if (userGuess > randomNumber) {
    document.getElementById("result").textContent = "Trop grand !";
  }  else if (userGuess < randomNumber) {
    document.getElementById("result").textContent = "Trop petit !";
  }  else {
     document.getElementById("result").textContent = " Gagné ! Le nombre était bien " + randomNumber + "!";
  }
}

//EXERCICE 12
const nombreADeviner = Math.floor(Math.random() * 100) + 1;
const essais3Max = 3;
let essais = 0;

function devinerNombre() {
  const essai = parseInt(document.getElementById("essai").value);
  essais++;

  const final = document.getElementById("final");

  if (essai < nombreADeviner) {
      final.textContent = "Le nombre est plus grand.";
  } else if (essai > nombreADeviner) {
      final.textContent = "Le nombre est plus petit.";
  } else {
      final.textContent = "Félicitations ! Vous avez deviné le nombre " + nombreADeviner + " en " + essais + " essai(s).";
      return;
  }

  if (essais < essais3Max) {
      document.getElementById("essai").value = "";
  } else {
      final.textContent = "Vous n'avez pas réussi à deviner le nombre. Le nombre était " + nombreADeviner + ".";
      document.getElementById("essai").setAttribute("disabled", "true");
  }


    } 


//EXERCICE 13
  function Confirmation(isConfirmed) {
    let message = "";
    let emoji = "";         
    
    if (isConfirmed) {
      message = "Vous avez dis OUI!";
      emoji = "\u{1F60A}"; // Smiley souriant
    } else {
      message = "Vous avez dis NON";
      emoji = "\u{1F61E}"; // Smiley triste 
    }
    
    let confirmationDialog = document.createElement("div");
    let textNode = document.createTextNode(message + " " + emoji);
    confirmationDialog.appendChild(textNode);
    
    document.body.appendChild(confirmationDialog);
  }


//EXERCICE 14 (merci chatGPT ".")

let books = [
  { title: 'CSS: The Definitive Guide', author: 'Eric Meyer', image: 'https://covers.oreillystatic.com/images/0636920012726/lrg.jpg', type: 'css' },
  { title: 'CSS Development with CSS3', author: 'Zachary Kingston', image: 'https://covers.oreillystatic.com/images/0636920057970/lrg.jpg', type: 'css' },
  { title: 'You Don\'t Know JS: Up & Going', author: 'Kyle Simpson', image: 'https://covers.oreillystatic.com/images/0636920039303/lrg.jpg', type: 'js' },
  { title: 'Programming JavaScript Applications', author: 'Eric Elliott', image: 'https://covers.oreillystatic.com/images/0636920033141/lrg.jpg', type: 'js' },
  { title: 'Modern JavaScript Develop and Design', author: 'Ullman Larry', image: 'https://www.booktopia.com.au/http_coversbooktopiacomau/big/9780321812520/modern-javascript.jpg', type: 'js' }
];

// Fonction pour afficher les livres selon le type choisi
function filterBooks(type) {
  let bookList = document.getElementById('bookList');
  bookList.innerHTML = ''; // Effacer la liste actuelle

  // Filtrer les livres par type et les afficher
  books.filter(book => book.type === type).forEach(book => {
    let li = document.createElement('li');
    li.className = 'book-item';

    let title = document.createElement('h3');
    title.textContent = book.title;

    let author = document.createElement('p');
    author.textContent = 'Author: ' + book.author;

    let image = document.createElement('img');
    image.src = book.image;
    image.alt = book.title;
    image.className = 'book-image';

    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(image);
    bookList.appendChild(li);
  });
}

// Afficher tous les livres au chargement de la page
window.onload = function() {
  filterBooks(); // Affiche tous les livres initialement
};