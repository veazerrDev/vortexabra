// ===== Mobile menu =====
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
});

// Close menu on link click
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav--open');
    });
});

// ===== Language switch =====
const translations = {
    uk: {
        'hero.title': 'Vortexabra',
        'hero.subtitle': 'Українська спільнота розробників Roblox',
        'hero.desc': 'Ми створюємо ігри рідною мовою, розвиваємо український сегмент Roblox, підтримуємо авторів та надихаємо нове покоління творців.',
        'about.title': 'Про нас',
        'about.card1.title': 'Створюємо ігри',
        'about.card1.desc': 'Розробляємо захопливі ігрові проєкти на платформі Roblox українською мовою.',
        'about.card2.title': 'Розвиваємо спільноту',
        'about.card2.desc': "Об'єднуємо українських розробників, ділимося досвідом та підтримуємо один одного.",
        'about.card3.title': 'Надихаємо',
        'about.card3.desc': 'Допомагаємо новачкам зробити перші кроки у світі геймдеву.',
        'projects.title': 'Наші проєкти',
        'projects.scriptforge': 'Інструмент для написання сценаріїв Roblox з підтримкою української мови.',
        'projects.duolingo': 'Ховайтеся та тікайте від розлюченої сови Duolingo у цій захопливій грі на Roblox.',
        'social.title': 'Соціальні мережі',
    },
    en: {
        'hero.title': 'Vortexabra',
        'hero.subtitle': 'Ukrainian Roblox developer community',
        'hero.desc': 'We create games in our native language, develop the Ukrainian segment of Roblox, support creators, and inspire a new generation of developers.',
        'about.title': 'About Us',
        'about.card1.title': 'Create Games',
        'about.card1.desc': 'We develop exciting game projects on the Roblox platform in Ukrainian.',
        'about.card2.title': 'Build Community',
        'about.card2.desc': 'We unite Ukrainian developers, share experience, and support each other.',
        'about.card3.title': 'Inspire',
        'about.card3.desc': 'We help beginners take their first steps in the world of game development.',
        'projects.title': 'Our Projects',
        'projects.scriptforge': 'A tool for writing Roblox scripts with Ukrainian language support.',
        'projects.duolingo': 'Hide and run from the furious Duolingo owl in this thrilling Roblox game.',
        'social.title': 'Social Networks',
    }
};

let currentLang = 'uk';

function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
    });
    currentLang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        applyLanguage(lang);
    });
});

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
