//handle deposite event
document.getElementById('deposite-button').addEventListener('click',function(){
    const depositeInput =document.getElementById('deposite-input');

    const newDepositeText =depositeInput.value;
    const newDepositeAmount=parseFloat(newDepositeText);
    // console.log(depositeAmount);

    const depositeTotal =document.getElementById('deposite-total');
    const previousDepositeText =depositeTotal.innerText;
    const previousDepositeAmount =parseFloat(previousDepositeText);
    const newDepositeTotal =previousDepositeAmount+newDepositeAmount;
    depositeTotal.innerText=newDepositeTotal;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText =balanceTotal.innerText;
    const previousBalanceTotal =parseFloat(balanceTotalText);
    const newBalanceTotal =previousDepositeAmount+newDepositeAmount;
    balanceTotal.innerText =newBalanceTotal;
    depositeInput.value ='';
})

//handle withdraw event
// document.getElementById('withdraw-button').addEventListener('click',function(){
//     const withdrawInput =document.getElementById('withdraw-input');

//     const newWithdrawText =withdrawInput.value;
//     const newWithdrawAmount=parseFloat(newWithdrawText);
//     // console.log(withdrawAmount);

//     const withdrawTotal =document.getElementById('withdraw-total');
//     const previousWithdrawText =withdrawTotal.innerText;
//     const previousWithdrawAmount =parseFloat(previousWithdrawText);
//     const newWithdrawTotal =previousWithdrawAmount+newWithdrawAmount;
//     withdrawTotal.innerText=newWithdrawTotal;

//     const balanceTotal = document.getElementById('balance-total');
//     const balanceTotalText =balanceTotal.innerText;
//     const previousBalanceTotal =parseFloat(balanceTotalText);
//     const newBalanceTotal =previousWithdrawAmount-newWithdrawAmount;
//     balanceTotal.innerText =newBalanceTotal;
//     withdrawInput.value ='';
// })

//withdraw

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput=document.getElementById('withdraw-input');
    const withdrawAmountText =withdrawInput.value;
    const newWithdrawAmount =parseFloat(withdrawAmountText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText =withdrawTotal.innerText;
    const previousWithdrawtotal =parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawtotal + newWithdrawAmount;

    withdrawTotal.innerText =newWithdrawTotal;

    const balenceTotal = document.getElementById('balance-total');
    const previousBalenceText =balenceTotal.innerText;
    const previousBalanceTotal=parseFloat(previousBalenceText);
    const newBalanceTotal = previousBalanceTotal -newWithdrawAmount;
    balenceTotal.innerText = newBalanceTotal;
    withdrawInput.value =' ';
})








