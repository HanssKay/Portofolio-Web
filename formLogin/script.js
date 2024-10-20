function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Validasi sederhana
    if (username === 'player' && password === '1234') {
        alert('Login successful! Welcome to the game.');
        return true; // biar form bisa submit
    } else {
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.display = 'block';
        return false; // agar tidak submit form
    }
}

// Fungsi untuk login melalui media sosial (simulasi)
document.querySelector('.google').addEventListener('click', function() {
    alert('Login with Google clicked!');
});

document.querySelector('.facebook').addEventListener('click', function() {
    alert('Login with Facebook clicked!');
});

document.querySelector('.email').addEventListener('click', function() {
    alert('Login with Email clicked!');
});
