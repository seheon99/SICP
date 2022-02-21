function plus(a, b) { return a + b; }

function minus(a, b) { return a - b; }

function a_plus_abs_b(a, b) {
	return (b >= 0 ? plus : minus)(a, b);
}

// | In programming, we deal with two kinds of elements: functions and data. Later we will discover that they are really not so distinct.
