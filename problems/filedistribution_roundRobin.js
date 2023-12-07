function distributeFilesEqually(fileLists) {
  // Initialize data structures
  const finalDistribution = [];
  const queueIndices = new Array(fileLists.length).fill(0);
  let allQueuesEmpty = false;

  // Perform round-robin distribution
  while (!allQueuesEmpty) {
    allQueuesEmpty = true; // Assume all queues are empty initially

    for (let i = 0; i < fileLists.length; i++) {
      if (queueIndices[i] < fileLists[i].length) {
        // If the queue is not empty, dequeue and distribute the next file
        finalDistribution.push(fileLists[i][queueIndices[i]]);
        queueIndices[i]++;
        allQueuesEmpty = false; // At least one queue is not empty
      }
    }
  }

  return finalDistribution;
}

// Example input: lists of files
const fileLists = [
  ["file1", "file2", "file3"],
  ["file4", "file5"],
  ["file6", "file7", "file8", "file9"]
];

// Get the fair distribution of files
const fairDistribution = distributeFilesEqually(fileLists);

// Print the fair distribution of files
console.log(fairDistribution);
