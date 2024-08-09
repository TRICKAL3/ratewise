// Load saved rates from localStorage or set defaults
const bankRates = JSON.parse(localStorage.getItem('bankRates')) || {
    "National Bank": {"USD": 900, "EUR": 980, "GBP": 1200},
    "Standard Bank": {"USD": 910, "EUR": 970, "GBP": 1180},
    "First Capital Bank": {"USD": 920, "EUR": 960, "GBP": 1150},
    "NBS Bank": {"USD": 930, "EUR": 950, "GBP": 1130},
    "FDH Bank": {"USD": 940, "EUR": 940, "GBP": 1100},
    "Ecobank": {"USD": 950, "EUR": 930, "GBP": 1080}
};

document.addEventListener('DOMContentLoaded', () => {
    const bankSelect = document.getElementById('bank-select');
    const rateDisplay = document.getElementById('rate-display');

    // Populate bank options
    Object.keys(bankRates).forEach(bank => {
        const option = document.createElement('option');
        option.value = bank;
        option.textContent = bank;
        bankSelect.appendChild(option);
    });

    // Handle bank selection
    bankSelect.addEventListener('change', (event) => {
        const selectedBank = event.target.value;
        if (selectedBank) {
            const rates = bankRates[selectedBank];
            let ratesText = `<h2>${selectedBank} Visa Settlement Rates</h2>`;
            for (const [currency, rate] of Object.entries(rates)) {
                ratesText += `<p>${currency}: MWK ${rate}</p>`;
            }
            rateDisplay.innerHTML = ratesText;
        } else {
            rateDisplay.innerHTML = '';
        }
    });
});
