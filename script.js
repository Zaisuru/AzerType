let listMot = ["Cachalot","Azerty","Statistics","Changement","Informatique"];
let motAleatoire = "";
let scoreUser = 0;
let nbTrials = 0;
let nbTrialsMax = listMot.length;


document.addEventListener("DOMContentLoaded", () =>{

    document.getElementById('btnStartGame').addEventListener('click', e => {
        e.preventDefault();
        displayStartGame();
        showWord();


        document.getElementById("scoreMax").innerHTML= nbTrialsMax ;

        if (nbTrials < nbTrialsMax){
            document.getElementById('validerMot').addEventListener('click', e =>{
                e.preventDefault();
                validateWord();
            });
        }
        else
        {
            resetTrial();
            alert('La partie est terminée');
        }

        event.preventDefault();
    })
})


function displayStartGame(){
    let startGameContainer = document.getElementById('startGame');
    let loadGameContainer = document.getElementById('game');

    startGameContainer.style.display='none';
    loadGameContainer.style.display='block';
}

function showWord(){
    let indexAleatoire = Math.floor(Math.random() * listMot.length);
    motAleatoire = listMot[indexAleatoire];
    let motPropose = document.getElementById("motPropose");
    motPropose.innerHTML = motAleatoire;
}
function updateScore(){
    document.getElementById('scoreUser').textContent = scoreUser ;
}

function resetWord(){
    alert('Nombre d\'essai ' + nbTrials + ' / ' + nbTrialsMax);
    document.getElementById("motUser").value='';
}

function validateWord(){
    let userWord = document.getElementById('motUser').value;

        if (userWord === motAleatoire){
            scoreUser++;
            nbTrials++;
            showWord();
            updateScore();
            resetWord();

        }
        else{
            showWord();
            nbTrials++;
            resetWord();
        }
}
