// Exercise #1_Part 1
// https://github.com/generation-org/JS/tree/master/JS-03%20-%20Control%20Flow
// PLEASE open in Node.js https://replit.com/languages/javascript

const businessHours = (dayNumber, hourNumber) => {
	if ((dayNumber >= 1 && dayNumber <=5) 
		&& (hourNumber >= 9 && hourNumber <=18)) {;
		return true;
	}
	else {
		return false;		
	}
}


console.log(businessHours(5,18));