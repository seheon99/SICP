function abs(x) {
  return (
    x > 0
    ? x
    : -x
  );
}

const tolerance = 0.00001;

function fixed_point(f, first_guess) {
	function close_enough(x, y) {
		return abs(x - y) < tolerance;
	}
	function try_with(guess) {
		const next = f(guess);
		return (
			close_enough(guess, next)
			? next
			: try_with(next)
		);
	}
  return try_with(first_guess);
}

// phi = golden ratio
// phi^2 = phi + 1 (from section 1.2.2)
// phi = 1 + 1 / phi (because phi is not 0)

function golden_ratio() {
  return fixed_point((phi) => 1 + 1 / phi, 1);
}
