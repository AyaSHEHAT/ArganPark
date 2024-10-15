// //starting as index.js 
// document.addEventListener('DOMContentLoaded', function () {


//     let changeLangToEnglish = document.getElementById('change-lang-to-en');
//     //make it on click to change the html page to another page from the same folder
//     changeLangToEnglish.addEventListener('click', function () {
//         window.location.href = 'confirmation.html';
//     });
//     let changeLangToArabic = document.getElementById('change-lang-to-ar');
    
// const emailBtn=document.querySelector('.loginWithMail');
// const phoneBtn=document.querySelector('.loginWithPhone');
// const phoneDiv=document.querySelector('.phoneDiv');
// const emailDiv=document.querySelector('.emailDiv');
// emailBtn.addEventListener('click',function(){
//  console.log();
//  if(emailBtn.classList.contains('active')==false){
//   emailBtn.classList.add('active');
//   phoneBtn.classList.remove('active');
//   phoneDiv.classList.add('d-none');
//   emailDiv.classList.remove('d-none');

//  }
  
// })
// phoneBtn.addEventListener('click',function(){
//  console.log();
//  if(phoneBtn.classList.contains('active')==false){
//   phoneBtn.classList.add('active');
//   emailBtn.classList.remove('active');
//   phoneDiv.classList.remove('d-none');
//   emailDiv.classList.add('d-none');
//  }
  
// })


// });

// const userLogo = document.getElementById('userLogo');
// const userMenu = document.getElementById('userMenu');
// const closeMenu = document.getElementById('closeMenu');

// userLogo.addEventListener('click', () => {
//   userMenu.classList.toggle('active');  // Toggle the dropdown
//   userLogo.innerHTML = userMenu.classList.contains('active') 
//     ? '<i class="fa fa-times fa-2x"></i>' // Change to close icon
//     : '<i class="fa-regular fa-circle-user fa-2x"></i>';  // Change back to user icon
// });

// closeMenu.addEventListener('click', () => {
//   userMenu.classList.remove('active');
//   userLogo.innerHTML = '<i class="fa-regular fa-circle-user fa-2x"></i>';  // Reset to user icon
// });


document.addEventListener('DOMContentLoaded', function () {
  let changeLangToEnglish = document.getElementById('change-lang-to-en')?null:document.getElementById('change-lang-to-ar');
  // Change language to English on click
  changeLangToEnglish.addEventListener('click', function () {
      window.location.href = 'confirmation.html';
  });

  const emailBtn = document.querySelector('.loginWithMail');
  const phoneBtn = document.querySelector('.loginWithPhone');
  const phoneDiv = document.querySelector('.phoneDiv');
  const emailDiv = document.querySelector('.emailDiv');

  // Toggle between email and phone form fields
  emailBtn.addEventListener('click', function () {
      if (!emailBtn.classList.contains('active')) {
          emailBtn.classList.add('active');
          phoneBtn.classList.remove('active');
          phoneDiv.classList.add('d-none');
          emailDiv.classList.remove('d-none');
      }
  });

  phoneBtn.addEventListener('click', function () {
      if (!phoneBtn.classList.contains('active')) {
          phoneBtn.classList.add('active');
          emailBtn.classList.remove('active');
          phoneDiv.classList.remove('d-none');
          emailDiv.classList.add('d-none');
      }
  });

  const userLogo = document.getElementById('userLogo');
  const userMenu = document.getElementById('userMenu');
  const navbar = document.getElementById('navbarNavDropdown');
  const navbarToggler = document.querySelector('.navbar-toggler');

  // Toggle user menu when clicking the user icon
  userLogo.addEventListener('click', () => {
    console.log("userLogo")
      if (navbar.classList.contains('show')) {
          // Close the navbar if it's open
          navbar.classList.remove('show');
      }

      userMenu.classList.toggle('active'); // Toggle the dropdown
      userLogo.innerHTML = userMenu.classList.contains('active')
          ? '<i class="fa fa-times fa-2x"></i>' // Change to close icon
          : '<i class="fa-regular fa-circle-user fa-2x"></i>';  // Change back to user icon
  });

  // Close user menu when clicking the navbar toggler
  navbarToggler.addEventListener('click', () => {
      if (userMenu.classList.contains('active')) {
          // Close the user menu if it's open
          userMenu.classList.remove('active');
          userLogo.innerHTML = '<i class="fa-regular fa-circle-user fa-2x"></i>';  // Reset to user icon
      }
  });
});
