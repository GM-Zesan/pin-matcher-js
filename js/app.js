
function generatePin(){
    const pin = Math.round(Math.random()*10000);
    if(pin>999 && pin<10000){
        document.getElementById('display-pin').value = pin;
    }
    else{
        generatePin();
    }
}


document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    let inputField = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            inputField.value = '';
        }
    }else{
        inputField.value = inputField.value + number;
    }
})

function verifyPin(){
    const getPin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const failSms = document.getElementById('notify-fail');
    const successSms = document.getElementById('notify-success');
    if(getPin == typedPin){
        successSms.style.display = "block";
        failSms.style.display = "none";
    }
    else{
        successSms.style.display = "none";
        failSms.style.display = "block";
    }
}