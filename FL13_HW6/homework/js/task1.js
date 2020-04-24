let check = +prompt(`Enter a value check:`, `example:100`);
let tip = +prompt(`Enter a value tip:`, `example:15`);
let tipAmount, totalSum,a=100,b=2;
if (check !== isNaN && tip !== isNaN && check >= 0 && tip >= 0 && tip < a) {
    tipAmount = check * tip / a;
    tipAmount = tipAmount.toFixed(b);
    tipAmount = Number(tipAmount);
    totalSum = tipAmount + check;
    totalSum = totalSum.toFixed(b);

    alert(`\nCheck number: ${check} 
        \nTip: ${tip}% 
        \nTip amount: ${tipAmount} 
        \nTotal sum to pay: ${totalSum}`);
} else {
    alert(`Invalid input data`);
}