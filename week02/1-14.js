function count_change(amount) {
	return cc(amount, 5);
}

let depth = 0;

function cc(amount, kinds_of_coins) {
	let log = '';
	let return_value;

	if (depth) {
		for (let i = 0; i < depth; i++) {
			log += '\t';
		}
	}
	log += `cc(${amount}, ${kinds_of_coins})`;

	if (amount === 0) {
		return_value = 1;
	} else if (amount < 0 || kinds_of_coins === 0) {
		return_value = 0;
	} else {
		depth += 1;
		return_value = cc(amount, kinds_of_coins - 1) + cc(amount - first_denomination(kinds_of_coins), kinds_of_coins);
		depth -= 1;
	}
	log += ` = ${return_value}`;
	console.log(log);
	return (return_value);
}

function first_denomination(kinds_of_coins) {
	return kinds_of_coins === 1 ? 1
			 : kinds_of_coins === 2 ? 5
			 : kinds_of_coins === 3 ? 10
			 : kinds_of_coins === 4 ? 25
			 : kinds_of_coins === 5 ? 50
			 : 0;
}

// > count_change(11);
// [Log] 					cc(11, 0) = 0
// [Log] 						cc(10, 0) = 0
// [Log] 							cc(9, 0) = 0
// [Log] 								cc(8, 0) = 0
// [Log] 									cc(7, 0) = 0
// [Log] 										cc(6, 0) = 0
// [Log] 											cc(5, 0) = 0
// [Log] 												cc(4, 0) = 0
// [Log] 													cc(3, 0) = 0
// [Log] 														cc(2, 0) = 0
// [Log] 															cc(1, 0) = 0
// [Log] 															cc(0, 1) = 1
// [Log] 														cc(1, 1) = 1
// [Log] 													cc(2, 1) = 1
// [Log] 												cc(3, 1) = 1
// [Log] 											cc(4, 1) = 1
// [Log] 										cc(5, 1) = 1
// [Log] 									cc(6, 1) = 1
// [Log] 								cc(7, 1) = 1
// [Log] 							cc(8, 1) = 1
// [Log] 						cc(9, 1) = 1
// [Log] 					cc(10, 1) = 1
// [Log] 				cc(11, 1) = 1
// [Log] 						cc(6, 0) = 0
// [Log] 							cc(5, 0) = 0
// [Log] 								cc(4, 0) = 0
// [Log] 									cc(3, 0) = 0
// [Log] 										cc(2, 0) = 0
// [Log] 											cc(1, 0) = 0
// [Log] 											cc(0, 1) = 1
// [Log] 										cc(1, 1) = 1
// [Log] 									cc(2, 1) = 1
// [Log] 								cc(3, 1) = 1
// [Log] 							cc(4, 1) = 1
// [Log] 						cc(5, 1) = 1
// [Log] 					cc(6, 1) = 1
// [Log] 							cc(1, 0) = 0
// [Log] 							cc(0, 1) = 1
// [Log] 						cc(1, 1) = 1
// [Log] 						cc(-4, 2) = 0
// [Log] 					cc(1, 2) = 1
// [Log] 				cc(6, 2) = 2
// [Log] 			cc(11, 2) = 3
// [Log] 						cc(1, 0) = 0
// [Log] 						cc(0, 1) = 1
// [Log] 					cc(1, 1) = 1
// [Log] 					cc(-4, 2) = 0
// [Log] 				cc(1, 2) = 1
// [Log] 				cc(-9, 3) = 0
// [Log] 			cc(1, 3) = 1
// [Log] 		cc(11, 3) = 4
// [Log] 		cc(-14, 4) = 0
// [Log] 	cc(11, 4) = 4
// [Log] 	cc(-39, 5) = 0
// [Log] cc(11, 5) = 4
// < 4
