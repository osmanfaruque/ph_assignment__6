document.getElementById('logout-btn').addEventListener('click', function() {
    const navBar = document.getElementById('navbar');
    const bannerSection = document.getElementById('banner-section');
    const vocabSection = document.getElementById('vocab-section');
    const faqSection = document.getElementById('faq-section');
    
    navBar.classList.add('hidden');
    bannerSection.classList.remove('hidden');
    bannerSection.classList.add('block');
    vocabSection.classList.add('hidden');
    faqSection.classList.add('hidden');

});