// Script pour activer les animations de révélation
document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour vérifier si un élément est visible dans la fenêtre
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
            rect.bottom >= 0
        );
    }
    
    // Fonction pour révéler les éléments visibles
    function revealElements() {
        const elements = document.querySelectorAll('.reveal');
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('active');
            }
        });
    }
    
    // Exécuter la fonction au chargement et au défilement
    revealElements();
    window.addEventListener('scroll', revealElements);
    
    // Navigation mobile
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }
    
    // Smooth scrolling pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Fermer le menu mobile si ouvert
                if (nav && nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                }
            }
        });
    });
});