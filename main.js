let firstName = document.getElementById('firstName').value;
let secondName = document.querySelector('#firstName').value;

console.log(firstName);

function getData(){

    let input = document.querySelector('#firstName').value;
    let output = document.querySelector('#output');
    output.setAttribute('value', input);
}