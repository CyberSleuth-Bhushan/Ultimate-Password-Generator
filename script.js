document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        generatePassword();
    }
});

function generatePassword() {
    var uppercase = document.getElementById('uppercase').checked;
    var lowercase = document.getElementById('lowercase').checked;
    var numbers = document.getElementById('numbers').checked;
    var symbols = document.getElementById('symbols').checked;
    var strength = document.getElementById('strength').value;
    var length = document.getElementById('length').value;

    var chars = "";
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()";

    if (chars.length === 0) {
        alert('Please select at least one character set.');
        return;
    }

    var password = "";
    for (var i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("password").innerText = password;
}

function createFallingStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(star);

    // Remove the star after its animation duration
    setTimeout(() => {
        star.remove();
    }, 5000);
}

// Create multiple falling stars at random intervals
setInterval(createFallingStar, 500);
