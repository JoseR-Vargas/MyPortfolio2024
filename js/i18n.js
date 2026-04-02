/**
 * LanguageManager — EN/ES i18n for portfolio
 * Applies translations via data-i18n*, persists choice in localStorage
 */
class LanguageManager {
    static STORAGE_KEY = 'portfolio_lang';

    static TRANSLATIONS = {
        en: {
            'meta.title': 'Jose Vargas | Full Stack Developer',
            'hero.typewriter': ['Backend Engineer', 'API Developer', 'Node.js Developer'],
            'hero.greeting': "// Hey, I'm",
            'hero.description': 'Backend Developer focused on building scalable services with <strong>Node.js</strong>, <strong>TypeScript</strong> and <strong>hexagonal architecture</strong> backed by SQL databases.',
            'hero.cta.work': 'View My Work',
            'hero.cta.contact': 'Get In Touch',
            'hero.scroll': 'Scroll',
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',
            'nav.openMenu': 'Open menu',
            'nav.closeMenu': 'Close menu',
            'about.tag': 'Who I am',
            'about.title': 'About Me',
            'about.subtitle': 'Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology',
            'about.bioTitle': 'Get to know me!',
            'about.bio1': "I'm a <strong>Backend Developer</strong> focused on designing and building robust server-side systems, REST APIs and business applications. I work primarily with <strong>NestJS</strong>, <strong>Node.js</strong> and <strong>TypeScript</strong>, with a strong emphasis on clean architecture, maintainability and long-term scalability. Check out my work in the <strong>Projects</strong> section.",
            'about.bio2': 'My backend experience includes migrating a legacy <strong>PHP</strong> application to <strong>Node.js</strong> and <strong>TypeScript</strong> with <strong>hexagonal architecture</strong> and <strong>Oracle Database 10</strong> for a power utility platform in Mendoza, Argentina. I also built a vacation management portal for a mining company in Peru and a product bidding portal, both backed by <strong>PostgreSQL</strong> and designed around clear domain boundaries for maintainable growth.',
            'about.downloadCV': 'Download CV',
            'about.skillsTitle': 'My Skills',
            'about.certsTitle': 'Certifications',
            'cert.view': 'View',
            'projects.tag': 'My work',
            'projects.title': 'Projects',
            'projects.subtitle': 'Here you will find some of the personal and client projects that I created with each project containing its own case study',
            'projects.p24.desc': 'Lead-generation website for a courier company in Montevideo, Uruguay. It helps capture quote requests from businesses and individuals, while an admin panel lets the team review and manage customer submissions from one place.',
            'projects.tecni.desc': 'Comprehensive website for a technical service company specializing in electronic device repairs. Features service listings, contact forms, location maps, and social media integration.',
            'projects.booking.desc': 'Appointment booking app built for a barbershop in Montevideo. Customers can choose services, date, time and professional, while the admin receives real-time notifications and can manage booking cancellations.',
            'projects.avila.desc': 'Client website for a Miami-based food truck with brand storytelling, a category-based digital menu, business hours, contact details, social media links, and a location section to help customers find the truck quickly.',
            'projects.liscake.desc': 'Modern, responsive website for a local bakery specializing in artisanal cakes and muffins. Features an ordering system, customer testimonials, and WhatsApp integration.',
            'projects.surprise.desc': 'E-commerce website for a special occasion arrangement business where customers can browse products, add items to the cart, and complete purchases using Mercado Pago or bank transfer.',
            'projects.hostal.desc': 'Rental portal for a Córdoba-based lodging business where users can explore room and apartment information, while the admin manages tenant requests, electricity meter submissions, payment vouchers, and invoice workflows.',
            'contact.tag': 'Get in touch',
            'contact.title': 'Contact',
            'contact.subtitle': 'Feel free to reach out by submitting the form below and I will get back to you as soon as possible',
            'contact.infoTitle': 'Let\'s build something <span class="text-gradient">amazing</span>',
            'contact.infoText': "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Don't hesitate to reach out.",
            'contact.label.location': 'Location',
            'contact.label.availability': 'Availability',
            'contact.label.response': 'Response time',
            'contact.val.availability': 'Mon \u2013 Fri, 9am \u2013 6pm UYT',
            'contact.val.response': 'Within 24 hours',
            'contact.form.name': 'Name',
            'contact.form.email': 'Email',
            'contact.form.phone': 'Phone',
            'contact.form.message': 'Message',
            'contact.form.namePh': 'Your name',
            'contact.form.messagePh': 'Tell me about your project...',
            'contact.form.submit': 'Send Message',
            'footer.desc': 'A Backend Developer focused on building robust server-side systems, REST APIs and business applications with Node.js, TypeScript and hexagonal architecture.',
            'footer.followMe': 'Follow me',
            'footer.rights': '\u00a9 2024 Jose Vargas \u2014 All rights reserved',
        },
        es: {
            'meta.title': 'Jose Vargas | Desarrollador Full Stack',
            'hero.typewriter': ['Ingeniero Backend', 'Desarrollador de APIs', 'Desarrollador Node.js'],
            'hero.greeting': '// Hola, soy',
            'hero.description': 'Desarrollador Backend enfocado en construir servicios escalables con <strong>Node.js</strong>, <strong>TypeScript</strong> y <strong>arquitectura hexagonal</strong> respaldados por bases de datos SQL.',
            'hero.cta.work': 'Ver mi trabajo',
            'hero.cta.contact': 'Cont\u00e1ctame',
            'hero.scroll': 'Bajar',
            'nav.home': 'Inicio',
            'nav.about': 'Sobre m\u00ed',
            'nav.projects': 'Proyectos',
            'nav.contact': 'Contacto',
            'nav.openMenu': 'Abrir men\u00fa',
            'nav.closeMenu': 'Cerrar men\u00fa',
            'about.tag': 'Qui\u00e9n soy',
            'about.title': 'Sobre m\u00ed',
            'about.subtitle': 'Aqu\u00ed encontrar\u00e1s m\u00e1s informaci\u00f3n sobre m\u00ed, lo que hago y mis habilidades actuales principalmente en programaci\u00f3n y tecnolog\u00eda',
            'about.bioTitle': '\u00a1Con\u00f3ceme!',
            'about.bio1': 'Soy un <strong>Desarrollador Backend</strong> enfocado en dise\u00f1ar y construir sistemas robustos del lado del servidor, APIs REST y aplicaciones de negocio. Trabajo principalmente con <strong>NestJS</strong>, <strong>Node.js</strong> y <strong>TypeScript</strong>, con un fuerte \u00e9nfasis en arquitectura limpia, mantenibilidad y escalabilidad a largo plazo. Revisa mi trabajo en la secci\u00f3n de <strong>Proyectos</strong>.',
            'about.bio2': 'Mi experiencia backend incluye la migraci\u00f3n de una aplicaci\u00f3n <strong>PHP</strong> legacy a <strong>Node.js</strong> y <strong>TypeScript</strong> con <strong>arquitectura hexagonal</strong> y <strong>Oracle Database 10</strong> para una plataforma el\u00e9ctrica en Mendoza, Argentina. Tambi\u00e9n constru\u00ed un portal de gesti\u00f3n de vacaciones para una minera en Per\u00fa y un portal de licitaci\u00f3n de productos, ambos con <strong>PostgreSQL</strong> y dise\u00f1ados con l\u00edmites de dominio claros para un crecimiento sostenible.',
            'about.downloadCV': 'Descargar CV',
            'about.skillsTitle': 'Mis habilidades',
            'about.certsTitle': 'Certificaciones',
            'cert.view': 'Ver',
            'projects.tag': 'Mi trabajo',
            'projects.title': 'Proyectos',
            'projects.subtitle': 'Aqu\u00ed encontrar\u00e1s algunos de los proyectos personales y de clientes que cre\u00e9, cada uno con su propio caso de estudio',
            'projects.p24.desc': 'Sitio web de captaci\u00f3n de leads para una empresa de mensajer\u00eda en Montevideo, Uruguay. Ayuda a capturar solicitudes de cotizaci\u00f3n de empresas y particulares, mientras que un panel de administraci\u00f3n permite al equipo revisar y gestionar las solicitudes desde un solo lugar.',
            'projects.tecni.desc': 'Sitio web integral para una empresa de servicio t\u00e9cnico especializada en reparaci\u00f3n de dispositivos electr\u00f3nicos. Incluye listado de servicios, formularios de contacto, mapas de ubicaci\u00f3n e integraci\u00f3n con redes sociales.',
            'projects.booking.desc': 'App de reserva de citas desarrollada para una barber\u00eda en Montevideo. Los clientes pueden elegir servicios, fecha, hora y profesional, mientras el administrador recibe notificaciones en tiempo real y puede gestionar cancelaciones.',
            'projects.avila.desc': 'Sitio web para un food truck de Miami con storytelling de marca, men\u00fa digital por categor\u00edas, horarios, datos de contacto, redes sociales y secci\u00f3n de ubicaci\u00f3n para que los clientes encuentren el cami\u00f3n f\u00e1cilmente.',
            'projects.liscake.desc': 'Sitio web moderno y responsivo para una panader\u00eda local especializada en tortas y budines artesanales. Incluye sistema de pedidos, testimonios de clientes e integraci\u00f3n con WhatsApp.',
            'projects.surprise.desc': 'Sitio e-commerce para un negocio de arreglos para ocasiones especiales donde los clientes pueden explorar productos, agregarlos al carrito y completar compras con Mercado Pago o transferencia bancaria.',
            'projects.hostal.desc': 'Portal de alquiler para un hospedaje cordob\u00e9s donde los usuarios pueden explorar habitaciones y apartamentos, mientras el administrador gestiona solicitudes de inquilinos, lecturas de medidores, comprobantes de pago y flujos de facturas.',
            'contact.tag': 'Ponte en contacto',
            'contact.title': 'Contacto',
            'contact.subtitle': 'No dudes en escribirme enviando el formulario a continuaci\u00f3n y te responder\u00e9 lo antes posible',
            'contact.infoTitle': 'Construyamos algo <span class="text-gradient">incre\u00edble</span>',
            'contact.infoText': 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tu visi\u00f3n. No dudes en contactarme.',
            'contact.label.location': 'Ubicaci\u00f3n',
            'contact.label.availability': 'Disponibilidad',
            'contact.label.response': 'Tiempo de respuesta',
            'contact.val.availability': 'Lun \u2013 Vie, 9am \u2013 6pm UYT',
            'contact.val.response': 'En menos de 24 horas',
            'contact.form.name': 'Nombre',
            'contact.form.email': 'Email',
            'contact.form.phone': 'Tel\u00e9fono',
            'contact.form.message': 'Mensaje',
            'contact.form.namePh': 'Tu nombre',
            'contact.form.messagePh': 'Cu\u00e9ntame sobre tu proyecto...',
            'contact.form.submit': 'Enviar mensaje',
            'footer.desc': 'Desarrollador Backend enfocado en construir sistemas robustos del lado del servidor, APIs REST y aplicaciones de negocio con Node.js, TypeScript y arquitectura hexagonal.',
            'footer.followMe': 'S\u00edgueme',
            'footer.rights': '\u00a9 2024 Jose Vargas \u2014 Todos los derechos reservados',
        }
    };

    constructor() {
        this.currentLang = localStorage.getItem(LanguageManager.STORAGE_KEY) || 'en';
        this.toggleBtn = document.getElementById('langToggle');
        this._applyLang(this.currentLang);
        if (this.toggleBtn) {
            this.toggleBtn.addEventListener('click', () => this.toggle());
        }
    }

    _applyLang(lang) {
        const t = LanguageManager.TRANSLATIONS[lang];
        if (!t) return;

        document.documentElement.lang = lang;
        document.title = t['meta.title'];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const v = t[el.dataset.i18n];
            if (v !== undefined) el.textContent = v;
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const v = t[el.dataset.i18nHtml];
            if (v !== undefined) el.innerHTML = v;
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const v = t[el.dataset.i18nPlaceholder];
            if (v !== undefined) el.placeholder = v;
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const v = t[el.dataset.i18nAria];
            if (v !== undefined) el.setAttribute('aria-label', v);
        });

        document.querySelectorAll('.lang-toggle__label').forEach(label => {
            label.classList.toggle('lang-toggle__label--active', label.dataset.lang === lang);
        });

        document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
    }

    toggle() {
        const next = this.currentLang === 'en' ? 'es' : 'en';
        this.currentLang = next;
        localStorage.setItem(LanguageManager.STORAGE_KEY, next);
        this._applyLang(next);
    }

    getTypewriterTexts() {
        return LanguageManager.TRANSLATIONS[this.currentLang]['hero.typewriter'];
    }
}
