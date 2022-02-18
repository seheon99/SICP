function cbrt_iter(guess, x) {
	return (
		is_good_enough(guess, x)
		? guess
		: cbrt_iter(improve(guess, x), x)
	);
}

function improve(guess, x) {
	return (x / (guess * guess) + 2 * guess) / 3;
}

function is_good_enough(guess, x) {
	return abs(cube(guess) - x) < 0.001;
}

function abs(x) {
	return (
		x < 0
		? -x
		: x
	);
}

function cube(x) {
	return x * x * x;
}

function cbrt(x) {
	return cbrt_iter(1, x);
}