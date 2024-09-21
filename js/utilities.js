function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}
function getInnerTextById(id){
    const innerText = document.getElementById(id).innerText;
    return innerText;
}
function showSectionById(id){
    document.getElementById('add-money-container').classList.add('hidden');
    document.getElementById('cash-out-container').classList.add('hidden');
    document.getElementById('transaction-container').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}