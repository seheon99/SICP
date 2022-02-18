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
		// 오차의 크기를 x의 크기로 나누어 상대 오차를 구하고 이 값이 0.0001보다 작은지를 구한다.
		// 이를 통해 언제나 guess의 제곱은 x와 0.01% 미만의 오차가 있는 값을 얻을 수 있다.
		// 하지만 10보다 큰 값이 x로 들어온다면 이전보다 큰 오차가 발생한다.
		// 따라서 10보다 큰 값은 이전의 수식을 그대로 사용한다.
		return (
			x < 10
			? abs(square(guess) - x) / abs(x) < 0.0001
			: abs(square(guess) - x) < 0.001
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
	
	console.log(`Original version:`);
	console.log(`sqrt(0.00001) = ${sqrt(0.00001)}, square(sqrt(0.00001)) = ${square(sqrt(0.00001))}`);
	console.log(`sqrt(2147483647) = ${sqrt(2147483647)}, square(sqrt(2147483647)) = ${square(sqrt(2147483647))}`);
}