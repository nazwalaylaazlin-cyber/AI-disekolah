function login() {
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    const validPasswords = [
        "ai2025",
        "sekolahAI",
        "digitalEdu",
        "masukAI"
    ];

    if (validPasswords.includes(password)) {
        window.location.href = "home.html";
    } else {
        error.innerText = "❌ Password salah! Akses Dunia AI ditolak.";
    }
}
