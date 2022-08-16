document.getElementById('withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
const newWithdraw =parseFloat(newWithdrawString);
console.log(newWithdraw);
withdrawField.value ='';

if (isNaN(newWithdraw)){
    alert('please provide valid number')
    return;
}
const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
     const previousWithdrawTotal= parseFloat(previousWithdrawTotalString);
     
     

        const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
     const previousBalanceTotal= parseFloat(previousBalanceTotalString);
     
     if(newWithdraw>previousBalanceTotal){
        alert('baap er bank e eto taka nai')
        return;
     }
     const currentWithdraw = previousWithdrawTotal+newWithdraw;
        withdrawTotalElement.innerText = currentWithdraw;
     const newBalance = previousBalanceTotal-newWithdraw;
    balanceTotalElement.innerText = newBalance;
        withdrawField.value ='';
})