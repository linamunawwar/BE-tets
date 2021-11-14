/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
var prefix = new Array();
  for (var i = 0;i<words.length; i++) {
  	this_prefix = words[i].substr(0,2);
  	if (prefix.includes(this_prefix) == false){
  		prefix.push(this_prefix);
  	}
  }
  if(prefix.length == 1){
		return prefix[0];
	}else{
		return prefix;
	}
}

console.log(result(words));
