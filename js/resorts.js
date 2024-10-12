// Get the input elements
const arrivalDateInput = document.getElementById('arrivalDate');
const departuralDateInput = document.getElementById('departuralDate');
const nightNumbers = document.getElementById('nightNumbers');

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

  nightNumbers.innerText = differenceInDays;
}

// Event listener for when the arrival date changes
arrivalDateInput.addEventListener('change', () => {
  const arrivalDate = new Date(arrivalDateInput.value);
  const minDepartureDate = new Date(arrivalDate);
  minDepartureDate.setDate(arrivalDate.getDate() + 1);

  // Update the minimum value of the departure date
  departuralDateInput.setAttribute('min', formatDate(minDepartureDate));

  // Automatically update the departure date to arrival date + 1 if necessary
  if (new Date(departuralDateInput.value) <= arrivalDate) {
    departuralDateInput.value = formatDate(minDepartureDate);
  }

  calculateNights();
});

departuralDateInput.addEventListener('change', calculateNights);

setDefaultDates();


const clickableDiv = document.querySelector('.clickable-div');
const numbersDiv = document.querySelector('.numbersDiv');

const inputNumAdult = document.getElementById('inputNumAdult');
const inputNumChildren = document.getElementById('inputNumChildren');
const inputNumRooms = document.getElementById('inputNumRooms');

const numberGuests = document.getElementById('numberGuests');
const numberRooms = document.getElementById('numberRooms');

clickableDiv.addEventListener('click', () => {
  if (numbersDiv.style.display === 'none') {
    numbersDiv.style.display = 'block';
    numbersDiv.classList.add("d-flex")
    numbersDiv.classList.add("justify-content-around")
  } //else {
  //   numbersDiv.style.display = 'none';
  //   numbersDiv.classList.remove("d-flex")
  //   numbersDiv.classList.remove("justify-content-around")
  // }
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
