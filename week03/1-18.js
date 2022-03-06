function double(x) {
	return x + x;
}

function halve(x) {
	return x / 2;
}

function is_even(x) {
	return x % 2 === 0;
}

function fast_times_iter(sum, a, b) {
	return (
		b === 0
		? 0
		: b === 1
		? sum + a
		: is_even(b)
		? fast_times(sum, double(a), halve(b)) // grows logarithmically with b in number of steps
		: fast_times(sum + a, a, b - 1) // generate iterative process
	);
}

function fast_times(a, b) {
	return fast_times_iter(0, a, b);
}
