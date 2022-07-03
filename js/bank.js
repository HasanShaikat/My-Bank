document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositValueText = depositInput.value;
    const depositValueTotal = parseFloat(depositValueText);

    const depositTotal = document.getElementById('deposit-total');
    const currentDepositAmountText = depositTotal.innerText;
    const currentDepositAmount = parseFloat(currentDepositAmountText);
    const newDepositAmount = currentDepositAmount + depositValueTotal
    depositTotal.innerText = newDepositAmount;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceTotalText);

    const balanceTotalAmount = balanceAmount + depositValueTotal;

    balanceTotal.innerText = balanceTotalAmount;


    // clear the deposit input field
    depositInput.value = '';
});

// Withdraw option
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput =  document.getElementById('withdraw-input');
    const withdrawValueText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawValueText);
    
    // set withdraw Total

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    const newWithdrawTotal = withdrawTotalAmount + withdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;


    // update withdraw balance total 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const newBalanceAmount = parseFloat(previousBalanceText);

    const withdrawBalance = newBalanceAmount - withdrawAmount;

    balanceTotal.innerText = withdrawBalance;




    // clear withdraw input field
    withdrawInput.value = '';
})