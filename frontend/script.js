document.addEventListener('DOMContentLoaded', function() {
    const findTutorButton = document.getElementById('find-tutor');
    const loadingSpinner = document.getElementById('loading-spinner');
    const loginForm = document.getElementById('login-form');
    const loginSpinner = document.getElementById('login-spinner');
    const registerForm = document.getElementById('register-form');
    const registerSpinner = document.getElementById('register-spinner');

    // Tutor search functionality
    findTutorButton?.addEventListener('click', function() {
        const board = document.getElementById('board').value;
        const grade = document.getElementById('grade').value;
        const subject = document.getElementById('subject').value;

        if (board && grade && subject) {
            loadingSpinner.style.display = 'block';
            // Simulate an API call
            setTimeout(() => {
                loadingSpinner.style.display = 'none';
                alert(`Searching tutors for ${board}, Grade ${grade}, Subject ${subject}`);
            }, 2000);
        } else {
            alert('Please select all fields to find a tutor.');
        }
    });

    // Login form submission
    loginForm?.addEventListener('submit', async function(event) {
        event.preventDefault();
        loginSpinner.style.display = 'block';

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        loginSpinner.style.display = 'none';

        if (response.ok) {
            alert(data.message);
            window.location.href = 'index.html'; // Redirect to home page
        } else {
            alert(data.message);
        }
    });

    // Register form submission
    registerForm?.addEventListener('submit', async function(event) {
        event.preventDefault();
        registerSpinner.style.display = 'block';

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const phone = document.getElementById('phone').value;
        const gender = document.getElementById('gender').value;

        const response = await fetch('/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, phone, gender }),
        });

        const data = await response.json();
        registerSpinner.style.display = 'none';

        if (response.ok) {
            alert(data.message);
            window.location.href = 'index.html'; // Redirect to home page
        } else {
            alert(data.message);
        }
    });
});
