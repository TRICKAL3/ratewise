let bankRates = JSON.parse(localStorage.getItem('bankRates')) || {
    "National Bank": {"USD": 900, "EUR": 980, "GBP": 1200},
    "Standard Bank": {"USD": 910, "EUR": 970, "GBP": 1180},
    "First Capital Bank": {"USD": 920, "EUR": 960, "GBP": 1150},
    "NBS Bank": {"USD": 930, "EUR": 950, "GBP": 1130},
    "FDH Bank": {"USD": 940, "EUR": 940, "GBP": 1100},
    "Ecobank": {"USD": 950, "EUR": 930, "GBP": 1080}
};

document.addEventListener('DOMContentLoaded', () => {
    const bankSelect = document.getElementById('bank-select');
    const usdRateInput = document.getElementById('usd-rate');
    const eurRateInput = document.getElementById('eur-rate');
    const gbpRateInput = document.getElementById('gbp-rate');
    const statusMessage = document.getElementById('status-message');

    // Load current rates for selected bank
    bankSelect.addEventListener('change', () => {
        const selectedBank = bankSelect.value;
        const rates = bankRates[selectedBank];
        usdRateInput.value = rates.USD;
        eurRateInput.value = rates.EUR;
        gbpRateInput.value = rates.GBP;
    });

    // Save new rates
    document.getElementById('rate-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const selectedBank = bankSelect.value;
        const updatedRates = {
            "USD": parseFloat(usdRateInput.value),
            "EUR": parseFloat(eurRateInput.value),
            "GBP": parseFloat(gbpRateInput.value)
        };
        bankRates[selectedBank] = updatedRates;

        // Save to localStorage
        localStorage.setItem('bankRates', JSON.stringify(bankRates));
        console.log('Updated bankRates:', bankRates); // Log the updated rates for debugging

        statusMessage.textContent = `Rates updated for ${selectedBank}!`;
    });

    // Trigger change event to load initial rates
    bankSelect.dispatchEvent(new Event('change'));
});
