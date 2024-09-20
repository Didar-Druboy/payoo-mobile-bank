const availableBalance = parseFloat(getInnerTextById('available-balance'));

// function of add money
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = parseFloat(getInputValueById('input-amount-to-add'));
    const inputPin = getInputValueById('input-pin');
    if(inputPin === '8242'){
        const newAvailableBalance = availableBalance + inputAmount;
        document.getElementById('available-balance').innerText = newAvailableBalance;
    }else{
        alert('Invalid Pin');
    }
    // console.log(availableBalanceNumber, inputPin);
});

// function of cash out money
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutAmount = parseFloat(getInputValueById('input-amount-to-cash-out'));
    const inputPin = getInputValueById('input-pin-cash-out');
    if(inputPin === '8242'){
        const newAvailableBalance = availableBalance - cashOutAmount;
        document.getElementById('available-balance').innerText = newAvailableBalance;
    }else{
        alert('Invalid Pin');
    }
});