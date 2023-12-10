
// Step 1: Calculate the total number of months
var totalMonths = finances.length;

// console.log(totalMonths);


// Step 2: Calculate the net total amount of Profit/Losses
var totalProfitLoss = 0;
for (var i = 0; i < totalMonths; i++) {
  

  //console.log(totalProfitLoss)
  
  totalProfitLoss += parseInt(finances[i][1]);
  // console.log(totalProfitLoss)
}



// Step 3: Calculate the average of changes in Profit/Losses
var totalChange = 0;
for (var i = 1; i < totalMonths; i++) {
  var currentProfitLoss = parseInt(finances[i][1]);
  // console.log(currentProfitLoss)
  var previousProfitLoss = parseInt(finances[i - 1][1]);
  // console.log(previousProfitLoss)
  totalChange += currentProfitLoss - previousProfitLoss;
}
var averageChange = totalChange / (totalMonths - 1);



// Step 5: Find the greatest increase and decrease in Profit/Losses
var greatestIncrease = { date: '', amount: -Infinity };
var greatestDecrease = { date: '', amount: Infinity };

for (var i = 1; i < totalMonths; i++) {
  var date = finances[i][0];
  var currentProfitLoss = parseInt(finances[i][1]);
  var previousProfitLoss = parseInt(finances[i - 1][1]);
  var change = currentProfitLoss - previousProfitLoss;

  if (change > greatestIncrease.amount) {
    greatestIncrease.date = date;
    greatestIncrease.amount = change;
  }

  if (change < greatestDecrease.amount) {
    greatestDecrease.date = date;
    greatestDecrease.amount = change;
  }
}

// Step 6: Display the financial analysis
console.log("Financial Analysis");
console.log("------------------");
console.log("Total Months:", totalMonths);
console.log("Total: $" + totalProfitLoss.toLocaleString()); // Format number with commas
console.log("Average Change: $" + averageChange.toFixed(2));
console.log(
  "Greatest Increase in Profits/Losses:",
  greatestIncrease.date,
  "($" + greatestIncrease.amount.toLocaleString() + ")"
);
console.log(
  "Greatest Decrease in Profits/Losses:",
  greatestDecrease.date,
  "($" + greatestDecrease.amount.toLocaleString() + ")"
);
