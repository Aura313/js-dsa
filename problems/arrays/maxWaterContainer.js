// LC - #11

/* ******* BRUTE FORCE SOLUTION  *******
    TC: O(N^2)
    SC: O(1)
*/
const heightsArray = [5];
const heightsArray1 = [4, 8, 1, 2, 3, 9];
const heightsArray2 = [];

const getMaxWaterContainer = function (heights) {
  let maxArea = 0;

  for (let p1 = 0; p1 < heights.length; p1++) {
    for (let p2 = p1 + 1; p2 < heights.length; p2++) {
      const height = Math.min(heights[p1], heights[p2]);
      const width = p2 - p1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};

// console.log(getMaxWaterContainer(heightsArray));

/* ******* OPTIMIZED SOLUTION USING Two-Shifting-Ponters  *******
    TC: O(N)
    SC: O(1)
*/
const getMaxWaterContainerOp = function (heights) {
  let p1 = 0;
  let p2 = heights.length - 1;

  let maxArea = 0;

  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);

    if (heights[p1] <= heights[p2]) {
        p1++;
    } else {
        p2--;
    }
  }
  return maxArea;
};

console.log(getMaxWaterContainerOp(heightsArray1));
