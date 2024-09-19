// const mobileInput = document.getElementById('mobile-input').value;
// const pinInput =  document.getElementById('pin-input');
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    const mobileInputValue = document.getElementById('mobile-input').value;
    const pinInputValue =  document.getElementById('pin-input').value;
    
    if((mobileInputValue === '01827809600' || mobileInputValue === '01866768242')  && pinInputValue === '8242'){
        window.location.href = "./home.html";
        // console.log('valid pin and number')
    }else{
        window.alert('Invalid Pin or Number');
    }
});