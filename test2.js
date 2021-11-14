/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  var temp = {};
    var result = [];
    for (var i = 0; i < data.length; i++) {
        temp[data[i]] = true;
    }
    for (var key in temp) {
        result.push(key);
    }
    return result;
}

console.log(result(data));
