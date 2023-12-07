function logAtMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

logAtMost5(10);

// O(1), because n can be as large as possible it will still run only 5 times