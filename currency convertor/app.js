let dropdown = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("form button");
let fromcurr = document.querySelector(".from select");
let tocurr = document.querySelector(".to select");

for (let select of dropdown) {
    for (let code in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;

        if (select.name === "from" && code === "USD") {
            newOption.selected = true;
        } else if (select.name === "To" && code === "INR") {
            newOption.selected = true;
        }

        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateflag(evt.target);
    });
}

const updateflag = (e) => {
    let code = e.value;
    let ccode = countryList[code];
    let newsrc = `https://flagsapi.com/${ccode}/flat/64.png`;
    let img = e.parentElement.querySelector("img");
    img.src = newsrc;
};

btn.addEventListener('click', (event) => {
    event.preventDefault();
    let amt = document.querySelector("#amtval");
    let amount = amt.value;
    if (amount === "" || amount <= 0) {
        amount = 1;
        amt.value = 1;
    }

    let fromCode = fromcurr.value;
    let toCode = tocurr.value;
    exchange(fromCode, toCode, amount);
});

let exchange = (fromCode, toCode, amount) => {
    fetch(`https://open.er-api.com/v6/latest/${fromCode}`)
        .then(response => response.json())
        .then(data => {
            let rate = data.rates[toCode];
            let convertedAmount = amount * rate;
            document.querySelector('.msg').innerText = `${amount} ${fromCode} = ${convertedAmount.toFixed(2)} ${toCode}`;
        })
        .catch(error => console.error('Error fetching exchange rate:', error));
};
