function abs(x, y) {
  return Math.abs(x, y);
}

function display(text) {
  return console.log(text);
}

const tolerance = 0.00001

function cont_frac_recursive(n, d, k) {
  function fraction(i) {
    return (
      i > k
      ? 0
      : n(i) / (d(i) + fraction(i + 1))
    );
  }
  return fraction(1);
}

function cont_frac_iterative(n, d, k) {
  function iter(i, sum) {
    return (
      i <= 0
      ? sum
      : iter(i - 1, n(i) / (d(i) + sum))
    );
  }
  return iter(k, 0);
}

function cont_frac(n, d, k) {
  return cont_frac_iterative(n, d, k);
}

function golden_ratio() {
  function close_enough(x, y) {
    return abs(x - y) < tolerance;
  }
  function try_with(k, current) {
    display(`${k} times, 1 / phi = ${current}`); // 13 times
    const next = cont_frac(i => 1, i => 1, k + 1);
    return (
      close_enough(current, next)
      ? next
      : try_with(k + 1, next)
    );
  }
  return try_with(1, 1);
}
