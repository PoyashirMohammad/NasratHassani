const form=document.getElementById('form');
const Name=document.getElementById('Name');
const Number=document.getElementById('Number');
const Order=document.getElementById('Order');
const Email=document.getElementById('Email');
const Amount=document.getElementById('Amount');
form.addEventListener('submit' , e=>
{
e.preventDefault();
validateInputs();

});

const setError =(element,message) =>{
const inputControl=element.parentElement;
const errorDisplay=inputControl.querySelector('error');
errorDisplay.innerText=message;

}

const validateInputs =() =>
{
    const NameValue=Name.value.trim();
    const NumberValue=Number.value.trim();
    const OrderValue=Order.value.trim();
    const EmailValue=Email.value.trim();
    const AmountValue=Amount.value.trim();
};