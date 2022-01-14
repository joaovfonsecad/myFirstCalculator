//  Primeiro os botões da calculador estão sendo definidos, para serem clicados pelo mouse
document.getElementById('display-p').innerHTML = '0';

document.getElementById('ac').onclick = function() {clearDisplayFull()};
document.getElementById('c').onclick = function() {clearDisplay()};

document.getElementById('one').onclick = function() {addNumber('1')};
document.getElementById('two').onclick = function() {addNumber('2')};
document.getElementById('three').onclick = function() {addNumber('3')};
document.getElementById('four').onclick = function() {addNumber('4')};
document.getElementById('five').onclick = function() {addNumber('5')};
document.getElementById('six').onclick = function() {addNumber('6')};
document.getElementById('seven').onclick = function() {addNumber('7')};
document.getElementById('eight').onclick = function() {addNumber('8')};
document.getElementById('nine').onclick = function() {addNumber('9')};
document.getElementById('zero').onclick = function() {addNumber('0')};
document.getElementById('comma').onclick = function() {addNumber('.')};

document.getElementById('plus').onclick = function() {addOp('+')};
document.getElementById('minus').onclick = function() {addOp('-')};
document.getElementById('times').onclick = function() {addOp('*')};
document.getElementById('division').onclick = function() {addOp('/')};
// document.getElementById('modulus').onclick = function() {addOp('%')};

document.getElementById('equals').onclick = function() {equals()};

document.getElementById('backspace').onclick = function() {backspace()};

var equals;

//  A próxima função define os "event listeners" para que os botões possam ser clicados através do teclado
function keyPress(event) {
    if (event.key === '1') {
        addNumber('1')
    }
    else if (event.key === '2') {
        addNumber('2')
    }
     else if (event.key === '3') {
        addNumber('3')
    }
    else if (event.key === '4') {
        addNumber('4')
    }
    else if (event.key === '5') {
        addNumber('5')
    }
    else if (event.key === '6') {
        addNumber('6')
    }
    else if (event.key === '7') {
        addNumber('7')
    }
    else if (event.key === '8') {
        addNumber('8')
    }
    else if (event.key === '9') {
        addNumber('9')
    }
    else if (event.key === '0') {
        addNumber('0')
    }
    else if (event.key === '+') {
        addOp('+')
    }
    else if (event.key === '-') {
        addOp('-')
    }
    else if (event.key === '*') {
        addOp('*')
    }
    else if (event.key === '/') {
        addOp('/')
    }
    else if (event.key === 'Enter' || event.key === '=') {
        equals();
    }
    else if (event.key === 'Backspace') {
        backspace();
    }
    else if (event.key === 'c') {
        clearDisplay();
    }
    else if (event.key === 'a') {
        clearDisplayFull();
    }
}

//  Aqui tem um loop pra limpar a tela sempre que a calculadora for iniciada, não sei se tinha necessidade, mas não estava afim de editar mais o HTML
for (var i = 1; i < 5; i++) {
    document.getElementById('display-p' + i).innerHTML = '';
}

//  A função chars() divide oque está aparecendo no display e retorna um array com cada número e operador em ordem
function chars() {
    return disp().split(' ');
}

//  A função charsSet não foi usada e sinceramente eu nem lembro por que criei ela, mas aparentemente ela divide o display em um array e não retorna nada
function charsSet(set) {
    disp().split(' ');
}

//  Criei a próxima função pra facilitar na hora de ter que digitar disp().length, mas só usei uma vez, se não me engamo deu algum problema nas 
//  outras partes do código onde tentei usar ela
function dispLength() {
    return disp().length;
} 

//  Provavelmente a função mais utilizada no código, ela retorna o que está aparecendo no display:
function disp() {
    return document.getElementById('display-p').innerHTML;
}

//  retorna o conteúdo das outras linhas do display (as linhas que guardam o histórico das operações):
function dispI(i) {
    return document.getElementById('display-p' + i).innerHTML;
}

//  modifica a linha principal do display:
function dispPrint(print) {
    document.getElementById('display-p').innerHTML = print;
}

//  modifica as demais linhas do display:
function dispPrintI(i, print) {
    document.getElementById('display-p' + i).innerHTML = print;
}

//  retorna o ultimo caractere da linha principal do display (vou me refirir a ela como display a partir daqui, e as outras linhas como linhas do histórico):
function lastChar() {
    return disp().charAt((dispLength()) - 1);
}

//  limpa o display:
function clearDisplay() {
    dispPrint('0');

}

//  limpa o display e as linhas de histórico:
function clearDisplayFull() {
    dispPrint('0');

    for (let i = 1; i < 5; i++) {
        dispPrintI(i, '');
    }
}

//  verifica se o ultimo caractere é um número, e retorna verdadeiro se for?
function isNumber() {
    if (lastChar() == '+' || lastChar() == '-' || lastChar() == '*' || lastChar() == '/' || lastChar() == '%' || lastChar() == ' ') {
        return false;
    }
    return true;
}

//  finalmente a função de inserir o número que for clicado ou no teclado, ou na calculadora:
function addNumber(num) {
    if (disp() == '0') {
        dispPrint(num);       
    }
    else if (isNumber()) {
        dispPrint(disp() + num);
    }
    else if (!isNumber()) {
        dispPrint(disp() + (' ' + num));
    }
}

//  adiciona o operador, se já houver um operador no lugar, ela substitui pelo novo que for clicado
function addOp(op) {
    if (disp() == '0' && op == '-') {
        dispPrint('-');
    }
    else if (disp() == '-') {
        dispPrint('-')
    }
    else if (disp() == '0') {
        
    }
    
    else if (isNumber()) {
        dispPrint(disp() + ' ' + op);
    }
    
    else {
        let temptext = chars()[0];
        for(let i = 1; i < chars().length - 1; i++) {
            temptext += (' ' + chars()[i]);
        }
        dispPrint((temptext + ' ' + op));
    }
}

//  passa as linhas de histórico uma linha pra cima e deleta a ultima:
function passArray() {
    for (let i = 4; i > 1; i--) {
        dispPrintI(i, dispI(i - 1));
    }
}

//  Aqui são as funções que criei com o objetivo de executar uma ou duas operações ao mesmo tempo, elas foram substituidas pelas outras que estão na função equals()
//  mas mantive a invocação dessas duas lá como comentário

/*
function equals3(array, tempArray) {
    if (tempArray[0] == '-' && tempArray.length < 4) {
            
    }
    else {
        passArray();
        dispPrintI(1, (disp() + ' = ' +  operation(array[0], array[1], array[2])));
        dispPrint(operation(array[0], array[1], array[2]));
    }
}

function equals5(array) {
    passArray();

        if ((array[1] == '+' || array[1] == '-') && (array[3] == '*' || array[3] == '/')) {
            dispPrintI(1, (disp() + ' = ' +  operation(array[0], array[1], operation(array[2], array[3], array[4]))));
            dispPrint(operation(array[0], array[1], operation(array[2], array[3], array[4])));
        }

        else {
            dispPrintI(1, (disp() + ' = ' +  operation(operation(array[0], array[1], array[2]), array[3], array[4])));
            dispPrint(operation(operation(array[0], array[1], array[2]), array[3], array[4]));
        }
}
*/

//  Essa função verifica se o primeiro valor da calculadora é um sinal de substração, se for ela junta ele com o primeiro número e retorna o array alterado
//  ou seja, se o array for ['-', '3', '+', '3'], ela retorna o array ['-3', '+', '3']:
function firstNegative(array) { 
    let tempArray = array;
    let temptext;

    if (array.length == 1) {
        dispPrint(array);
    }
    else if (array.length == 2) {
        let temptext = array[0] + array[1];
        dispPrint(temptext);
    }
    else if (array.length == 3) {
        temptext = tempArray[0] + ' ' + tempArray[1];
        for(let i = 2; i < tempArray.length; i++) {
            temptext += (' ' + tempArray[i]);
        }
        dispPrint(temptext);
    }
    else {
        temptext = array[0] + array[1];
        for (let i = 2; i < array.length; i++) {
            temptext += (' ' + array[i])
        }
        dispPrint(temptext);
    }

    array = chars();
    return array;
}

//  A função mais importante, roda quando clicado o botão de igual:
function equals() {
    let array = chars();
    let tempArray = array;
    let tempOp;
    let temptext = '';

    
    if (array[0] == '-') {
        dispPrint('');
        array = firstNegative(array);
    }
    
    if (array.length < 2) {
        if (array[0] !== '-' || array.length == 1) {
            dispPrint(array[0]);
        }
        else {
            dispPrint(tempArray[0] + ' ' + tempArray[1]);
        }
    }

    else if (array.length < 3) {
        if (array[0] !== '-') {
            temptext = tempArray[0] + ' ' + tempArray[1];
        }
        else {
            temptext = tempArray[0] + ' ' + tempArray[1] + ' ' + tempArray[2];          
        }
        dispPrint(temptext);
    }

    // else if (array.length == 3) {
    //     equals3(array, tempArray);
    // }

    // else if (array.length == 5) {
    //     equals5(array);
    // }

    else if ((array.length - 1) % 2 == 0) {
        let before = disp();
        passArray();

        for(let i = 1; i < array.length; i += 2) {
            if (array[i] == '*' || array[i] == '/') {
                if (i == 1) {
                    tempOp = operation(array[0], array[1], array[2]);
                    temptext = tempOp

                    for (let j = 3; j < array.length; j++) {
                        temptext += ' ' + array[j];
                    }
                    dispPrint(temptext);
                    array = chars();
                    temptext = '';
                }
            }
        }

        for(let i = (array.length - 2); i > 1; i -= 2) {
            if (array[i] == '*' || array[i] == '/') {
                if (i == (array.length - 2)) {
                    tempOp = operation(array[i - 1], array[i], array[i + 1]);
                    
                    for (let j = 0; j < array.length - 3; j++) {
                        temptext += array[j] + ' ';
                    }
                    
                    temptext += tempOp;
                    dispPrint(temptext);
                    array = chars();
                    temptext = '';
                }
            }
        }

        for(let i = 1; i < array.length; i += 2) {
            if (array[i] == '*' || array[i] == '/') {
                tempOp = operation(array[i - 1], array[i], array[i + 1]);
                
                for (let j = 0; j < i - 1; j++) {
                    temptext += array[j] + ' ';
                }
                
                temptext += tempOp;
                
                for (let j = (i + 2); j < array.length; j++) {
                    temptext += ' ' + array[j];
                }
                
                dispPrint(temptext);
                array = chars();
                i = 1;
                temptext = '';
            }
        }

        // tempArray = chars();

        if (tempArray.length > 4){
            while (array.length > 3) {
                tempOp = operation(array[0], array[1], array[2]);
                temptext = tempOp
    
                for (let j = 3; j < array.length; j++) {
                    temptext += ' ' + array[j];
                }
                array = temptext.split(' ');
            }
            tempOp = operation(array[0], array[1], array[2]);
            dispPrintI(1, (before + ' = ' + tempOp));
            dispPrint(tempOp);
        }

        else {
            if (tempArray[0] == '-' && tempArray.length < 4) {
            
            }
            else {
                dispPrintI(1, (before + ' = ' +  operation(array[0], array[1], array[2])));
                dispPrint(operation(array[0], array[1], array[2]));
            }
        }
    }
    return disp();
}    

//  A primeira vez que implementei a capacidade de fazer mais de uma operação ao mesmo tempo, só consegui fazer uma ou duas:
/*
    if (chars().length == 3) {        
        passArray();
        dispPrintI(1, (disp() + ' = ' +  operation(chars()[0], chars()[1], chars()[2])));
        dispPrint(operation(chars()[0], chars()[1], chars()[2]));      
    }
    else if (chars().length == 5) {
        if((chars()[1] == '*' || chars()[1] == '/') && (chars()[3] == '*' || chars()[3] == '/')) {
            passArray();
            dispPrintI(1, (disp() + ' = ' +  operation(operation(chars()[0], chars()[1], chars()[2]), chars()[3], chars()[4])));
            dispPrint(operation(operation(chars()[0], chars()[1], chars()[2]), chars()[3], chars()[4]));
        }
        else if ((chars()[1] == '+' || chars()[1] == '-') && (chars()[3] == '+' || chars()[3] == '-')) {
            passArray();
            dispPrintI(1, (disp() + ' = ' +  operation(operation(chars()[0], chars()[1], chars()[2]), chars()[3], chars()[4])));
            dispPrint(operation(operation(chars()[0], chars()[1], chars()[2]), chars()[3], chars()[4]));
        }
        else if (chars()[1] == '*' || chars()[1] == '/' || chars()[3] == '+' || chars()[3] == '-') {
            passArray();
            dispPrintI(1, (disp() + ' = ' +  operation(operation(chars()[0], chars()[1], chars()[2]), chars()[3], chars()[4])));
            dispPrint(operation(operation(chars()[0], chars()[1], chars()[2]), chars()[3], chars()[4]));
        }
        else if (chars()[1] == '+' || chars()[1] == '-' || chars()[3] == '*' || chars()[3] == '/') {
            passArray();
            dispPrintI(1, (disp() + ' = ' +  operation(chars()[0], chars()[1], operation(chars()[2], chars()[3], chars()[4]))));
            dispPrint(operation(chars()[0], chars()[1], operation(chars()[2], chars()[3], chars()[4])));
        }
*/

//  Quando o botão de backspace é clicado ele deleta o ultimo digito do display, se for um operador ele deleta também o espaço de trás do operador:
function backspace() {
    if(chars().length == 1) {
        if (disp().length < 2) {
            dispPrint('0');
        }

        else {
            dispPrint(disp().substring(0, disp().length -1));
        }
    }

    else if (isNumber()) {
        if (disp().substring(disp().length - 2, disp().length - 1) == ' ') {
            dispPrint(disp().substring(0, disp().length - 2));
        }
        else {
            dispPrint(disp().substring(0, disp().length - 1));
        }
    }

    else if (lastChar() == ' '){
        dispPrint(disp().substring(0, disp().length - 3));
    }

    else {
        dispPrint(disp().substring(0, disp().length - 2));
    }
}

//  A segunda função mais importante, ela executa e retorna a operação realizada, foi bastante utilizada na função equals()
function operation(char1, op, char2) {
    switch (op) {
        case '+':
            return parseFloat(char1) + parseFloat(char2);
        case '-':
            return parseFloat(char1) - parseFloat(char2);
        case '*':
            return parseFloat(char1) * parseFloat(char2);
        case '/':
            return parseFloat(char1) / parseFloat(char2);
        case '%':
            return parseFloat(char1) % parseFloat(char2);
    }
}