// Exercise #1_Part 2
// https://github.com/generation-org/JS/tree/master/JS-03%20-%20Control%20Flow
// PLEASE open in Node.js https://replit.com/languages/javascript

const getDayNumber = (yearDayNumber) => {
	const minusDay = yearDayNumber - 1
	const janFirstDayNumber = minusDay % 7
		if (janFirstDayNumber == 0) {
			return "Monday";
			}
		if (janFirstDayNumber == 1) {
			return "Tuesday";
			}
		if (janFirstDayNumber == 2) {
			return "Wednesday";
			}
		if (janFirstDayNumber == 3) {
			return "Thursday";
			}
		if (janFirstDayNumber == 4) {
			return "Friday";
			}
		if (janFirstDayNumber == 5) {
			return "Saturday";
			}
		else {
			(janFirstDayNumber == 6)
			return "Sunday";
		}
}

console.log("You are on", getDayNumber(7))