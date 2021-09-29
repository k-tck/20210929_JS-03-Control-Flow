// Exercise #1_Part 3
// https://github.com/generation-org/JS/tree/master/JS-03%20-%20Control%20Flow
// PLEASE open in Node.js https://replit.com/languages/javascript

const businessHours = (yearDayNumber, hourNumber) => {
	const minusDay = yearDayNumber - 1
	const checkOper = minusDay % 7
		if ((checkOper == 0) && (hourNumber >= 9 && hourNumber <=18)) {
			return "We are OPEN NOW (Mon 9am to 5pm)";
			}
		if ((checkOper == 1) && (hourNumber >= 9 && hourNumber <=18)) {
			return "We are OPEN NOW (Thur 9am to 5pm)";
			}
		if ((checkOper == 2) && (hourNumber >= 9 && hourNumber <=18)) {
			return "We are OPEN NOW (Wed 9am to 5pm)";
			}
		if ((checkOper == 3) && (hourNumber >= 9 && hourNumber <=18)) {
			return "We are OPEN NOW (Thur 9am to 5pm)";
			}
		if ((checkOper == 4) && (hourNumber >= 9 && hourNumber <=18)) {
			return "We are OPEN NOW (Fri 9am to 5pm)";
			}
		if (checkOper == 5) {
			return "Sorry, we are CLOSE NOW! Open Weekday, 9am to 6pm";
			}
		else {
			(checkOper == 6)
			return "Sorry, we are CLOSE NOW! Open Weekday, 9am to 6pm";
		}
}

	
console.log(businessHours(0,18));