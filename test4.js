/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  	count = Math.max.apply(Math, numbers);
	var missing = new Array();

	for (var i = 1; i <= count; i++) {
	  if (numbers.indexOf(i) == -1) {
	    missing.push(i);
	  }
	}
	if(missing.length == 1){
		return missing[0];
	}else{
		return missing;
	}
}

console.log(result(numbers));
