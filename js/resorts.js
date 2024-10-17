// Get the input elements
const arrivalDateInput = document.getElementById('arrivalDate');
const departuralDateInput = document.getElementById('departuralDate');
const nightNumbers = document.getElementById('nightNumbers');

// Initialize flatpickr with options
flatpickr(arrivalDateInput, {
  dateFormat: 'Y-m-d',
  defaultDate: new Date(),
  minDate: 'today',
  onChange: function(selectedDates, dateStr, instance) {
    updateDepartureDate(dateStr);
  }
});

flatpickr(departuralDateInput, {
  dateFormat: 'Y-m-d',
  defaultDate: new Date(Date.now() + 86400000), // Tomorrow
  minDate: new Date(Date.now() + 86400000) // Tomorrow
});

// Function to update the departure date and enforce validation
function updateDepartureDate(arrivalDate) {
  const arrival = new Date(arrivalDate);
  const minDeparture = new Date(arrival);
  minDeparture.setDate(arrival.getDate() + 1);

  // Update the minimum date for departure
  departuralDateInput._flatpickr.set('minDate', minDeparture);
  const currentDepartureDate = new Date(departuralDateInput.value);

  if (currentDepartureDate <= arrival) {
    departuralDateInput._flatpickr.setDate(minDeparture);
  }

  calculateNights();
}

// Function to calculate the number of nights
function calculateNights() {
  const arrivalDate = new Date(arrivalDateInput.value);
  const departuralDate = new Date(departuralDateInput.value);

  const differenceInTime = departuralDate - arrivalDate;
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  // Update the displayed number of nights
  nightNumbers.innerText = differenceInDays > 0 ? differenceInDays : 1;
}

// Set the default dates and calculate nights on load
function setDefaultDates() {
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 86400000); // Tomorrow

  arrivalDateInput._flatpickr.setDate(today);
  departuralDateInput._flatpickr.setDate(tomorrow);
  calculateNights();
}

setDefaultDates();

// Event listener to recalculate nights when departure date changes
departuralDateInput.addEventListener('change', calculateNights);



const clickableDiv = document.querySelector('.clickable-div');
const numbersDiv = document.querySelector('.numbersDiv');
const guestsDiv = document.querySelector('.guests-div');

const inputNumAdult = document.getElementById('inputNumAdult');
const inputNumChildren = document.getElementById('inputNumChildren');
const inputNumRooms = document.getElementById('inputNumRooms');

const numberGuests = document.getElementById('numberGuests');
const numberRooms = document.getElementById('numberRooms');

guestsDiv.addEventListener('click', () => {
  if (numbersDiv.style.display === 'block') {
    numbersDiv.style.display = 'none';
    numbersDiv.classList.remove("d-flex")
    numbersDiv.classList.remove("justify-content-around")
    guestsDiv.classList.add("py-4");
  } 
  else {
    numbersDiv.style.display = 'block';
    numbersDiv.classList.add("d-flex")
    numbersDiv.classList.add("justify-content-around")
    guestsDiv.classList.remove("py-4");

  }
});
const searchDiv = document.getElementById("search-div");

    var searchInputField = document.getElementById("search-input");
    window.addEventListener("resize", function () {
        if (window.innerWidth > 992) {
            searchDiv.classList.remove("d-none");
        } else {
            searchDiv.classList.add("d-none");
        }
    });
    searchInputField.addEventListener("focus", function (e) {
        e.preventDefault();
        searchInputField.blur(); // remove focus
        //slider.classList.add("d-none");
        searchDiv.classList.remove("d-none");
    });
    document.addEventListener("click", function (e) {
        if (!searchDiv.contains(e.target) && !searchInputField.contains(e.target)) {
            searchDiv.classList.add("d-none");
        } else {
            updateSearchInputField();
        }
    });

// Function to update the values of guests and rooms
function updateValues() {
  const numAdults = parseInt(inputNumAdult.value) || 0;
  const numChildren = parseInt(inputNumChildren.value) || 0;
  const numRooms = parseInt(inputNumRooms.value) || 0;

  // Update guests and rooms values
  numberGuests.innerText = numAdults + numChildren;
  numberRooms.innerText = numRooms;
}

// Add event listeners to update the values when inputs change
inputNumAdult.addEventListener('input', updateValues);
inputNumChildren.addEventListener('input', updateValues);
inputNumRooms.addEventListener('input', updateValues);

// Initialize with default values
updateValues();
arrivalDateInput.addEventListener("change", updateSearchInputField);
departuralDateInput.addEventListener("change", updateSearchInputField);

function updateSearchInputField() {
    let hotelOrLocationValue = document.getElementById('floatingSelectGrid').value;
    let arrivalDateValue = document.getElementById('arrivalDate').value;
    let departuralDateValue = document.getElementById('departuralDate').value;
    let numberGuestsValue = document.getElementById('numberGuests').innerText;
    let numberRoomsValue = document.getElementById('numberRooms').innerText;
    //check if body is in arabic (contains dir attribute and its value is rtl) to change the text direction
    if (document.body.hasAttribute("dir") && document.body.getAttribute("dir") === "rtl") {
        searchInputField.value = `${hotelOrLocationValue}, موعد الوصول ${arrivalDateValue}, موعد المغادرة ${departuralDateValue}, ${numberGuestsValue} نزلاء, ${numberRoomsValue} غرفة`;
    } else {
        searchInputField.value = `${hotelOrLocationValue}, Arrival Date ${arrivalDateValue}, Departure Date ${departuralDateValue}, ${numberGuestsValue} Guests, ${numberRoomsValue} Rooms`;
    }
    searchInputField.classList.add("text-black-50");
}