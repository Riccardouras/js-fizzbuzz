const containerr = document.getElementById("container");
const ul = document.querySelector("ul.list");

for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) containerr.innerHTML += `<div class="box">"FizzBuzz"</div>`;
    else if (i % 3 === 0)  containerr.innerHTML += `<div class="box">Fizz</div>`;
    else if (i % 5 === 0) containerr.innerHTML += `<div class="box">Buzz</div>`;
    else  containerr.innerHTML += `<div class="box">${i}</div>`;
   
}
const nuovoElementoInLista = document.createElement('li');
nuovoElementoInLista.append(i); 
ul.append(nuovoElementoInLista); 