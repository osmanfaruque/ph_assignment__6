document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const nameInput = form.querySelector('input[type="text"]');
        const passwordInput = form.querySelector('input[type="password"]');

        // Validate inputs
        if (nameInput.value.trim() !== '' && passwordInput.value === '123456') {
            Swal.fire({
                title: "Good job!",
                text: "You have Successfully Logged in !",
                icon: "success"
            }).then((result) => {
                const navBar = document.getElementById('navbar');
                const bannerSection = document.getElementById('banner-section');
                const vocabSection = document.getElementById('vocab-section');
                const faqSection = document.getElementById('faq-section');

                // Hide banner section
                bannerSection.classList.remove('block');
                bannerSection.classList.add('hidden');

                // Show other sections
                navBar.classList.remove('hidden');
                vocabSection.classList.remove('hidden');
                faqSection.classList.remove('hidden');
            });
        } else if (nameInput.value.trim() === '' || passwordInput.value !== '123456') {
            if (nameInput.value.trim() === '') {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "You haven't Entered any Name!",
                  });
            }
            if (passwordInput.value !== '123456') {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "You have entered an Incorrect Pin!",
                  });
            }
            if (passwordInput.value === ''){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "You didn't enter any PIN!",
                  });
            }

        }
    });
});