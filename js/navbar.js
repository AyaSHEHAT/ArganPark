document.addEventListener('DOMContentLoaded', function () {
 
  const loginEmailBtn = document.querySelector('.loginWithMail');
  const loginPhoneBtn = document.querySelector('.loginWithPhone');

  const emailDiv = document.querySelector('.emailDiv');
  const loginDivWithPhone = document.querySelector('.loginDivWithPhone');
  const loginDivWithEmail = document.querySelector('.loginDivWithEmail');
  
  const signemailBtn = document.querySelector('.signWithMail');
  const signphoneBtn = document.querySelector('.signWithPhone');
  const btnLogin = document.querySelector('button.login');
  const logInForm = document.querySelector('form.logInForm'); //by default is 'd-none'
  const btnSignUp = document.querySelector('button.signup');
  const signUpForm = document.querySelector('form.signUpForm');

btnLogin.addEventListener('click', function () {
    signUpForm.classList.add('d-none');
       logInForm.classList.remove('d-none');
});
  // Toggle between email and phone form fields in sign up form
  signemailBtn.addEventListener('click', function () {
      if (!signemailBtn.classList.contains('active')) {
        signemailBtn.classList.add('active');
        signphoneBtn.classList.remove('active');
         // phoneDiv.classList.add('d-none');
          emailDiv.classList.remove('d-none');
      }
  });
  signphoneBtn.addEventListener('click', function () {
      if (!signphoneBtn.classList.contains('active')) {
        signphoneBtn.classList.add('active');
        signemailBtn.classList.remove('active');

        emailDiv.classList.add('d-none');
      }
  });

  // Toggle between email and phone form fields in login form
  loginEmailBtn.addEventListener('click', function () {
      if (!loginEmailBtn.classList.contains('active')) {
        loginEmailBtn.classList.add('active');
        loginPhoneBtn.classList.remove('active');
        loginDivWithEmail.classList.remove('d-none');
        loginDivWithPhone.classList.add('d-none');        
      }
  });
  loginPhoneBtn.addEventListener('click', function () {
      if (!loginPhoneBtn.classList.contains('active')) {
        loginPhoneBtn.classList.add('active');
        loginEmailBtn.classList.remove('active');
        loginDivWithEmail.classList.add('d-none');
        loginDivWithPhone.classList.remove('d-none');
      }
  });
  btnSignUp.addEventListener('click', function () {
    signUpForm.classList.remove('d-none');
    logInForm.classList.add('d-none');
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

  if (document.body.hasAttribute("dir") && document.body.getAttribute("dir") === "rtl") {
    let toEnglish = document.getElementById('change-lang-to-en');
  
    toEnglish.addEventListener('click', function () {
        let currentUrl = window.location.href;
        let newUrl = currentUrl.replace('-ar', '-en');
        window.location.href = newUrl;
    });
  } else {
    let toArabic = document.getElementById('change-lang-to-ar');
    toArabic.addEventListener('click', function () {
        let currentUrl = window.location.href;
        let newUrl = currentUrl.replace('-en', '-ar');
        window.location.href = newUrl;
    });
  }

});
