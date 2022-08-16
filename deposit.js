document.getElementById('deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositString = depositField.value;
const newDeposit =parseFloat(newDepositString);
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
     const previousDepositTotal= parseFloat(previousDepositTotalString);
     
const currentDeposit = previousDepositTotal+newDeposit;
    depositTotalElement.innerText = currentDeposit; 
    

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
     const previousBalanceTotal= parseFloat(previousBalanceTotalString);
     console.log(previousBalanceTotal)
     const currentBalance = previousBalanceTotal+newDeposit;
    balanceTotalElement.innerText = currentBalance; 
    

    depositField.value ='';

})