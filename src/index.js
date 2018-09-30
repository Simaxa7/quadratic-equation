module.exports = function solveEquation(equation) {

	const arrayOfStrings = equation.split(" ");
	const a = Number(arrayOfStrings[0]);
	const b = Number(arrayOfStrings[3] + arrayOfStrings[4]);
	const c = Number(arrayOfStrings[7] + arrayOfStrings[8]);
	const discriminant = Math.sqrt(b * b - 4 * a * c);

	const firstAnswer = Math.round((- b + discriminant) / (2 * a));
	const secondAnswer = Math.round((- b - discriminant) / (2 * a));
	
	return firstAnswer < secondAnswer ? [firstAnswer, secondAnswer] : [secondAnswer, firstAnswer];
}
