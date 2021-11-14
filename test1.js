/**
 * Direction:
 * Return a formatted array of sessions with list of classes & students
 * 
 * Expected Result:
 * [
 *  {
 *    session_id: 1,
 *    time: '09:00',
 *    classes: [
 *      {
 *        class_id: 1,
 *        name: 'A',
 *        students: [
 *          { student_id: 1, name: 'Adi' },
 *          { student_id: 1, name: 'Budi' },
 *        ],
 *      },
 *      {
 *        class_id: 2,
 *        name: 'B',
 *        students: [
 *          { student_id: 3, name: 'Bayu' },
 *          { student_id: 4, name: 'Dharma' },
 *        ],
 *      },
 *    ],
 *  },
 *  {
 *    session_id: 2,
 *    time: '10:00',
 *    classes: [
 *      {
\=]\ *        class_id: 3,
 *        name: 'C',
 *        students: [
 *          { student_id: 5, name: 'Surya' },
 *          { student_id: 6, name: 'Maha' },
 *        ],
 *      },
 *      {
 *        class_id: 4,
 *        name: 'D',
 *        students: [
 *          { student_id: 7, name: 'Dede' },
 *          { student_id: 8, name: 'Edi' },
 *        ],
 *      },
 *    ],
 *  },
 * ];
 */

const sessions = [
  { session_id: 1, time: '09:00', student: { student_id: 1, name: 'Adi' }, class: { class_id: 1, name: 'A' } },
  { session_id: 2, time: '10:00', student: { student_id: 5, name: 'Surya' }, class: { class_id: 3, name: 'C' } },
  { session_id: 2, time: '10:00', student: { student_id: 8, name: 'Edi' }, class: { class_id: 4, name: 'D' } },
  { session_id: 2, time: '10:00', student: { student_id: 7, name: 'Dede' }, class: { class_id: 4, name: 'D' } },
  { session_id: 1, time: '09:00', student: { student_id: 3, name: 'Bayu' }, class: { class_id: 2, name: 'B' } },
  { session_id: 1, time: '09:00', student: { student_id: 2, name: 'Budi' }, class: { class_id: 1, name: 'A' } },
  { session_id: 1, time: '09:00', student: { student_id: 4, name: 'Dharma' }, class: { class_id: 2, name: 'B' } },
  { session_id: 2, time: '10:00', student: { student_id: 3, name: 'Maha' }, class: { class_id: 3, name: 'C' } },
];

function result(sessions) {

	let group_session = groupItemBy(sessions,'session_id');
	let arr2 = [];
	let kelas = [];
	let murid = [];
      sessions.forEach((element) => { // remove duplicate name
        let match = arr2.find((r) => r.session_id == element.session_id);
        if (match) {
        } else {
          arr2.push({ session_id: element.session_id, time: element.session_id, classes:[] });
        }
      });

      arr2.map((item) => {
      		group_session[item.session_id].map((e) =>  {
      			if(kelas.indexOf(e.class.class_id) === -1){
      				kelas.push(e.class.class_id);
      				item.classes.push({'class_id' :e.class.class_id, 'name' :e.class.name,'students':[]});
      			}

      			
      		});
      		// console.log(item.classes[0].students);
      		for(var key in item.classes){
      			group_session[item.session_id].map((e) =>  {
      				if(murid.indexOf(e.student.student_id) === -1){
	      				murid.push(e.student.student_id);
	      				item.classes[key].students.push({'student_id' :e.student.student_id, 'name' :e.student.name});
	      			}
	
      			});
      		}
      		
      });

	return arr2;
}

function groupBy(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(rv[x[key]]);
    return rv;
  }, {});
};

function groupItemBy(array, property) {
    var hash = {},
        props = property.split('.');
    for (var i = 0; i < array.length; i++) {
        var key = props.reduce(function(acc, prop) {
            return acc && acc[prop];
        }, array[i]);
        if (!hash[key]) hash[key] = [];
        hash[key].push(array[i]);
    }
    return hash;
}

function groupBy2(arr, props) {
        var newArr = [],
            types = {},
            newItem, i, j, cur;
        keys = props.split('.');
        for (i = 0, j = arr.length; i < j; i++) {
            cur = arr[i];
            if(cur)
            for (var k=0;k< keys.length ;k++) {
            	if (!(cur[keys[k]] in types)) {
            		console.log(cur[keys[k]]);
	                types[k] = { [keys[k]]: cur[keys[k]]};
	                newArr.push(types[k]);
	            }
	            console.log(newArr);
            }
            // var key = keys.reduce(function(acc,prop){
            // 	console.log(prop);
            // 	if (!(cur[acc] in types)) {
	           //      types[cur[acc]] = { [acc]: cur[acc], data: [] };
	           //      newArr.push(types[cur[acc]]);
	           //  }
	           //  types[cur[acc]].data.push(cur);
            // });
            
            
        }
        return newArr;
}

function groupArray(arr, groupBy, keepProperty) {
        let rArr = [], i;
        arr.forEach(item => {
            if((i = rArr.findIndex(obj => obj[groupBy] === item[groupBy])) !== -1)
                rArr[i][`${keepProperty}s`].push(item[keepProperty]);
            else rArr.push({
                [groupBy]: item[groupBy],
                [`${keepProperty}s`]: [item[keepProperty]]
            });
        });
        return rArr;
    }

// let group_session = groupBy(sessions,'session_id');
// console.log(group_session);
// let grouped = groupItemBy(group_session[1], 'class.class_id');

// let grouped2 = groupItemBy(group_session[2], 'class.class_id');

// console.log(grouped);
console.log(result(sessions));

