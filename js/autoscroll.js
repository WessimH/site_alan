// Créez une instance d'Intersection Observer
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Si l'élément est dans la zone visible
        if (entry.isIntersecting) {
            // Centrez l'élément à l'écran
            entry.target.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

        }
    });
});

// Ciblez tous les éléments <article> pour l'observation
document.querySelectorAll('article').forEach(article => {
    observer.observe(article);
});