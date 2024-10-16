
document.addEventListener('DOMContentLoaded', function () {

    let switchBranches = document.getElementById('switch-branches');
    let mapDiv = document.getElementById('map-container');
    let listDiv = document.getElementById('branches-list-container');
    mapDiv.style.display = 'none';
    switchBranches.addEventListener('change', function () {
        if (this.checked) {
            switchBranches.style.backgroundColor = '#b3952b';
            switchBranches.style.boxShadow = '0 0 10px #b3952b';
            switchBranches.style.borderColor = '#b3952b';
            mapDiv.style.display = 'block';
            listDiv.style.display = 'none';
        } else {
            switchBranches.style.backgroundColor = 'white';
            switchBranches.style.boxShadow = '0 0 10px white';
            switchBranches.style.borderColor = '#b3952b';
            mapDiv.style.display = 'none';
            listDiv.style.display = 'block';
        }
    });

    let branches = document.querySelectorAll('.branch');
    branches.forEach(branch => {
        branch.addEventListener('click', function () {
            branches.forEach(branch => {
                branch.classList.remove('active');
                branch.style.backgroundColor = 'white';
                branch.style.color = 'black';
            });
            this.classList.add('active');
            this.style.color = '#b3952b';
            if (document.body.getAttribute('dir') === 'rtl') {
                document.querySelector('#branch-name').innerText = this.querySelector('p').innerText;
                document.querySelector('#branch-address').innerText = this.querySelector('address').innerText;
                document.querySelector('#branch-phone').innerText = this.querySelector('phone').innerText;
            } else {
                document.querySelector('#branch-name').innerText = this.querySelector('titleEn').innerText;
                document.querySelector('#branch-address').innerText = this.querySelector('addressEn').innerText;
                document.querySelector('#branch-phone').innerText = this.querySelector('phoneEn').innerText;
            }

        });
    });

    // function performAction(region) {
    //     if(region === 'riyadh') {
    //         document.querySelector('#branch-name').innerText = 'Riyadh Branch';
    //         document.querySelector('#branch-address').innerText = 'Riyadh, King Fahd Road';
    //         document.querySelector('#branch-phone').innerText = '011-1234567';
    //     } else if(region === 'jeddah') {
    //         document.querySelector('#branch-name').innerText = 'Jeddah Branch';
    //         document.querySelector('#branch-address').innerText = 'Jeddah, King Abdulaziz Road';
    //         document.querySelector('#branch-phone').innerText = '012-7654321';
    //     } else if(region === 'aziziyah') {
    //         document.querySelector('#branch-name').innerText = 'Aziziyah Branch';
    //         document.querySelector('#branch-address').innerText = 'Aziziyah, King Abdullah Road';
    //         document.querySelector('#branch-phone').innerText = '055-1234567';
    //     } else if(region === 'shabab') {
    //         document.querySelector('#branch-name').innerText = 'Shabab Branch';
    //         document.querySelector('#branch-address').innerText = 'Shabab, King Fahd Road';
    //         document.querySelector('#branch-phone').innerText = '055-7654321';
    //     }
    // }



    let container = document.querySelector('#sponsors-container');
    let sponsors = Array.from(container.children);
    let visibleSponsors = 3;
    let currentIndex = 0;
    let nextButton = document.getElementById('next');
    let prevButton = document.getElementById('prev');
    prevButton.disabled = true;

    function updateSlider() {
        sponsors.forEach((sponsor, index) => {
            if (index >= currentIndex && index < currentIndex + visibleSponsors) {
                sponsor.style.display = 'block';
            } else {
                sponsor.style.display = 'none';
            }
        });
    }

    nextButton.addEventListener('click', function () {
        if (currentIndex + visibleSponsors < sponsors.length) {
            currentIndex++;
            updateSlider();
            prevButton.disabled = false;
        } else {
            nextButton.disabled = true;
        }
    });

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
            nextButton.disabled = false;
        } else {
            prevButton.disabled = true;
        }
    });

    updateSlider();



    // Action to perform when a region is clicked
    function performAction(region) {
        alert('You clicked on ' + region);
        // Add any other action, like opening a popup or redirecting
    }

    // Adjust the map for responsiveness (scaling the areas based on the image size)
    const originalWidth = 480; // Original width of the image
    const originalHeight = 310; // Original height of the image

    function adjustImageMap() {
        const img = document.getElementById("ksa-branches-img");
        const map = document.getElementById("ksa-map");
        const widthRatio = img.width / originalWidth;
        const heightRatio = img.height / originalHeight;

        const areas = map.getElementsByTagName("area");
        const coords = [
            [190,70,10],  // Adjust these to match actual coordinates
            [170,170,10],
            [245,225,10],
            [320,165,10]
        ];

        for (let i = 0; i < areas.length; i++) {
            let newCoords = coords[i].map((coord, index) => {
                return index < 2 ? coord * (index % 2 === 0 ? widthRatio : heightRatio) : coord;  // radius doesn't scale
            });
            areas[i].coords = newCoords.join(',');
        }
    }

    window.onload = adjustImageMap;
    window.onresize = adjustImageMap;



});