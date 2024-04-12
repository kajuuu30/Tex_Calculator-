document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tax-calculator-form');
    const overallIncomeDisplay = document.getElementById('overall-income');
    const taxAmountDisplay = document.getElementById('tax-amount');
    const incomeAfterTaxDisplay = document.getElementById('income-after-tax');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const grossAnnualIncome = parseFloat(document.getElementById('gross-annual-income').value);
      const extraIncome = parseFloat(document.getElementById('extra-income').value);
      const ageGroup = document.getElementById('age-group').value;
  
      let isValid = true;
  
      // Validate Gross Annual Income
      if (isNaN(grossAnnualIncome) || grossAnnualIncome < 0) {
        document.getElementById('gross-annual-income').classList.add('is-invalid');
        document.querySelector('#gross-annual-income + .invalid-feedback').classList.remove('d-none');
        isValid = false;
      } else {
        document.getElementById('gross-annual-income').classList.remove('is-invalid');
        document.querySelector('#gross-annual-income + .invalid-feedback').classList.add('d-none');
      }
  
      // Validate Extra Income
      if (isNaN(extraIncome) || extraIncome < 0) {
        document.getElementById('extra-income').classList.add('is-invalid');
        document.querySelector('#extra-income + .invalid-feedback').classList.remove('d-none');
        isValid = false;
      } else {
        document.getElementById('extra-income').classList.remove('is-invalid');
        document.querySelector('#extra-income + .invalid-feedback').classList.add('d-none');
      }
  
      // Validate Age Group
      if (!ageGroup) {
        document.getElementById('age-group').classList.add('is-invalid');
        document.querySelector('#age-group + .invalid-feedback').classList.remove('d-none');
        isValid = false;
      } else {
        document.getElementById('age-group').classList.remove('is-invalid');
        document.querySelector('#age-group + .invalid-feedback').classList.add('d-none');
      }
  
      if (isValid) {
        const totalIncome = grossAnnualIncome + extraIncome;
        let taxRate = 0;
  
        switch (ageGroup) {
          case 'under-40':
            taxRate = totalIncome > 800000 ? 0.3 : 0;
            break;
          case '40-60':
            taxRate = totalIncome > 800000 ? 0.4 : 0;
            break;
          case 'over-60':
            taxRate = totalIncome > 800000 ? 0.1 : 0;
            break;
        }
  
        const taxAmount = taxRate > 0 ? (totalIncome - 800000) * taxRate : 0;
        const incomeAfterTax = totalIncome - taxAmount;
  
        overallIncomeDisplay.textContent = totalIncome.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
        taxAmountDisplay.textContent = taxAmount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
        incomeAfterTaxDisplay.textContent = incomeAfterTax.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  
        $('#tax-result-modal').modal('show');
      }
    });
  });