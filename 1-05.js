function p() { return p(); }

function test(x, y) {
	return x === 0 ? 0 : y;
}

test(0, p());

// p 는 evaluate 될 수 없는 함수이므로 interpreter가  applicative-order evaluation이면 무한 루프에 빠지고 normal-order evaluation이면 0 으로 evaluate 된다.
