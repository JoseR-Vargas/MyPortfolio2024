/**
 * Portfolio Main JavaScript - Refactorizado
 * Aplicando principios SOLID, DRY y YAGNI
 */

// ===== UTILITIES (DRY Principle) =====
class DOMUtils {
    static $(selector) {
        return document.querySelector(selector);
    }
    
    static $$(selector) {
        return document.querySelectorAll(selector);
    }
    
    static addClass(element, className) {
        if (element) element.classList.add(className);
    }
    
    static removeClass(element, className) {
        if (element) element.classList.remove(className);
    }
    
    static toggleClass(element, className) {
        if (element) element.classList.toggle(className);
    }
    
    static on(element, event, handler) {
        if (element) element.addEventListener(event, handler);
    }
}

// ===== NAVIGATION MANAGER (Single Responsibility Principle) =====
class NavigationManager {
    constructor() {
        this.navToggle = DOMUtils.$('#abrir');
        this.navClose = DOMUtils.$('#cerrar');
        this.navMenu = DOMUtils.$('#nav');
        this.navLinks = DOMUtils.$$('.nav__link');
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.handleScroll();
    }
    
    bindEvents() {
        DOMUtils.on(this.navToggle, 'click', () => this.showMenu());
        DOMUtils.on(this.navClose, 'click', () => this.hideMenu());
        
        this.navLinks.forEach(link => {
            DOMUtils.on(link, 'click', () => this.hideMenu());
        });
    }
    
    showMenu() {
        DOMUtils.addClass(this.navMenu, 'show-menu');
    }
    
    hideMenu() {
        DOMUtils.removeClass(this.navMenu, 'show-menu');
    }
    
    handleScroll() {
        const header = DOMUtils.$('.header');
        
        DOMUtils.on(window, 'scroll', () => {
            if (window.scrollY >= 50) {
                DOMUtils.addClass(header, 'scroll-header');
            } else {
                DOMUtils.removeClass(header, 'scroll-header');
            }
        });
    }
}

// ===== SMOOTH SCROLL MANAGER =====
class SmoothScrollManager {
    constructor() {
        this.init();
    }
    
    init() {
        const links = DOMUtils.$$('a[href^="#"]');
        
        links.forEach(link => {
            DOMUtils.on(link, 'click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = DOMUtils.$(targetId);
                
                if (targetElement) {
                    this.scrollToElement(targetElement);
                }
            });
        });
    }
    
    scrollToElement(element) {
        const headerHeight = DOMUtils.$('.header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// ===== FORM MANAGER =====
class FormManager {
    constructor() {
        this.form = DOMUtils.$('#contactForm');
        this.init();
    }
    
    init() {
        if (this.form) {
            DOMUtils.on(this.form, 'submit', (e) => this.handleSubmit(e));
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        if (this.validateForm(data)) {
            this.submitForm(data);
        }
    }
    
    validateForm(data) {
        const { name, email, message } = data;
        
        if (!name.trim() || !email.trim() || !message.trim()) {
            this.showMessage('Please fill in all fields', 'error');
            return false;
        }
        
        if (!this.isValidEmail(email)) {
            this.showMessage('Please enter a valid email address', 'error');
            return false;
        }
        
        return true;
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    async submitForm(data) {
        try {
            this.showMessage('Sending message...', 'info');
            
            // Simulate API call delay
            await this.simulateSubmission();
            
            // Add message to dashboard storage
            if (window.ContactFormIntegration) {
                window.ContactFormIntegration.addMessage(data);
            }
            
            this.showMessage('Message sent successfully!', 'success');
            this.form.reset();
        } catch (error) {
            this.showMessage('Error sending message. Please try again.', 'error');
        }
    }
    
    simulateSubmission() {
        return new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    showMessage(message, type) {
        let messageEl = DOMUtils.$('.form-message');
        
        if (!messageEl) {
            messageEl = document.createElement('div');
            messageEl.className = 'form-message';
            this.form.appendChild(messageEl);
        }
        
        messageEl.textContent = message;
        messageEl.className = `form-message form-message--${type}`;
        
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.remove();
            }
        }, 5000);
    }
}

// ===== SCROLL ANIMATIONS =====
class ScrollAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        if ('IntersectionObserver' in window) {
            this.setupObserver();
        }
    }
    
    setupObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    DOMUtils.addClass(entry.target, 'animate-in');
                }
            });
        }, options);
        
        const elementsToAnimate = DOMUtils.$$('.hero, .section__title, .project__card, .skill__item');
        elementsToAnimate.forEach(el => observer.observe(el));
    }
}

// ===== APP INITIALIZER =====
class PortfolioApp {
    constructor() {
        this.managers = [];
        this.init();
    }
    
    init() {
        if (document.readyState === 'loading') {
            DOMUtils.on(document, 'DOMContentLoaded', () => this.initializeManagers());
        } else {
            this.initializeManagers();
        }
    }
    
    initializeManagers() {
        try {
            this.managers.push(
                new NavigationManager(),
                new SmoothScrollManager(),
                new FormManager(),
                new ScrollAnimations()
            );
            
            console.log('Portfolio app initialized successfully');
        } catch (error) {
            console.error('Error initializing portfolio app:', error);
        }
    }
}

// ===== INITIALIZE APP =====
new PortfolioApp();