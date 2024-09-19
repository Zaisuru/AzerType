let listWord = ["Cachalot","Azerty","Statistics","Changement","Informatique"];
let wordAlea = "";
let scoreUser = 0;
let nbTrials = 0;
let nbTrialsMax = listWord.length;


document.addEventListener("DOMContentLoaded", () =>{
    document.getElementById('btnStartGame').addEventListener('click', e => {
        e.preventDefault();
        displayStartGame();
        updateTrials();
        showWord();


        document.getElementById("scoreMax").innerHTML= nbTrialsMax ;
            document.getElementById('validateWord').addEventListener('click', e =>{
                e.preventDefault();
                validateWord();
            });

        e.preventDefault();
    })
})


function displayStartGame(){
    let startGameContainer = document.getElementById('startGame');
    let loadGameContainer = document.getElementById('game');

    startGameContainer.style.display='none';
    loadGameContainer.style.display='block';
}

function showWord(){ // Affiche un mot aléatoire depuis une liste
    let indexAlea = Math.floor(Math.random() * listWord.length);
    wordAlea = listWord[indexAlea];
    let wordChoose = document.getElementById("wordChoose");
    wordChoose.innerHTML = wordAlea;
}
function updateScore(){ // Effectue un update du score de l'user
    document.getElementById('scoreUser').textContent = scoreUser ;
}

function resetWord(){ // Reset du mot proposé
    if (nbTrials === nbTrialsMax){
        let retry = document.getElementById('retry');
        document.getElementById('game').style.display = "none";
        document.getElementById("endGame").style.display = "block";

        document.getElementById('scoreUserEndGame').textContent = scoreUser;
        document.getElementById('scoreMaxEndGame').textContent = nbTrialsMax;

        retry.addEventListener('click', e => {
            location.reload();
        })
    }
    else{
        document.getElementById("wordUser").value='';
    }
}

function validateWord(){ // fonction de validation du mot
    let userWord = document.getElementById('wordUser').value;

        if (userWord === wordAlea){
            scoreUser++;
            nbTrials++;
            showWord();
            updateScore();
            resetWord();
            updateTrials();

        }
        else{
            nbTrials++;
            resetWord();
            updateTrials();
        }
}

function updateTrials(){ //Fonction pour mettre à jour le nombre d'essai restant
    let trialRest = nbTrialsMax - nbTrials;
    let trialMax = document.getElementById('trialMax');

    document.getElementById('trialRest').textContent = trialRest;
    trialMax.textContent = nbTrialsMax;
}

