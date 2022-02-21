{
	function abs(x) {
		return x >= 0 ? x : - x;
	}

	function square(x) {
		return x * x;
	}

	function is_good_enough(guess, x) {
		// x의 크가와 상관없이 guess의 제곱과 x의 차이가 0.001보다 작은지를 구하므로
		// x가 0.001 이라면 guess의 제곱이 x와 두배 가까운 차이가 나더라도 guess를 채택하게 되는 문제가 발생한다.
		return abs(square(guess) - x) < 0.001;
	}

	function average(x, y) {
		return (x + y) / 2;
	}

	function improve(guess, x) {
		return average(guess, x / guess);
	}

	function sqrt_iter(guess, x) {
		return is_good_enough(guess, x)
					 ? guess
					 : sqrt_iter(improve(guess, x), x);
	}

	function sqrt(x) {
		return sqrt_iter(1, x);
	}

	console.log(`Original version:`);
	console.log(`sqrt(0.00001) = ${sqrt(0.00001)}, square(sqrt(0.00001)) = ${square(sqrt(0.00001))}`);
	console.log(`sqrt(2147483647) = ${sqrt(2147483647)}, square(sqrt(2147483647)) = ${square(sqrt(2147483647))}`);
}

{
	function abs(x) {
		return x >= 0 ? x : - x;
	}

	function square(x) {
		return x * x;
	}

	function is_good_enough(guess, x) {
		// 이전에 얻은 guess 값과 다음 guess 값의 차이가 0.00001 보다 작다면 충분히 정확하다고 판단.
		return (
			abs(improve(guess, x) - guess) < 0.00001
		);
	}

	function average(x, y) {
		return (x + y) / 2;
	}

	function improve(guess, x) {
		return average(guess, x / guess);
	}

	function sqrt_iter(guess, x) {
		return is_good_enough(guess, x)
					 ? guess
					 : sqrt_iter(improve(guess, x), x);
	}

	function sqrt(x) {
		return sqrt_iter(1, x);
	}

	console.log(`Improved version:`);
	console.log(`sqrt(0.00001) = ${sqrt(0.00001)}, square(sqrt(0.00001)) = ${square(sqrt(0.00001))}`);
	console.log(`sqrt(2147483647) = ${sqrt(2147483647)}, square(sqrt(2147483647)) = ${square(sqrt(2147483647))}`);
}
