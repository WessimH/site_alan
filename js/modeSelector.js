document.addEventListener("DOMContentLoaded", function () {
    // Vérifier la préférence de l'utilisateur pour le mode couleur
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // L'utilisateur préfère le mode sombre
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        // L'utilisateur préfère le mode clair ou n'a pas exprimé de préférence
        document.documentElement.setAttribute('data-theme', 'light');
    }

    // Écoutez les changements de préférence de l'utilisateur
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (event.matches) {
            // L'utilisateur a changé pour le mode sombre
            document.documentElement.setAttribute('data-theme', 'dark');
            document.getElementById('make-image').src = "images/LogoDark.jpg";
        } else {
            // L'utilisateur a changé pour le mode clair
            document.getElementById('make-image').src = "images/LogoLight.jpg";
            document.documentElement.setAttribute('data-theme', 'light');
        }
    });
});