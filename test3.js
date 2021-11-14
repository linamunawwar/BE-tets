/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function result(data) {
  const newObj = {};
  Object.entries(data).forEach(([k, v]) => {
    if (v === Object(v)) {
      newObj[k] = result(v);
    } else if (v != null) {
      newObj[k] = data[k];
    }
  });
  return newObj;
}

console.log(result(data));
