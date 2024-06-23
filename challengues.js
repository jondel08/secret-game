function HelloW() {
    console.log('Hola mundo')
}

function HelloName(nombre) {
    console.log('Hola ' + nombre);
}

function PromOfThreeNum(param1, param2, param3) {
    console.log((parseInt(param1)+parseInt(param2)+parseInt(param3))/3);
}

function Major(param1, param2) {
    console.log(param1 > param2 ? param1 : param2);
}

function Square(param1){
    console.log(param1 * param1);
}

HelloW();
HelloName('Joam');
PromOfThreeNum(1,2,3);
Major(19,11);
Square(5);