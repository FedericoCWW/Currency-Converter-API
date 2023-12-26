let apiKey = '64aa289d23233ec6f00bdfcb';
let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const Fromdropdown = document.getElementById("from-drop");
const Todropdown = document.getElementById("to-drop");


currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    Fromdropdown.add(option);
});

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    Todropdown.add(option);
});

Fromdropdown.value = "USD";
Todropdown.value = "ARS";

let ConvertCurrency = () => {
    const amount = document.querySelector("#input-a").value;
    const result = document.querySelector("#result")
    const fromCurrency = Fromdropdown.value;
    const toCurrency = Todropdown.value;
    if (amount >= 0){
    fetch(api)
        .then((resp) => resp.json())
        .then((data) => {
            let fromExchrate = data.conversion_rates
            [fromCurrency];
            let toExchrate = data.conversion_rates
            [toCurrency];
            const converted_result = (amount / fromExchrate) * toExchrate;
            result.innerHTML = `${amount} ${fromCurrency} = ${converted_result.toFixed(2)} ${toCurrency}`;
        });
    }
};

document.querySelector("#convert").addEventListener("click", ConvertCurrency);
window.addEventListener("load", ConvertCurrency);

