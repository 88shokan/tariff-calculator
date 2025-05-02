const tariffRates = {
    Mexico: 25.0,
    Canada: 25.0,
    Japan: 24.0,
    China: 145.0,
    EU: 20.0
  };
  
  function calculateTariff() {
    const basePrice = parseFloat(document.getElementById("basePrice").value);
    const country = document.getElementById("countrySelect").value;
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results
  
    if (isNaN(basePrice) || basePrice < 0) {
      resultsDiv.innerHTML = "<p style='color:red;'>Please enter a valid base price.</p>";
      return;
    }
  
    if (!country || !(country in tariffRates)) {
      resultsDiv.innerHTML = "<p style='color:red;'>Please select a valid country.</p>";
      return;
    }
  
    const rate = tariffRates[country];
    const finalPrice = (basePrice * (1 + rate / 100)).toFixed(2);
  
    resultsDiv.innerHTML = `
      <h3>Result:</h3>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Tariff Rate:</strong> ${rate}%</p>
      <p><strong>Final Price:</strong> $${finalPrice}</p>
    `;
  }