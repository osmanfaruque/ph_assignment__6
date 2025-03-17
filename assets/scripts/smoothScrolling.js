// Smooth scroll functionality for FAQ and Learn buttons
document.getElementById('faq-btn').addEventListener('click', function() {
    document.getElementById('faq-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.getElementById('learn-btn').addEventListener('click', function() {
    document.getElementById('vocab-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
});