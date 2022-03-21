function f(g) {
	return g(2);
}

// f(f) = f(2) -> TypeError: g is not a function. (In 'g(2)', 'g' is 2)
