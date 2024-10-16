document.addEventListener("DOMContentLoaded", function () {
    // Get the input elements
    const arrivalDateInput = document.getElementById("arrivalDate");
    const departuralDateInput = document.getElementById("departuralDate");
    const nightNumbers = document.getElementById("nightNumbers");

    // Function to format a date to YYYY-MM-DD
    function formatDate(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    // Set the default values for arrival and departure
    function setDefaultDates() {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        arrivalDateInput.value = formatDate(today);
        departuralDateInput.value = formatDate(tomorrow);

        arrivalDateInput.setAttribute("min", formatDate(today));
        departuralDateInput.setAttribute("min", formatDate(tomorrow));

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
    arrivalDateInput.addEventListener("change", () => {
        const arrivalDate = new Date(arrivalDateInput.value);
        const minDepartureDate = new Date(arrivalDate);
        minDepartureDate.setDate(arrivalDate.getDate() + 1);
        departuralDateInput.setAttribute("min", formatDate(minDepartureDate));
        if (new Date(departuralDateInput.value) <= arrivalDate) {
            departuralDateInput.value = formatDate(minDepartureDate);
        }

        calculateNights();
    });

    departuralDateInput.addEventListener("change", calculateNights);

    setDefaultDates();

    const clickableDiv = document.querySelector(".clickable-div");
    const numbersDiv = document.querySelector(".numbersDiv");
    const guestsDiv = document.querySelector(".guests-div");

    const inputNumAdult = document.getElementById("inputNumAdult");
    const inputNumChildren = document.getElementById("inputNumChildren");
    const inputNumRooms = document.getElementById("inputNumRooms");

    const numberGuests = document.getElementById("numberGuests");
    const numberRooms = document.getElementById("numberRooms");

    guestsDiv.addEventListener("click", () => {
        if (numbersDiv.style.display === "block") {
            numbersDiv.style.display = "none";
            numbersDiv.classList.remove("d-flex");
            numbersDiv.classList.remove("justify-content-around");
            guestsDiv.classList.add("py-4");
        } else {
            numbersDiv.style.display = "block";
            numbersDiv.classList.add("d-flex");
            numbersDiv.classList.add("justify-content-around");
            guestsDiv.classList.remove("py-4");
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
    inputNumAdult.addEventListener("input", updateValues);
    inputNumChildren.addEventListener("input", updateValues);
    inputNumRooms.addEventListener("input", updateValues);

    // Initialize with default values
    updateValues();

    ///////////////////////////////////
    //toggle between slider and search criteria form in small screens + fill the search input with the selected values
    const slider = document.getElementById("carouselExampleAutoplaying");
    const searchDiv = document.getElementById("search-div");

    var searchInputField = document.getElementById("search-input");
    // if (document.body.hasAttribute("dir") && document.body.getAttribute("dir") === "rtl") {
    // } else {
    //     var searchInputField = document.getElementById("search-input-en");
    // }
    //const searchInputFieldEn = document.getElementById("search-input-en");

    //on change the screen size hide the search input and show the slider beside the search criteria form
    window.addEventListener("resize", function () {
        if (window.innerWidth > 992) {
            slider.classList.remove("d-none");
            searchDiv.classList.remove("d-none");
        } else {
            slider.classList.remove("d-none");
            searchDiv.classList.add("d-none");
        }
    });
    searchInputField.addEventListener("focus", function (e) {
        e.preventDefault();
        searchInputField.blur(); // remove focus
        slider.classList.add("d-none");
        searchDiv.classList.remove("d-none");
    });
    document.addEventListener("click", function (e) {
        if (!searchDiv.contains(e.target) && !searchInputField.contains(e.target)) {
            slider.classList.remove("d-none");
            searchDiv.classList.add("d-none");
        } else {
            updateSearchInputField();
        }
    });

    //add event listener on arrivalDate and DeparturalDate to update the search input field
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

    const container = document.getElementById("offers-container");
    const cards = Array.from(container.children);
    // console.log(cards);
    const visibleCards = 4; // Number of cards to show at once
    let currentPosition = 0; // Index of the first visible card
    let nextBtn = document.getElementById("next");
    let prevBtn = document.getElementById("prev");
    prevBtn.disabled = true;

    function updateSlider() {
        cards.forEach((card, index) => {
            if (index >= currentPosition && index < currentPosition + visibleCards) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    nextBtn.addEventListener("click", function () {
        if (currentPosition + visibleCards < cards.length) {
            currentPosition++;
            updateSlider();
            prevBtn.disabled = false;
        } else {
            nextBtn.disabled = true;
        }
    });

    prevBtn.addEventListener("click", function () {
        if (currentPosition > 0) {
            currentPosition--;
            updateSlider();
            nextBtn.disabled = false;
        } else {
            prevBtn.disabled = true;
        }
    });

    updateSlider();

    const radioButtons = document.querySelectorAll(".btn-check");
    const labels = document.querySelectorAll(".btn-outline");

    function updateBackground() {
        labels.forEach((label) => {
            const input = document.getElementById(label.getAttribute("for"));
            if (input.checked) {
                label.style.backgroundColor = "#b3952b";
                label.style.color = "#fff";
            } else {
                label.style.backgroundColor = "transparent";
                label.style.color = "#000";
            }
        });
    }

    radioButtons.forEach((radio) => {
        radio.addEventListener("change", updateBackground);
    });

    updateBackground();
});
