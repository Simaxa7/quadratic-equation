module.exports =function solveEquation(equation) {
  // your implementation

	var arrayOfStrings = equation.split(" ");
	var a = Number(arrayOfStrings[0]);
	var b = Number(arrayOfStrings[3]+arrayOfStrings[4]);
	var c = Number(arrayOfStrings[7]+arrayOfStrings[8]);
	var D=b*b-4*a*c;

	var firstNumber = Math.round((-b+Math.sqrt(D))/(2*a));
	var secondNumber = Math.round((-b-Math.sqrt(D))/(2*a));

	if (firstNumber<secondNumber){
		var newArr =[firstNumber, secondNumber];
	}else{
		var newArr =[secondNumber, firstNumber];
	}


return newArr
}
