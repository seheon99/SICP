function product_recursive(term, a, next, b) {
  return (
    a > b
    ? 1
    : term(a) * product_recursive(term, next(a), next, b)
  );
}

function product_iterative(term, a, next, b) {
  function iter(a, result) {
    return (
      a > b
      ? result
      : iter(next(a), result * term(a))
    );
  }
  return iter(a, 1);
}

function product(term, a, next, b) {
  return product_iterative(term, a, next, b);
}

function factorial(n) {
  function identity(x) {
    return x;
  }
  function increase(x) {
    return x + 1;
  }
  return product(identity, 1, increase, n);
}

function pi_product(n) {
  function term(n) {
    return (
      n % 2 == 0
      ? (n + 1) / n
      : n / (n + 1)
    )
  }
  function increase(n) {
    return n + 1;
  }
  return 4 * product(term, 2, increase, n);
}
