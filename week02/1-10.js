// Ackermann's function
function A(x, y) {
	return (
		y === 0
		? 0
		: x === 0
		? 2 * y
		: y === 1
		? 2
		: A(x - 1, A(x, y - 1))
	);
}

A(1, 10); // 1024 = 2^10
A(2, 4); // 65536 = 2^16
A(3, 3); // 65536 = 2^16

function f(n) {
	return A(0, n);
}

//                  ┌ 0  (if n = 0)
// f(n) = A(0, n) = ├
//                  └ 2n (otherwise)
// f(n) = 2n

function g(n) {
	return A(1, n);
}

//                  ┌ 0                                           (if n = 0)
// g(n) = A(1, n) = ├ 2                                           (if n = 1)
//                  └ A(0, A(1, n - 1)) = f(g(n - 1)) = 2g(n - 1) (otherwise)
// g(n) = 2^n

function h(n) {
	return A(2, n);
}

//                  ┌ 0                                            (if n = 0)
// h(n) = A(2, n) = ├ 2                                            (if n = 1)
//                  └ A(1, A(2, n - 1)) = g(h(n - 1)) = 2^h(n - 1) (otherwise)
// h(0) = 0, h(1) = 2, h(n + 1) = 2^h(n) (n >= 1)
