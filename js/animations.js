// Définir les traductions
const translations = {
    en: 'security',
    es: 'seguridad',
    de: 'Sicherheit',
    it: 'sicurezza',
    pt: 'segurança',
    fr: 'sécurité',
    nl: 'veiligheid',
    tr: 'güvenlik',
    ro: 'securitate',
    hu: 'biztonság',
    cs: 'bezpečnost',
    sv: 'säkerhet',
    da: 'sikkerhed',
    fi: 'turvallisuus',
    el: 'ασφάλεια',
    sk: 'bezpečnosť',
    no: 'sikkerhet',
    uk: 'безпека',
    bg: 'сигурност',
    hr: 'sigurnost',
    lt: 'saugumas',
    sl: 'varnost',
    et: 'turvalisus',
    lv: 'drošība',
    id: 'keamanan',
    vi: 'an toàn',
    ms: 'keselamatan',
    tl: 'seguridad',
    az: 'təhlükəsizlik',
    bs: 'sigurnost',
    ca: 'seguretat',
    eo: 'sekureco',
    eu: 'segurtasuna',
    gl: 'seguridade',
    ht: 'sekirite',
};

// Obtenir l'élément qui contient le mot à traduire
const element = document.getElementById('securitee_animation');

// Variable pour suivre quelle classe d'animation est actuellement appliquée
let currentFadeClass = 'fade1';

// Fonction pour changer la langue
function changeLanguage(lang) {
    if (translations[lang]) {
        // Alterne entre 'fade1' et 'fade2' à chaque appel
        currentFadeClass = currentFadeClass === 'fade1' ? 'fade2' : 'fade1';
        // Retire les deux classes d'animation, au cas où l'une d'elles serait déjà appliquée
        element.classList.remove('fade1', 'fade2');
        // Applique la nouvelle classe d'animation
        element.classList.add(currentFadeClass);
        element.innerText = translations[lang];
    }
}

// Boucle pour changer la langue toutes les 2 secondes
let languages = Object.keys(translations);
let index = 0;
setInterval(() => {
    changeLanguage(languages[index]);
    index = (index + 1) % languages.length;
}, 2000);
