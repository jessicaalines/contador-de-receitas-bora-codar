//função para aumentar o valor no contador

function increaseCounter() {
    const counter = document.getElementById
    ("counter");
    let value = parseInt(counter.textContent); // convertendo o valor para texto
    value++;
    counter.textContent = value.toString().padStart(2, "0");
}

// função para diminuir o valor no contador

function decreaseCounter() {
    const counter = document.getElementById("counter");
    let value = parseInt(counter.textContent);
    if(value > 1) {
        value--;
        counter.textContent = value.toString().padStart(2, "0");
    }
}