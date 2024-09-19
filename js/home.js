// function of add money
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amountToAdd = document.getElementById('input-amount-to-add').value;
    const amountToAddNumber = parseFloat(amountToAdd);
    const inputPin = document.getElementById('input-pin').value;
    
    if(inputPin === '1234'){
        let availableBalance = document.getElementById('available-balance');
        const availableBalanceNumber = parseFloat(availableBalance.innerText);
        const newAvailableBalance = availableBalanceNumber + amountToAddNumber;
        document.getElementById('available-balance').innerText = newAvailableBalance;
        // console.log(newAvailableBalance);
    }else{
        window.alert('Invalid Pin Number');
    }
    // console.log(amountToAddNumber, inputPin);
});