const containerr = document.getElementById("container");
for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) containerr.innerHTML += `<div class="box-1">"FizzBuzz"</div>`;
    else if (i % 3 === 0)  containerr.innerHTML += `<div class="box-2">Fizz</div>`;
    else if (i % 5 === 0) containerr.innerHTML += `<div class="box-3">Buzz</div>`;
    else  containerr.innerHTML += `<div class="box">${i}</div>`;
}

