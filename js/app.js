function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4)
    {
        return pin;
    }
    else{
        return getPin();
    }
}


function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    
    //display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;

    const typeNumberField = document.getElementById('typed-numbers');

    const previousTypedNumber = typeNumberField.value;

    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        } 
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else{

        const newTypedNumber = previousTypedNumber + number;

        typeNumberField.value = newTypedNumber;
    }      
})

document.getElementById('varify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typed-numbers');
    const typedNumber = typeNumberField.value;

    const pinFailureMessege = document.getElementById('pin-failure');

    if(currentPin === typedNumber)
    {
        const pinSuccssMessege = document.getElementById('pin-success');
        pinSuccssMessege.style.display = 'block';
        pinFailureMessege.style.display = 'none';
    }
    else{
        
        pinFailureMessege.style.display = 'block';
        pinSuccssMessege.style.display = 'none';
    }
})