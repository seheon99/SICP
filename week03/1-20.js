function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// In normal-order evaluation of gcd(206, 40)
//    call gcd(206, 40)
//    eval 40 === 0
//    call gcd(40, 206 % 40)
// 1* eval 206 % 40 === 0
//    call gcd(206 % 40, 40 % (206 % 40))
// 2* eval 40 % (206 % 40) === 0
//    call gcd(40 % (206 % 40), (206 % 40) % (40 % (206 % 40)))
// 4* eval (206 % 40) % (40 % (206 % 40)) === 0
//    call gcd((206 % 40) % (40 % (206 % 40)), (40 % (206 % 40)) % ((206 % 40) % (40 % (206 % 40))))
// 7* eval (40 % (206 % 40)) % ((206 % 40) % (40 % (206 % 40))) === 0
// 4* eval (206 % 40) % (40 % (206 % 40))
//
// total 0 + 1 + 2 + 4 + 7 + 4 = 18

// In application-order evaluation of gcd(206, 40)
//    call gcd(206, 40)
//    eval 40 === 0
// 1* call gcd(40, 206 % 40 = 6)
//    eval 6 === 0
// 1* call gcd(6, 40 % 6 = 4)
//    eval 4 === 0
// 1* call gcd(4, 6 % 4 = 2)
//    eval 2 === 0
// 1* call gcd(2, 4 % 2 = 0)
//    eval 0 === 0
//    eval 2
//
// total 1 + 1 + 1 + 1 = 4
