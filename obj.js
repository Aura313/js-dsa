let instructor = {
  firstName: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

console.log("Keys: ", Object.keys(instructor));
console.log("Value: ", Object.values(instructor));
console.log("Entries: ", Object.entries(instructor));
console.log("hasOwnProp: ", instructor.hasOwnProperty("firstName"));
