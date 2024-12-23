
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    // Connect to backend API
    fetch('https://replit-backend-url/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                if (data.role === 'student') {
                    window.location.href = '/student-dashboard'; // Redirect to Student Dashboard
                } else if (data.role === 'admin') {
                    window.location.href = '/admin-dashboard'; // Redirect to Admin Dashboard
                }
            } else {
                alert('Invalid credentials!');
            }
        })
        .catch(error => console.error('Error:', error));
});
