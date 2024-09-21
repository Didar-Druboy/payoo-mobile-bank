// function of add money
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const availableBalance = parseFloat(getInnerTextById('available-balance'));
    const inputAmount = parseFloat(getInputValueById('input-amount-to-add'));
    const inputPin = getInputValueById('input-pin');
    if(isNaN(inputAmount)){
        alert('Type amount in number.');
        return;
    }
    if(inputPin === '8242'){
        const newAvailableBalance = availableBalance + inputAmount;
        document.getElementById('available-balance').innerText = newAvailableBalance;

        const p = document.createElement('p');
        p.innerText = 'Added: ' + inputAmount + 'Tk. New Balance: ' + newAvailableBalance + 'Tk.';
        p.classList.add('bg-green-300', 'p-2');
        const transactionLogContainer = document.getElementById('transaction-log-container');
        transactionLogContainer.appendChild(p);
    }else{
        alert('Invalid Pin');
    }
});

// function of cash out money
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const availableBalance = parseFloat(getInnerTextById('available-balance'));
    const cashOutAmount = parseFloat(getInputValueById('input-amount-to-cash-out'));
    const inputPin = getInputValueById('input-pin-cash-out');
    if(isNaN(cashOutAmount)){
        alert('Type amount in number.');
        return;
    }
    if(cashOutAmount > availableBalance){
        alert('You do not have enough money to cash out.');
        return;
    }
    if(inputPin === '8242'){
        const newAvailableBalance = availableBalance - cashOutAmount;
        document.getElementById('available-balance').innerText = newAvailableBalance;

        const p = document.createElement('p');
        p.innerText = `Cash Out: ${cashOutAmount} Tk. New Balance: ${newAvailableBalance} Tk.`
        p.classList.add('bg-yellow-300', 'p-2');
        document.getElementById('transaction-log-container').appendChild(p);
    }else{
        alert('Invalid Pin');
    }
});

// function to toogle button
document.getElementById('btn-main-add-money').addEventListener('click', function(){
    showSectionById('add-money-container');
})

document.getElementById('btn-main-cash-out').addEventListener('click', function(){
    showSectionById('cash-out-container');
})

document.getElementById('btn-main-transaction').addEventListener('click', function(){
    showSectionById('transaction-container');
})