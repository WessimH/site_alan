// Définir les traductions
const translations = {
    en: 'security',
    es: 'seguridad',
    de: 'Sicherheit',
    it: 'sicurezza',
    pt: 'segurança',
    fr: 'sécurité',
    nl: 'veiligheid',
    pl: 'bezpieczeństwo',
    ru: 'безопасность',
    ja: 'セキュリティ',
    hi: 'सुरक्षा',
    ko: '보안',
    tr: 'güvenlik',
    ro: 'securitate',
    zh: '安全',
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
    th: 'ความปลอดภัย',
    fa: 'امنیت',
    ar: 'الأمان',
    he: 'בטיחות',
    ms: 'keselamatan',
    tl: 'seguridad',
    az: 'təhlükəsizlik',
    bn: 'নিরাপত্তা',
    bs: 'sigurnost',
    ca: 'seguretat',
    eo: 'sekureco',
    eu: 'segurtasuna',
    gl: 'seguridade',
    ht: 'sekirite',
};

// Obtenir l'élément qui contient le mot à traduire
const element = document.getElementById('securitee_animation');

// Fonction pour changer la langue
function changeLanguage(lang) {
    if (translations[lang]) {
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
