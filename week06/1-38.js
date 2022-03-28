function cont_frac(n, d, k) {
  function iter(i, sum) {
    return (
      i <= 0
      ? sum
      : iter(i - 1, n(i) / (d(i) + sum))
    );
  }
  return iter(k, 0);
}

function euler_number() {
  function d(i) {
    return (
      i % 3 === 2
      ? (i + 1) * 2 / 3
      : 1
    );
  }
  return cont_frac(i => 1, d, 100) + 2;
}
