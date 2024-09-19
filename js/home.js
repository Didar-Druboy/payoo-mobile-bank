// function of add money
const amountToAdd = document.getElementById('input-amount-to-add');
const inputPin = document.getElementById('input-pin');

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();  
    const amountToAddNumber = parseFloat(amountToAdd.value);
    const inputPinNumber = inputPin.value;
    
    if(inputPinNumber === '8242'){
        let availableBalance = document.getElementById('available-balance');
        const availableBalanceNumber = parseFloat(availableBalance.innerText);
        const newAvailableBalance = availableBalanceNumber + amountToAddNumber;
        document.getElementById('available-balance').innerText = newAvailableBalance;
        amountToAdd.value = '';
        inputPin.value = '';
        // console.log(newAvailableBalance);
    }else{
        window.alert('Invalid Pin Number');
    }
    // console.log(amountToAddNumber, inputPin);
});


// function to cash out money
const amountToCashOut = document.getElementById('input-amount-to-cash-out');
const inputPinCashOut = document.getElementById('input-pin-cash-out');

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const amountToCashOutNumber = parseFloat(amountToCashOut.value);
    const inputPinCashOutNumber = inputPinCashOut.value;

    if(inputPinCashOutNumber === '8242'){
        let availableBalance = document.getElementById('available-balance');
        const availableBalanceNumber = parseFloat(availableBalance.innerText);
        const newAvailableBalance = availableBalanceNumber - amountToCashOutNumber;
        document.getElementById('available-balance').innerText = newAvailableBalance;
        amountToCashOut.value = '';
        inputPinCashOut.value = '';
    }else{
        window.alert('Invalid Pin Number');
    }
});



// declaring add money and cash out money button
const addMoneyContainer = document.getElementById('add-money-container');
const cashOutContainer = document.getElementById('cash-out-container');

document.getElementById('btn-main-add-money').addEventListener('click', function(){
    cashOutContainer.classList.add('hidden');
    addMoneyContainer.classList.remove('hidden');
});

document.getElementById('btn-main-cash-out').addEventListener('click', function(){
    addMoneyContainer.classList.add('hidden');
    cashOutContainer.classList.remove('hidden');
});