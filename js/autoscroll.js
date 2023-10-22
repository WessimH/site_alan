// Créez une instance d'Intersection Observer
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Si l'élément est dans la zone visible
        if (entry.isIntersecting) {
            window.scrollBy(0, 500);
            // Vous pouvez arrêter d'observer l'élément si vous le souhaitez
            observer.unobserve(entry.target);
        }
    });
});

// Ciblez l'élément que vous souhaitez observer
let article = document.getElementById('articleObserver');

// Commencez à observer l'élément
observer.observe(article);