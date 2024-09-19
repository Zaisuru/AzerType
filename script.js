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

function showWord(){
    let indexAlea = Math.floor(Math.random() * listWord.length);
    wordAlea = listWord[indexAlea];
    let wordChoose = document.getElementById("wordChoose");
    wordChoose.innerHTML = wordAlea;
}
function updateScore(){
    document.getElementById('scoreUser').textContent = scoreUser ;
}

function resetWord(){
    if (nbTrials === nbTrialsMax){
        alert('La partie est terminée, votre score est de ' + scoreUser + ' sur ' + nbTrialsMax);
        location.reload();
    }
    else{
        document.getElementById("wordUser").value='';
    }
}

function validateWord(){
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
            //document.getElementById('wordUser').style.border="3px solid red";
            nbTrials++;
            resetWord();
            updateTrials();
        }
}

function updateTrials(){
    let trialRest = nbTrialsMax - nbTrials;
    let trialMax = document.getElementById('trialMax');

    document.getElementById('trialRest').textContent = trialRest;
    trialMax.textContent = nbTrialsMax;
}

