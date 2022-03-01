function fib(n) {
	return fib_iter(1, 0, 0, 1, n);
}

function fib_iter(a, b, p, q, count) {
	return (
		count === 0
		? b
		: is_even(count)
		? fib_iter(
			a,
			b,
			p * p + q * q,
			2 * p * q + q * q,
			count / 2
		  )
		: fib_iter(b * q + a * q + a * p, b * p + a * q, p, q, count - 1)
	);
}

//          T_pq
// (a, b) --------> (bq + aq + ap, bp + aq)
//                  ((p + q)a + qb, qa + pb)
//
//        ⌈ p + q  q ⌉
// T_pq = |          |
//        ⌊   q    p ⌋
//
//          T_pq                              T_pq
// (a, b) --------> (bq + aq + ap, bp + aq) --------> (a', b')
//
//         T_p'q'
// (a, b) --------> (a', b')
//
//                        ⌈ p + q  q ⌉   ⌈ p + q  q ⌉   ⌈ pp + 2pq + 2qq   2pq + qq ⌉
// T_p'q' = T_pq · T_pq = |          | · |          | = |                           |
//                        ⌊   q    p ⌋   ⌊   q    p ⌋   ⌊   2pq + qq        pp + qq ⌋
//
// p' = pp + qq
// q' = 2pq + qq
