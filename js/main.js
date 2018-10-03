let test1 = function () {
    alert('Page is loaded');
}

let test2 = function () {
    alert('1');
    alert('2');
    alert('3');
}

let test3 = function () {
    let person = prompt('Please enter your name:');
    if (person != null) {
        document.getElementById("t3").innerHTML = 'Hello ' + person + '! How are you today?';
    }
}

let test4 = function () {
    alert('Button is clicked');
    document.getElementById("t4").innerHTML = 'You are doing fine!';
}

let test5 = function () {
    let a = Number(prompt('The numbers you enter will multiply, enter first number:'));
    let b = Number(prompt('Enter second number:'));
    if (isNaN(a+b)) {
        alert('Invalid key');
        test5();
    } else {
        alert(a * b);
    }
}

let test6 = function () {
    document.getElementById("t6").innerHTML = 'Wait 3 seconds!';
    setTimeout("alert('Awesome, move on!')", 3000);
}

let test7 = function () {
    let numberArray = new Array(3, 5, 9, 19, 33, 39);
    alert('9, 3, 19, 33, 5, 39, The highest number is: ')
    alert(Math.max(...numberArray));
}

let test8 = function () {
    let array1 = ["John", " dOE", " Matthew", " Chris", " MAdonna", " BEYonce"];
    let array2 = [];
    document.getElementById("t8.1").innerHTML = array1.toString();
    alert('Converting elements at odd index in "Upper Case", and elements at even index to "lower case"!');
    alert('Hold on a little.')
    for (let i = 0; i < array1.length; i++) {
        if (i % 2 != 0) {
            array2[i] = array1[i].toUpperCase();
        }
        else {
            array2[i] = array1[i].toLowerCase();
        }
    }
    setTimeout(function() { document.getElementById("t8.2").innerHTML = array2.toString(); }, 3000);
}
