let enteredInvoice = document.getElementById('enteredInvoice');
let afterTax = document.getElementById('afterTax');
let myBtn = document.getElementById('myBtn');
let divideByInput = document.getElementById('divideBy');
let divideByBtn = document.getElementById('divBtn');
let afterDivide = document.getElementById('afterDivide');

myBtn.addEventListener('click', function calTax() {
	afterTax.innerHTML = enteredInvoice.value * 0.15;
});

divideByBtn.addEventListener('click', function div() {
	afterDivide.innerHTML = enteredInvoice.value / divideByInput.value;
});
