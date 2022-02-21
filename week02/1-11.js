function f_recursive(n) {
	return (
		n < 3
		? n
		: f(n - 1) + 2 * f(n - 2) + 3 * f(n - 3)
	);
}

function f_iterative(n) {
	return (
		n < 3
		? n
		: f_iterative_iter(2, 1, 0, n - 2)
	);
}

function f_iterative_iter(n1, n2, n3, count) {
	return (
		count === 0
		? n1
		: f_iterative_iter(n1 + 2 * n2 + 3 * n3, n1, n2, count - 1)
	);
}
