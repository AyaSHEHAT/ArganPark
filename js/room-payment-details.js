document.addEventListener('DOMContentLoaded', function () {

    let totalNights;
    let dayPrice = 255;
    let advancedPayment = dayPrice;
    let totalCost = document.getElementById('totalCost');
    let totalCost2 = document.getElementById('totalCost2');
    let nightPriceDiv = document.getElementById('night-price');
    let nightPriceDiv2 = document.getElementById('night-price2');
    const payAll = document.getElementById('payAll');
    const payPart = document.getElementById('payPart');
    const paymentOptions = document.querySelectorAll('.payment input[type="radio"]');
    const paymentOptionTest = document.querySelectorAll('.payment a');
    const choseSpan = document.getElementById('chose');
    let advancedPaymentSpan = document.getElementsByClassName('advanced-payment');
    
    const arrivalDateInput = document.getElementById('arrivalDate');
    const departuralDateInput = document.getElementById('departuralDate');
    const nightNumbers = document.getElementsByClassName('nightNumbers');

    // Function to format a date to YYYY-MM-DD
    function formatDate(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Set the default values for arrival and departure
    function setDefaultDates() {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        
        arrivalDateInput.value = formatDate(today);
        departuralDateInput.value = formatDate(tomorrow);

        arrivalDateInput.setAttribute('min', formatDate(today));
        departuralDateInput.setAttribute('min', formatDate(tomorrow));

        calculateNights();
    }
    
    // Function to calculate the number of nights
    function calculateNights() {
        const arrivalDate = new Date(arrivalDateInput.value);
        const departuralDate = new Date(departuralDateInput.value);

        const differenceInTime = departuralDate - arrivalDate;
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        
        totalNights = differenceInDays;
        updateAllNumbers();
       // debugger
        const nightNumbersArray = Array.from(nightNumbers);
        nightNumbersArray.forEach(nightNumber => {
            nightNumber.innerText = differenceInDays;    
        });
        
    }
    
    arrivalDateInput.addEventListener('change', () => {
        const arrivalDate = new Date(arrivalDateInput.value);
        const minDepartureDate = new Date(arrivalDate);
        minDepartureDate.setDate(arrivalDate.getDate() + 1);
        departuralDateInput.setAttribute('min', formatDate(minDepartureDate));
        if (new Date(departuralDateInput.value) <= arrivalDate) {
            departuralDateInput.value = formatDate(minDepartureDate);
        }
        
        calculateNights();
    });
    
    departuralDateInput.addEventListener('change', calculateNights);
    
    setDefaultDates();
    
    console.log('after:', totalNights);

    function updateAllNumbers() {
     
        nightPriceDiv.innerText = dayPrice;
        nightPriceDiv2.innerText = dayPrice;
        //
        totalCost.innerText = totalNights * dayPrice + ' SAR';
        totalCost2.innerText = totalNights * dayPrice;
        //
        let advancedPaymentArray = Array.from(advancedPaymentSpan);
        advancedPaymentArray.forEach(advancedPaymentSpan => {
            advancedPaymentSpan.innerText = advancedPayment;
        });

    }
        function handlePaymentSelection() {
            if (payPart.checked) {
                paymentOptionTest.forEach(test => {
                    (test.id === 'cashback' || test.id === 'stcpay')?test.removeAttribute('disabled'): test.setAttribute('disabled','disabled');
                })
                choseSpan.textContent = nightPriceDiv2.textContent;
            } else if (payAll.checked) {
                paymentOptionTest.forEach(option => {
                    option.removeAttribute('disabled')
                });
                choseSpan.textContent = totalCost2.textContent;
            }
        }
        departuralDateInput.addEventListener('change', handlePaymentSelection);
        payAll.addEventListener('change', handlePaymentSelection);
        payPart.addEventListener('change', handlePaymentSelection);
        handlePaymentSelection();

});