// Indicateur pour savoir si le défilement automatique est en cours
let isScrolling = false;

// Créez une instance d'Intersection Observer avec un seuil de 0.2
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Si plus de 20% de l'élément est visible et aucun défilement n'est en cours
        if (entry.intersectionRatio > 0.05 && !isScrolling) {
            // Marquez que le défilement automatique est en cours
            isScrolling = true;

            // Centrez l'élément à l'écran
            entry.target.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            // Après le défilement, attendez un peu et réinitialisez l'indicateur de défilement
            setTimeout(() => {
                isScrolling = false;
            }, 1000); // Attendre 1 seconde après le défilement
        }
    });
}, {threshold: 0.2});

// Ciblez tous les éléments <article> pour l'observation
document.querySelectorAll('article').forEach(article => {
    observer.observe(article);
});

// Écoutez l'événement de défilement pour réinitialiser l'indicateur si l'utilisateur fait défiler manuellement
window.addEventListener('scroll', () => {
    if (isScrolling) {
        // Si un défilement automatique est en cours, ne faites rien
        return;
    }
    // Réinitialisez l'indicateur de défilement automatique
    isScrolling = false;
}, {passive: true});
