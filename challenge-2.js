function minMax(arr) {
    let minMax = [];
    minMax.push(Math.min(...arr));
    minMax.push(Math.max(...arr));
    return minMax
  }