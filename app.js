let randomNumCreatedList = [];
let maxNum = 10;

InitialConditions();

var secretNum = CreateSecretRandomNum();
let changuer = true;
var intentos = 1;

function InitialConditions() {
    DocQuerySelector('h1', 'Juego del Número Secreto');
    DocQuerySelector('p', `Indica un número del 1 al ${maxNum}`);
    secretNum = CreateSecretRandomNum();
    intentos = 1;
    
}

function userTest() {
    let userNum = parseInt(document.getElementById('valorUsuario').value);
    if ((userNum === secretNum)) {
        DocQuerySelector('p', `Acertaste el número secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        /*
        changuer = !changuer;
        let myValue = changuer == true? 'nuevamente': 'otra vez';
        DocQuerySelector('p', 'Intenta ' + myValue);
        */
        if (userNum > secretNum) {
            DocQuerySelector('p', 'El número secreto es menor');
        } else {
            DocQuerySelector('p', 'El número secreto es mayor');
        }
        intentos++;
        CleanBox();
    }
}

function DocQuerySelector(element, text) {
    let variable = document.querySelector(element);
    variable.innerHTML = text;
    return;
}

function CreateSecretRandomNum() {
    let createdNum = Math.floor(Math.random() * maxNum) + 1;

    console.log('Num: ' + createdNum);
    console.log(randomNumCreatedList);

    if (randomNumCreatedList.length == maxNum) {
        DocQuerySelector('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (randomNumCreatedList.includes(createdNum)) {
            return CreateSecretRandomNum();
        } else {
            randomNumCreatedList.push(createdNum);
            return createdNum;
        }
    }

    
}

function CleanBox() {
    let box = document.querySelector('#valorUsuario').value = '';
}

function RestarGame() {
    CleanBox();
    InitialConditions();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
