
// Etape 2 : l'ordinateur joue et choisi un élement  

let pierre = 0
let papier = 1
let ciseaux = 2

function getComputerChoice (table) {
  
 
  let value = Math.random()
  let conversionValue = value * 3
  let conversionValueFloor = Math.floor(conversionValue)

if (conversionValueFloor == 0) {
 return "pierre" 
} else if (conversionValueFloor == 1) {
  return "papier" 
} else if (conversionValueFloor == 2) {
  return"ciseaux" 
}
  }

console.log(getComputerChoice())

// Etape 3 : **Étape 3 : Écrire la logique pour obtenir le choix de l'humain**
function getHumanChoice () {
  let choiseHuman = prompt(" Veuillez choisir entre pierre, papier et ciseaux ")
  return choiseHuman
}


// **Étape 4 : Déclarer les variables de score des joueurs**

let humanScore = 0
let computerScore = 0

// Étape 5 : Écrire la logique pour jouer un tour**


function playRound (humainChoice, computerChoice) {
  humainChoice = humainChoice.toLowerCase();
  // On utilise le computerChoice reçu en paramètre au lieu d'en générer un nouveau
  
  console.log(`Vous: ${humainChoice}, Ordinateur: ${computerChoice}`);
  
  if (humainChoice === computerChoice) {
    return "Égalité !";
  }

  if (humainChoice === "pierre") {
    if (computerChoice === "ciseaux") {
      humanScore++;
      return "Vous avez gagné ! Pierre bat Ciseaux.";
    } else {
      computerScore++;
      return "Vous avez perdu ! Papier bat Pierre.";
    }
  }

  if (humainChoice === "papier") {
    if (computerChoice === "pierre") {
      humanScore++;
      return "Vous avez gagné ! Papier bat Pierre.";
    } else {
      computerScore++;
      return "Vous avez perdu ! Ciseaux bat Papier.";
    }
  }

  if (humainChoice === "ciseaux") {
    if (computerChoice === "papier") {
      humanScore++;
      return "Vous avez gagné ! Ciseaux bat Papier.";
    } else {
      computerScore++;
      return "Vous avez perdu ! Pierre bat Ciseaux.";
    }
  }
}

// Test de la fonction
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// const result = playRound(humanSelection, computerSelection);
// console.log(result);
// console.log(`Score - Vous: ${humanScore}, Ordinateur: ${computerScore}`);

// Les règles :
// Pierre bat Ciseaux
// Papier bat Pierre  
// Ciseaux bat Papier


// Etape 6 

function playgame () {
let round = 0
while (round < 5) {
  const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice();
 const result = playRound(humanSelection, computerSelection);
 console.log(result);
console.log(`Score - Vous: ${humanScore}, Ordinateur: ${computerScore}`)
round++
  }
 console.log(`Score final - Vous: ${humanScore}, Ordinateur: ${computerScore}`);

 if (humanScore > computerScore) {
    console.log("🎉 FÉLICITATIONS ! Vous avez gagné la partie !");
  } else if (computerScore > humanScore) {
    console.log("😞 Dommage ! L'ordinateur a gagné la partie !");
  } else {
    console.log("🤝 Égalité parfaite ! Match nul !");
  }
 
}

playgame()

// Les règles :
// Pierre bat Ciseaux
// Papier bat Pierre  
// Ciseaux bat Papier

console.log("test desktop github")