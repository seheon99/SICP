function sum(term, a, next, b) {
  return (
    a > b
    ? 0
    : term(a) + sum(term, next(a), next, b)
  );
}

function integral(f, a, b, n) {
  const h = (b - a) / n;

  function y(k) {
    return f(a + k * h);
  }

  function term(k) {
    return (
      k === 0 || k === n
      ? y(k)
      : k % 2 == 0
        ? 2 * y(k)
        : 4 * y(k)
    );
  }

  function next(k) {
    return k + 1;
  }

  return h / 3 * sum(term, 0, next, n);
}
