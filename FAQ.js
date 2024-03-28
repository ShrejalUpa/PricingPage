const faqItems = document.querySelectorAll('.faq-items');
const plusIcons = document.querySelectorAll('.plus-icon');
const newsletterArrow = document.querySelector('.newsletter-section span');
const confirmationBox = document.querySelector('.confirmation-box');

plusIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    faqItems[index].querySelector('.answer').classList.toggle('hidden');
    plusIcons[index].textContent = faqItems[index].querySelector('.answer').classList.contains('hidden') ? '+' : '-';
  });
});

newsletterArrow.addEventListener('click', () => {
  confirmationBox.classList.toggle('hidden');
});



const dot1 = document.getElementById('dot1');
          const dot2 = document.getElementById('dot2');
          const dot3 = document.getElementById('dot3');
          const para1 = document.getElementById('para1');
          const para2 = document.getElementById('para2');
          const para3 = document.getElementById('para3');
  
          dot1.addEventListener('click', () => {
              para1.classList.remove('hidden');
              para2.classList.add('hidden');
              para3.classList.add('hidden');
          });
  
          dot2.addEventListener('click', () => {
              para1.classList.add('hidden');
              para2.classList.remove('hidden');
              para3.classList.add('hidden');
          });
  
          dot3.addEventListener('click', () => {
              para1.classList.add('hidden');
              para2.classList.add('hidden');
              para3.classList.remove('hidden');
          });