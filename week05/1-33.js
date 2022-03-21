function filtered_accumulate(filter, combiner, null_value, term, a, next, b) {
  function iter(a, result) {
    return (
      a > b
      ? result
      : filter(a)
        ? iter(next(a), combiner(result, term(a)))
        : iter(next(a), result)
    );
  }
  return iter(a, null_value);
}

function is_prime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}

function sum_of_the_squares_of_the_prime_numbers(a, b) {
  function sum(a, b) {
    return a + b;
  }

  function identity(x) {
    return x;
  }

  function increase(x) {
    return x + 1;
  }

  return filtered_accumulate(is_prime, sum, 0, identity, a, increase, b);
}

function is_coprime(a, b) {
  function gcd(a, b) {
    return (
      a === b || b === 0
      ? 0
      : a === b
        ? a
        : a > b
          ? gcd(a - b, b)
          : gcd(a, b - a)
    );
  }
  return gcd(a, b) === 1
}

function product_of_coprimes_with(n) {
  function product(a, b) {
    return a * b;
  }

  function identity(x) {
    return x;
  }

  function increase(x) {
    return x + 1;
  }

  return filtered_accumulate(is_coprime, product, 1, identity, a, increase, b);
}
