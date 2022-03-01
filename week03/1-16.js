function fast_expt(a, b, n) {
	return (
		n === 0
		? a
		: n % 2 === 0
		? fast_expt(a, b * b, n / 2)
		: fast_expt(a * b, b, n - 1)
	);
}

function expt(b, n) {
	return fast_expt(1, b, n);
}
