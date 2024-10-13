
document.addEventListener('DOMContentLoaded', function() {

    let switchBranches = document.getElementById('switch-branches');
    let mapDiv = document.getElementById('map-container');
    let listDiv = document.getElementById('branches-list-container');
    mapDiv.style.display = 'none';
    switchBranches.addEventListener('change', function() {
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
        branch.addEventListener('click', function() {
            branches.forEach(branch => {
                branch.classList.remove('active');
                branch.style.backgroundColor = 'white';
                branch.style.color = 'black';
            });
            this.classList.add('active');
            this.style.color = '#b3952b';
            document.querySelector('#branch-name').innerText = this.querySelector('p').innerText;
            document.querySelector('#branch-address').innerText = this.querySelector('address').innerText;
            document.querySelector('#branch-phone').innerText = this.querySelector('phone').innerText;
        });
    });


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

    nextButton.addEventListener('click', function() {
        if (currentIndex + visibleSponsors < sponsors.length) {
            currentIndex++;
            updateSlider();
            prevButton.disabled = false;
        } else {
            nextButton.disabled = true;
        }
    });

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
            nextButton.disabled = false;
        } else {
            prevButton.disabled = true;
        }
    });
    
    updateSlider();


    
    
});