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

for (var i = 1; i < 5; i++) {
    document.getElementById('display-p' + i).innerHTML = '';
}

function chars() {
    return disp().split(' ');
}

function charsSet(set) {
    disp().split(' ');
}

function dispLength() {
    return disp().length;
} 

function disp() {
    return document.getElementById('display-p').innerHTML;
}

function dispI(i) {
    return document.getElementById('display-p' + i).innerHTML;
}

function dispPrint(print) {
    document.getElementById('display-p').innerHTML = print;
}

function dispPrintI(i, print) {
    document.getElementById('display-p' + i).innerHTML = print;
}

function lastChar() {
    return disp().charAt((dispLength()) - 1);
}

function clearDisplay() {
    dispPrint('0');
}

function clearDisplayFull() {
    dispPrint('0');
    for (var i = 1; i < 5; i++) {
        dispPrintI(i, '');
    }
}

function isNumber() {
    if (lastChar() == '+' || lastChar() == '-' || lastChar() == '*' || lastChar() == '/' || lastChar() == '%' || lastChar() == ' ') {
        return false;
    }
    return true;
}

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

function addOp(op) {
    if (disp() == '0' && op == '-') {
        dispPrint('-');
    }
    else if (disp() == '0') {
        
    }
    
    else if (isNumber()) {
        dispPrint(disp() + ' ' + op);
    }
    
    else {
        var temptext = chars()[0];
        for(var i = 1; i < chars().length - 1; i++) {
            temptext += (' ' + chars()[i]);
        }
        dispPrint((temptext + ' ' + op));
    }
}

var tempNumb = 1;

function passArray() {
    for (var i = 4; i > 1; i--) {
        dispPrintI(i, dispI(i - 1));
    }
}

function equals() {
    var array = chars();
    var tempOp = new Array();
    // dispPrint('');

    if (array[0] == '-') {
        let temptext = array[0] + array[1];
        for(let i = 2; i < array.length; i++) {
            temptext += (' ' + array[i]);
        }
        dispPrint(temptext);
        array = chars()
    }

    if (array.length < 3) {
        if (minus) {
            for(let i = 0; i < array.length; i++) {
                temptext += (' ' + array[i]);
            }
            dispPrint(temptext);
        }
    }
    else if (array.length == 3) {
        passArray();
        dispPrintI(1, (disp() + ' = ' +  operation(array[0], array[1], array[2])));
        dispPrint(operation(array[0], array[1], array[2]));
    }
    else if (array.length == 5) {
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
    else if ((array.length - 1) % 2 == 0 ) {
        passArray();
        dispPrint('')
        for(var i = 1; i < array.length; i += 2) {
            if (array[i] == '*' || array[i] == '/') {
                if (i == 1) {
                    tempOp
                }
                else if (i == (array.length - 1)) {

                }
                dispPrint(disp() + array[i]);
                
            }
            else {
                
            }
        }
    }
}    

    // if (chars().length == 3) {        
    //     passArray();
    //     dispPrintI(1, (disp() + ' = ' +  operation(chars()[0], chars()[1], chars()[2])));
    //     dispPrint(operation(chars()[0], chars()[1], chars()[2]));      
    // }
    // else if (chars().length == 5) {
    //     if((chars()[1] == '*' || chars()[1] == '/') && (chars()[3] == '*' || chars()[3] == '/')) {
    //         passArray();
    //         dispPrintI(1, (disp() + ' = ' +  operation(operation(chars()[0], chars()[1], chars()[2]), chars()[3], chars()[4])));
    //         dispPrint(operation(operation(chars()[0], chars()[1], chars()[2]), chars()[3], chars()[4]));
    //     }
    //     else if ((chars()[1] == '+' || chars()[1] == '-') && (chars()[3] == '+' || chars()[3] == '-')) {
    //         passArray();
    //         dispPrintI(1, (disp() + ' = ' +  operation(operation(chars()[0], chars()[1], chars()[2]), chars()[3], chars()[4])));
    //         dispPrint(operation(operation(chars()[0], chars()[1], chars()[2]), chars()[3], chars()[4]));
    //     }
    //     else if (chars()[1] == '*' || chars()[1] == '/' || chars()[3] == '+' || chars()[3] == '-') {
    //         passArray();
    //         dispPrintI(1, (disp() + ' = ' +  operation(operation(chars()[0], chars()[1], chars()[2]), chars()[3], chars()[4])));
    //         dispPrint(operation(operation(chars()[0], chars()[1], chars()[2]), chars()[3], chars()[4]));
    //     }
    //     else if (chars()[1] == '+' || chars()[1] == '-' || chars()[3] == '*' || chars()[3] == '/') {
    //         passArray();
    //         dispPrintI(1, (disp() + ' = ' +  operation(chars()[0], chars()[1], operation(chars()[2], chars()[3], chars()[4]))));
    //         dispPrint(operation(chars()[0], chars()[1], operation(chars()[2], chars()[3], chars()[4])));
    //     }

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
        dispPrint(disp().substring(0, disp().length -1));
    }
    else if (lastChar() == ' '){
        dispPrint(disp().substring(0, disp().length - 3));
    }
    else {
        dispPrint(disp().substring(0, disp().length - 2));
    }
}

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