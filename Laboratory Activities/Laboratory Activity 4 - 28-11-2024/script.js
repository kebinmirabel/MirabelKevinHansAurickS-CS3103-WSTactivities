const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '🌙';
        document.body.style.backgroundImage = "url('assets/bg-night.png')";
    } else {
        darkModeToggle.textContent = '☀️';
        document.body.style.backgroundImage = "url('assets/bg.png')";
    }
});
