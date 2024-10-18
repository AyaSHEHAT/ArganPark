document.addEventListener("DOMContentLoaded", function () {
  const sliderOfCardsContainer = document.getElementById("sliderOfCards-container");
  const cards = Array.from(sliderOfCardsContainer.children);
  const visibleCards = 4; 
  let currentPosition = 0;

  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  prevBtn.disabled = true;

  function updateSlider() {
    cards.forEach((card, index) => {
      if (index >= currentPosition && index < currentPosition + visibleCards) {
        card.style.display = "block"; 
      } else {
        card.style.display = "none";
      }
    });

    prevBtn.disabled = currentPosition === 0;
    nextBtn.disabled = currentPosition + visibleCards >= cards.length;
  }

  nextBtn.addEventListener("click", function () {
    if (currentPosition + visibleCards < cards.length) {
      currentPosition++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentPosition > 0) {
      currentPosition--;
      updateSlider();
    }
  });


  updateSlider();

  const defaultContent = `
    <h5>تفاصيل الشقة</h5>
    <p> -غرفة نوم كبيرة بسرير مزدوج و جلسة جانبية مرفقة بدورة مياه</p>
    <p> -غرفة نوم بسرير مزدوج مزودة بالمناشف و مجهزه بجلسة جانبيه</p>
    <p> -دورة مياه مجهزة بمستلزمات العناية الشخصية</p>
    <p> -جميع الغرف مكتملة بالديكورات و الآثاث الفاخر</p>
  `;

  const describtionDiv = document.getElementById('describtion');
  describtionDiv.innerHTML = defaultContent;
  const links = document.querySelectorAll('.navbar-nav .nav-link');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      links.forEach(l => l.classList.remove('activeSideLink'));
      this.classList.add('activeSideLink');
      if (this.textContent === 'المواصفات') {
        describtionDiv.innerHTML = defaultContent;
      } else if (this.textContent === 'مرافق') {
        describtionDiv.innerHTML = `
          <h5>مرافق الشقة</h5>
          <p> -بركة سباحة</p>
          <p> -صالة رياضية مجهزة بالكامل</p>
          <p> -مواقف سيارات مجانية</p>
        `;
      } else if (this.textContent === 'سياسة الالغاء') {
        describtionDiv.innerHTML = `
          <h5>سياسة الإلغاء</h5>
          <p> -يمكن إلغاء الحجز بدون تكلفة قبل 24 ساعة من الوصول</p>
          <p> -إلغاء بعد 24 ساعة يترتب عليه رسوم إلغاء بنسبة 50%</p>
        `;
      } else if (this.textContent === 'الشروط') {
        describtionDiv.innerHTML = `
          <h5>الشروط</h5>
          <p> -الحيوانات الأليفة غير مسموحة</p>
          <p> -التدخين ممنوع داخل الشقة</p>
          <p> -الحد الأدنى للعمر للحجز هو 18 سنة</p>
        `;
      }
    });
  });
});

