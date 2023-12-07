function logAtleast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtleast5(1);

// O(n), because it grows with n, it runs min of 5  times but n is larger it'll run n times making it linear