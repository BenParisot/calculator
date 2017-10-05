var add = function(number1, number2) {
	return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter another number: :"));

alert(add(number1, number2));

var subtract = function(number1, number2) {
	return number1 - number2;
};

var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter another number: :"));

alert(subtract(number1, number2));

var divide = function(number1, number2) {
	return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter another number: :"));

alert(divide(number1, number2));

var multiply = function(number1, number2) {
	return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter another number: :"));

alert(multiply(number1, number2));

var mass = parseInt(prompt("What is your weight?"));
var heightSquare = parseInt(prompt("What is your height"));

var BMI = function(mass, heightSquare) {
	return mass / (heightSquare * heightSquare);
};

alert(BMI(mass, heightSquare));
