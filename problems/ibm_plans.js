function getMinCost(n, k, plans) {
    let costs = new Array(n).fill(0); // Array to hold the cost for each day

    for (let day = 0; day < n; day++) {
        // Filter plans to see which ones are available for the day
        let availablePlans = plans.filter(plan => day + 1 >= plan[0] && day + 1 <= plan[1]);
        // Sort available plans by cost
        availablePlans.sort((a, b) => a[3] - b[3]);
        let dailyCost = 0;
        let coresToRent = k;

        for (let plan of availablePlans) {
            let coresFromPlan = Math.min(coresToRent, plan[2]);
            dailyCost += coresFromPlan * plan[3];
            coresToRent -= coresFromPlan;
            if (coresToRent === 0) break;
        }

        costs[day] = dailyCost;
    }

    // Sum up the costs for all days to get the total cost
    return costs.reduce((acc, cost) => acc + cost, 0);
}

// Example usage:
const n = 5; // Number of days to rent cores
const k = 7; // Number of cores to rent each day
const plans = [[1, 3, 5, 2], [1, 4, 5, 3], [2, 5, 10, 1]]; // Given plans
console.log(getMinCost(n, k, plans)); // Should return the minimum cost
