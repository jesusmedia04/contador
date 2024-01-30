// LISTENER

// elemento , tipoDevento, callBack

const btnElementIncrement = document.getElementById('btnElementIncrement');
const btnElementDecrement = document.getElementById('btnElementDecrement');
const counterElement = document.getElementById('countElement');
let counter = Number(counterElement.textContent);

btnElementIncrement.addEventListener('click', () => {
	counter++;
	counterElement.textContent = String(counter);
	if (counter % 10 === 0) {
        alert('Llegaste a ' + counter);
    }
});
btnElementDecrement.addEventListener('click',() =>{
	counter--;
	counterElement.textContent = String(counter);

	if (counter === -10 ) alert('llegaste a -10');
}) 