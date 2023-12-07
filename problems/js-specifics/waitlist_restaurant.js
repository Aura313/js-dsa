class Waitlist {
    constructor() {
      this.waitlist = []; // Array to store customer entries in the waitlist
      this.tables = [];   // Array to store table information
    }
  
    // Add a customer party to the waitlist
    addCustomerParty(customer) {
      this.waitlist.push(customer);
    }
  
    // Remove a customer party from the waitlist
    removeCustomerParty(customer) {
      const index = this.waitlist.indexOf(customer);
      if (index !== -1) {
        this.waitlist.splice(index, 1);
      }
    }
  
    // Add table information to the tables array
    addTable(table) {
      this.tables.push(table);
    }
  
    // Find the closest matching table for a party size
    findClosestTable(partySize) {
      // Sort the tables by the absolute difference between partySize and tableSize
      this.tables.sort((a, b) => Math.abs(a.size - partySize) - Math.abs(b.size - partySize));
  
      // Return the table with the smallest absolute difference
      return this.tables[0];
    }
  
    // Seat the next waiting party at an available table
    seatNextParty() {
      if (this.waitlist.length === 0 || this.tables.length === 0) {
        return; // No parties in the waitlist or no available tables
      }
  
      const nextParty = this.waitlist.shift(); // Get the next waiting party
      const closestTable = this.findClosestTable(nextParty.partySize);
  
      if (closestTable) {
        closestTable.isOccupied = true;
        nextParty.isSeated = true;
        console.log(`Seated party of ${nextParty.partySize} at table ${closestTable.tableNumber}`);
      }
    }
  }
  
  // Example usage:
  const waitlist = new Waitlist();
  
  // Define customer parties
  const customer1 = { partySize: 3, isSeated: false };
  const customer2 = { partySize: 2, isSeated: false };
  const customer3 = { partySize: 4, isSeated: false };
  
  // Define available tables
  const table1 = { tableNumber: 1, size: 2, isOccupied: false };
  const table2 = { tableNumber: 2, size: 4, isOccupied: false };
  const table3 = { tableNumber: 3, size: 6, isOccupied: false };
  
  // Add tables to the waitlist
  waitlist.addTable(table1);
  waitlist.addTable(table2);
  waitlist.addTable(table3);
  
  // Add customers to the waitlist
  waitlist.addCustomerParty(customer1);
  waitlist.addCustomerParty(customer2);
  waitlist.addCustomerParty(customer3);
  
  // Seat the next waiting party
  waitlist.seatNextParty();
  
  // Check the status after seating
  console.log(waitlist.waitlist); // Remaining parties in the waitlist
  console.log(waitlist.tables);   // Tables with updated occupancy
  