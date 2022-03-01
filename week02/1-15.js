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

function p(x) {
	console.log(`p(${x})`);
	return 3 * x - 4 * cube(x);
}

function sine(angle) {
	return (
		abs(angle) <= 0.1
		? angle
		: p(sine(angle / 3))
	);
}

// Question 1.
//
// > sine(12.15);
// [Log] p(0.049999999999999996)
// [Log] p(0.1495)
// [Log] p(0.4351345505)
// [Log] p(0.9758465331678772)
// [Log] p(-0.7895631144708228)
//  < -0.39980345741334
//
// 총 5번.

// Question 2.
//
// sine(angle) 은
// abs(angle) 이 0.1 보다 작거나 같을 때 탈출하고
// abs(angle) 이 0.1 보다 클 때 sine(angle / 3) 을 다시 호출하므로
// 총 ⌈log_3(10 * angle)⌉ 번 반복한다.
// recursive process 형식을 사용하므로 공간 또한 ⌈log_3(10 * angle)⌉ 만큼 증가한다.
