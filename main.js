let firstName = document.getElementById('firstName');
let secondName = document.querySelector('#firstName').value;

console.log(firstName);

function getData(){

    let input = document.querySelector('#secondName').value;
    let output = document.querySelector('#output');
    output.setAttribute('value', input);
}