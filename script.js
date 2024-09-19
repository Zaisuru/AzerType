let listWord = ["Cachalot","Azerty","Statistics","Changement","Informatique"];
let wordAlea = "";
let scoreUser = 0;
let nbTrials = 0;
let nbTrialsMax = listWord.length;


document.addEventListener("DOMContentLoaded", () =>{

    document.getElementById('btnStartGame').addEventListener('click', e => {
        e.preventDefault();
        displayStartGame();
        showWord();


        document.getElementById("scoreMax").innerHTML= nbTrialsMax ;

        if (nbTrials < nbTrialsMax){
            document.getElementById('validateWord').addEventListener('click', e =>{
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
    let indexAlea = Math.floor(Math.random() * listWord.length);
    wordAlea = listWord[indexAlea];
    let wordChoose = document.getElementById("wordChoose");
    wordChoose.innerHTML = wordAlea;
}
function updateScore(){
    document.getElementById('scoreUser').textContent = scoreUser ;
}

function resetWord(){
    alert('Nombre d\'essai ' + nbTrials + ' / ' + nbTrialsMax);
    document.getElementById("wordUser").value='';
}

function validateWord(){
    let userWord = document.getElementById('wordUser').value;

        if (userWord === wordAlea){
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
