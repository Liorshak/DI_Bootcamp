let balance = 10000;
let vat = 0.17;
let lastMonthRevenueVNotInclude = 20000;
let lastMonthExpenseVNotInclude = 10000;

let vatReductionRevenue = () => lastMonthRevenueVNotInclude / (1 + vat);
let vatAddingExpense = () => lastMonthExpenseVNotInclude * (1 + vat);
let balanceUpdate = () => balance + lastMonthRevenueWTax - lastMonthExpenseWTax;

let lastMonthRevenueWTax = vatReductionRevenue();
console.log(lastMonthRevenueWTax);
let lastMonthExpenseWTax = vatAddingExpense();
console.log(lastMonthExpenseWTax);
let endMonthBalance = balanceUpdate();

console.log("Your new balance is: ", endMonthBalance.toFixed(2), " ILS");
