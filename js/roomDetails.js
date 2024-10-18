document.addEventListener('DOMContentLoaded', function () {

    //catch all texts that will be changed
    let totalNights;
    let dayPrice = 255;
    let advancedPayment = dayPrice;
    
    
    let totalCost = document.getElementById('totalCost');
    let totalCost2 = document.getElementById('totalCost2');
    let nightPriceDiv = document.getElementById('night-price');
    let nightPriceDiv2 = document.getElementById('night-price2');

    let advancedPaymentSpan = document.getElementsByClassName('advanced-payment');
    
    // Get the input elements
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
    
    // Event listener for when the arrival date changes
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
        //
        // dayPriceDiv.innerText = dayPrice + ' ريال سعودي / ليلة';
        nightPriceDiv.innerText = dayPrice;
        nightPriceDiv2.innerText = dayPrice;
        //
        totalCost.innerText = totalNights * dayPrice + ' SAR';
        totalCost2.innerText = totalNights * dayPrice + ' SAR';
        //
        let advancedPaymentArray = Array.from(advancedPaymentSpan);
        advancedPaymentArray.forEach(advancedPaymentSpan => {
            advancedPaymentSpan.innerText = advancedPayment;
        });

    }



});