function conditional(predicate, then_clause, else_clause) {
	return predicate ? then_clause : else_clause;
}

function sqrt_iter(guess, x) {
	return conditional(is_good_enough(guess, x), guess, sqrt_iter(improve(guess, x), x));
}

// Interpreter가 applicative-order 이기 때문에 sqrt_iter 함수 내부에서 sqrt_iter 을 인자로 받는 conditional 함수를 조건 없이 호출한다면 무한 루프에 빠진다.
