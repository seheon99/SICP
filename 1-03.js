function square(x) {
	return x * x;
}

function sum(n1, n2, n3) {
	return (
		n1 < n2 && n1 < n3 ?
			square(n2) + square(n3) :
			n2 < n3 && n2 < n1 ?
				square(n1) + square(n3) :
				square(n1) + square(n2)
	);
}
