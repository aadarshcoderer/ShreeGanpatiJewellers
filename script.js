// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');
const langToggle = document.getElementById('langToggle');

const translations = {
    en: {
        'nav.home': 'Home',
        'nav.ourCollections': 'Our Collections',
        'nav.featured': 'Featured',
        'nav.goldRate': 'Gold Rate',
        'nav.gallery': 'Gallery',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'products.title': 'Our Curated Jewellery Collection',
        'products.subtitle': 'We are showcasing our few popular top special jewellery pieces here, with detailed information and instant WhatsApp inquiry.',
        'products.feature1Title': 'Hallmarked Quality',
        'products.feature1Text': 'Certified quality on every piece.',
        'products.feature2Title': 'Custom Sizing',
        'products.feature2Text': 'Resize and personalize on request.',
        'products.feature3Title': 'Secure Purchase',
        'products.feature3Text': 'Transparent billing and trusted support.',
        'products.feature4Title': 'WhatsApp Ordering',
        'products.feature4Text': 'Instant inquiry and quick confirmation.',
        'catalog.viewDetails': 'View Details',
        'catalog.orderWhatsApp': 'Order on WhatsApp',
        'hero.title': 'Discover Timeless Elegance',
        'hero.subtitle': 'Premium jewellery crafted with passion and perfection for every special moment',
        'hero.callNow': 'Call Now',
        'hero.viewCollections': 'View Collections',
        'trust.premiumQuality': 'Premium Quality',
        'trust.authentic': '100% authentic jewellery',
        'trust.fastDelivery': 'Fast Delivery',
        'trust.quickShipping': 'Quick shipping available',
        'trust.securePayment': 'Secure Payment',
        'trust.safeTransactions': 'Safe transactions',
        'trust.support': '24/7 Support',
        'trust.customerCare': 'Customer care always ready',
        'featured.title': 'Featured Collections',
        'featured.viewMore': 'View More',
        'cta.enquireWhatsapp': 'Enquire on WhatsApp',
        'spec.weight': 'Weight',
        'spec.material': 'Material',
        'spec.certification': 'Certification',
        'spec.certified': 'Certified',
        'spec.rateOnRequest': 'Rate as per daily market',
        'product.p1.name': 'Triple Layer Jhumka',
        'product.p1.tag1': 'Earrings',
        'product.p1.tag2': 'Triple Layer',
        'product.p1.tag3': 'Bridal',
        'product.p2.name': 'Rani Haar Set',
        'product.p2.tag1': 'Haar Set',
        'product.p2.tag2': 'Custom Weight',
        'product.p2.tag3': 'Royal',
        'product.p3.name': 'Gold Baala',
        'product.p3.tag1': 'Balaa Pair',
        'product.p3.tag2': 'Engraved',
        'product.p3.tag3': '2-4 Tola',
        'product.p4.name': 'Crown Ring',
        'product.p4.tag1': 'Crown Ring',
        'product.p4.tag2': 'Diamond + Ruby',
        'product.p4.tag3': 'Ruby',
        'rate.title': 'Gold & Silver Rates',
        'rate.livePreview': 'Themed Rate Showcase',
        'rate.quickView': '',
        'rate.openFull': 'Open Full Rate',
        'rate.goldLabel': 'Gold Hallmark - Tola',
        'rate.silverLabel': 'Silver - Tola',
        'rate.dayDateLabel': 'Updated Day / Date',
        'rate.liveFromAdmin': 'Admin synced',
        'rate.summaryNote': '',
        'rate.source': 'Source: Admin dashboard',
        'gallery.title': 'Gallery',
        'about.title': 'About Us',
        'about.desc': 'We are dedicated to providing the finest jewellery pieces that combine traditional craftsmanship with modern design.',
        'about.f1': 'Experience since 2015',
        'about.f2': 'Expert craftsmen and designers',
        'about.f3': 'Premium materials only',
        'about.f4': 'Customer satisfaction guaranteed',
        'contact.title': 'Get In Touch',
        'contact.address': 'Address',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.hours': 'Hours',
        'contact.hoursValue': 'Sun - Fri: 8 AM - 6 PM',
        'contact.directions': 'Get Directions',
        'footer.tagline': 'Premium jewellery for every moment of your life.',
        'footer.quickLinks': 'Quick Links',
        'footer.followUs': 'Follow Us',
        'faq.title': 'Frequently Asked Questions',
        'faq.questions': [
            {
                question: 'Where is Shree Ganapati Jewellers located?',
                answer: 'Shree Ganapati Jewellers is located at JCI Chowk, Tulsipur-5, Dang, Nepal.'
            },
            {
                question: 'What are your shop opening hours?',
                answer: 'Our shop is open Sunday to Friday from 8:00 AM to 6:00 PM.'
            },
            {
                question: 'Do you provide custom jewellery making?',
                answer: 'Yes, we provide custom jewellery making services based on customer design preference.'
            },
            {
                question: 'How can I inquire about daily gold and silver rates?',
                answer: 'You can check the live rate section on the website or contact us directly via WhatsApp or phone.'
            }
        ]
    },
    ne: {
        'nav.home': 'गृहपृष्ठ',
        'nav.ourCollections': 'हाम्रा कलेक्सन',
        'nav.featured': 'विशेष',
        'nav.goldRate': 'सुन/चाँदी दर',
        'nav.gallery': 'ग्यालरी',
        'nav.about': 'हाम्रो बारेमा',
        'nav.contact': 'सम्पर्क',
        'products.title': 'हाम्रो केही गहना कलेक्सन',
        'products.subtitle': 'यहाँ हामीले हाम्रा केही लोकप्रिय विशेष गहना उत्पादनहरू देखाएका छौं, विस्तृत विवरण र तुरुन्त WhatsApp सोधपुछ सहित।',
        'products.feature1Title': 'हलमार्क गुणस्तर',
        'products.feature1Text': 'हरेक गहनामा प्रमाणित गुणस्तर।',
        'products.feature2Title': 'कस्टम साइजिङ',
        'products.feature2Text': 'आवश्यकता अनुसार साइज र डिजाइन परिवर्तन।',
        'products.feature3Title': 'सुरक्षित खरिद',
        'products.feature3Text': 'पारदर्शी बिलिङ र विश्वसनीय सेवा।',
        'products.feature4Title': 'WhatsApp अर्डर',
        'products.feature4Text': 'तुरुन्त सोधपुछ र छिटो पुष्टि।',
        'catalog.viewDetails': 'विवरण हेर्नुहोस्',
        'catalog.orderWhatsApp': 'WhatsApp मा अर्डर',
        'hero.title': 'परम्परागत कला, आधुनिक पहिचान',
        'hero.subtitle': 'हरेक विशेष क्षणका लागि तयार गरिएको उत्कृष्ठ गहनाहरू, सीप र समर्पणका साथ तयार गरिएको।',
        'hero.callNow': 'अहिले फोन गर्नुहोस्',
        'hero.viewCollections': 'हाम्रा डिजाइनहरू हेर्नुहोस्',
        'trust.premiumQuality': 'उच्च गुणस्तर',
        'trust.authentic': '१००% वास्तविक गहना',
        'trust.fastDelivery': 'छिटो डेलिभरी',
        'trust.quickShipping': 'छिटो ढुवानी उपलब्ध',
        'trust.securePayment': 'सुरक्षित भुक्तानी',
        'trust.safeTransactions': 'सुरक्षित कारोबार',
        'trust.support': '२४/७ सहयोग',
        'trust.customerCare': 'ग्राहक सेवा सधैं तयार',
        'featured.title': 'विशेष कलेक्सनहरू',
        'featured.viewMore': 'थप हेर्नुहोस्',
        'cta.enquireWhatsapp': 'WhatsApp मा सोधपुछ गर्नुहोस्',
        'spec.weight': 'तोला',
        'spec.material': 'धातु',
        'spec.certification': 'प्रमाणीकरण',
        'spec.certified': 'प्रमाणित',
        'spec.rateOnRequest': 'आजको बजार दर अनुसार',
        'product.p1.name': 'परम्परागत सुनको तीन लेयर झुम्का',
        'product.p1.tag1': 'झुम्का',
        'product.p1.tag2': 'तीन लेयर',
        'product.p1.tag3': 'विवाह विशेष',
        'product.p2.name': 'शाही रानी हार र झुम्का सेट',
        'product.p2.tag1': 'रानी हार सेट',
        'product.p2.tag2': 'रोजाइ अनुसार तोला',
        'product.p2.tag3': 'रोयल',
        'product.p3.name': 'आकर्षक बुट्टेदार सुनको पाता बाला',
        'product.p3.tag1': 'पाता बाला',
        'product.p3.tag2': 'कुँदिएको बुट्टा',
        'product.p3.tag3': '२-४ तोला',
        'product.p4.name': 'हिरा र माणि जडित क्राउन रिङ',
        'product.p4.tag1': 'क्राउन रिङ',
        'product.p4.tag2': 'हिरा + माणि',
        'product.p4.tag3': 'माणि',
        'rate.title': 'सुन र चाँदी दर',
        'rate.livePreview': 'थिम गरिएको दर शोकेस',
        'rate.quickView': '',
        'rate.openFull': 'पूरा दर खोल्नुहोस्',
        'rate.goldLabel': 'छापावाल सुन - तोला',
        'rate.silverLabel': 'चाँदी - तोला',
        'rate.dayDateLabel': 'अपडेट गरिएको दिन / मिति',
        'rate.liveFromAdmin': 'एडमिन सिंक भएको',
        'rate.summaryNote': '',
        'rate.source': 'स्रोत: एडमिन ड्यासबोर्ड',
        'gallery.title': 'ग्यालरी',
        'about.title': 'हाम्रो बारेमा',
        'about.desc': 'हामी परम्परागत सीप र आधुनिक डिजाइनको संगम भएका उत्कृष्ट गहनाहरू प्रदान गर्न समर्पित छौं।',
        'about.f1': '२०१५ देखि अनुभव',
        'about.f2': 'अनुभवी कारीगर र डिजाइनर',
        'about.f3': 'उच्च गुणस्तरका सामग्री मात्र',
        'about.f4': 'ग्राहक सन्तुष्टि सुनिश्चित',
        'contact.title': 'सम्पर्क गर्नुहोस्',
        'contact.address': 'ठेगाना',
        'contact.phone': 'फोन',
        'contact.email': 'इमेल',
        'contact.hours': 'समय',
        'contact.hoursValue': 'आइत - शुक्र: बिहान ८ बजे - साँझ ६ बजे',
        'contact.directions': 'दिशा पत्ता लगाउनुहोस्',
        'footer.tagline': 'जीवनका हरेक क्षणका लागि उत्कृष्ट गहना।',
        'footer.quickLinks': 'द्रुत लिंकहरू',
        'footer.followUs': 'हामीलाई फलो गर्नुहोस्',
        'faq.title': 'बारम्बार सोधिने प्रश्नहरू',
        'faq.questions': [
            {
                question: 'श्री गणपति ज्वैलर्स कहाँ अवस्थित छ?',
                answer: 'JCI Chowk, Tulsipur-5, Dang, Nepal मा श्री गणपति ज्वैलर्स अवस्थित छ।'
            },
            {
                question: 'तपाईंहरूको पसल कहिले खुल्छ?',
                answer: 'हाम्रो पसल आइतबारदेखि शुक्रबारसम्म बिहान 8:00 बजेदेखि साँझ 6:00 बजेसम्म खुला हुन्छ।'
            },
            {
                question: 'के तपाईं कस्टम गहना बनाउनुहुन्छ?',
                answer: 'हो, तपाईंको डिजाइन र चाहना अनुसार हामी कस्टम गहना बनाउँछौं।'
            },
            {
                question: 'दैनिक सुनचाँदीको रेट र उपलब्धता कसरी थाहा पाउने?',
                answer: 'वेबसाइटको live rate section हेर्न सक्नुहुन्छ वा WhatsApp/फोनमार्फत हामीलाई सम्पर्क गर्न सक्नुहुन्छ।'
            }
        ]
    }
};

function renderFaq(lang) {
    const faqAccordion = document.getElementById('faqAccordion');
    const faqSchema = document.getElementById('faqSchema');

    if (!faqAccordion) {
        return;
    }

    const faqEntries = translations[lang]?.['faq.questions'] || translations.en['faq.questions'];
    faqAccordion.innerHTML = faqEntries.map((item) => `
        <details class="faq-item">
            <summary>${item.question}</summary>
            <p>${item.answer}</p>
        </details>
    `).join('');

    if (faqSchema) {
        faqSchema.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqEntries.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.answer
                }
            }))
        });
    }
}

function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (key && dict[key]) {
            el.textContent = dict[key];
        }
    });

    document.documentElement.lang = lang === 'ne' ? 'ne' : 'en';
    const isProductsPage = window.location.pathname.endsWith('/products') || !!document.getElementById('productsCatalog');
    if (isProductsPage) {
        document.title = lang === 'ne'
            ? 'हाम्रा कलेक्सन - श्री गणपति ज्वैलर्स'
            : 'Our Collections - श्री गणपति ज्वैलर्स';
    } else {
        document.title = lang === 'ne'
            ? 'श्री गणपति ज्वैलर्स - प्रिमियम गहना पसल'
            : 'श्री गणपति ज्वैलर्स - Premium Jewellery Shop';
    }

    if (langToggle) {
        langToggle.textContent = lang === 'en' ? 'ने' : 'EN';
        langToggle.setAttribute('aria-label', lang === 'en' ? 'Switch to Nepali language' : 'Switch to English language');
    }

    renderFaq(lang);

    if (typeof window.refreshProductsCatalog === 'function') {
        window.refreshProductsCatalog();
    }

    if (typeof window.refreshFeaturedCatalog === 'function') {
        window.refreshFeaturedCatalog();
    }
}

function initLanguageToggle() {
    if (!langToggle) {
        return;
    }

    const savedLang = localStorage.getItem('siteLang') || 'en';
    applyLanguage(savedLang);

    langToggle.addEventListener('click', () => {
        const currentLang = localStorage.getItem('siteLang') || 'en';
        const nextLang = currentLang === 'en' ? 'ne' : 'en';
        localStorage.setItem('siteLang', nextLang);
        applyLanguage(nextLang);
    });
}

function setMenuState(isOpen) {
    if (!burger || !navLinks) {
        return;
    }

    navLinks.classList.toggle('active', isOpen);
    burger.classList.toggle('active', isOpen);
    navOverlay?.classList.toggle('active', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

function closeMenu() {
    setMenuState(false);
}

function toggleMenu() {
    if (!navLinks) {
        return;
    }

    const isOpen = navLinks.classList.contains('active');
    setMenuState(!isOpen);
}

if (burger) {
    burger.addEventListener('click', toggleMenu);

    // Keyboard support
    burger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });
}

// Close mobile menu when a link is clicked
const navLinksItems = document.querySelectorAll('.nav-links a');
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

navOverlay?.addEventListener('click', closeMenu);

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks?.classList.contains('active')) {
        closeMenu();
    }
});

// Active Section Highlighting in Navbar
function initActiveNavHighlight() {
    const isProductsPage = window.location.pathname.endsWith('/products');
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a[href*="#"], .nav-links a[href="/products"]');
    
    // Handle products page nav link
    if (isProductsPage) {
        navItems.forEach(item => item.classList.remove('active'));
        const productsLink = document.querySelector('.nav-links a[href="/products"]');
        if (productsLink) {
            productsLink.classList.add('active');
        }
    }

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.id;
                
                // Remove active class from all nav items except if on products page
                if (!isProductsPage) {
                    navItems.forEach(item => item.classList.remove('active'));
                    
                    // Add active class to matching nav item
                    const activeLink = document.querySelector(`.nav-links a[href="#${activeId}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
}

initActiveNavHighlight();

// Floating WhatsApp Hint Animation
const floatingWhatsApp = document.querySelector('.floating-whatsapp');

function initGalleryModal() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('galleryModalImage');
    const modalVideo = document.getElementById('galleryModalVideo');
    const modalCaption = document.getElementById('galleryModalCaption');
    const closeBtn = document.getElementById('galleryClose');

    if (!galleryItems.length || !modal || !modalImage || !modalVideo || !modalCaption || !closeBtn) {
        return;
    }

    const closeModal = () => {
        modalVideo.src = '';
        modalVideo.pause();
        modalVideo.currentTime = 0;
        modalVideo.style.display = 'none';
        modalImage.style.display = 'block';
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    };

    galleryItems.forEach((item) => {
        item.addEventListener('click', () => {
            const fullImage = item.getAttribute('data-full') || '';
            const videoUrl = item.getAttribute('data-video') || '';
            const type = item.getAttribute('data-type') || 'image';
            const caption = item.getAttribute('data-caption') || 'Gallery image';

            if (type === 'video' && videoUrl) {
                modalImage.style.display = 'none';
                modalVideo.style.display = 'block';
                modalVideo.src = videoUrl;
                modalVideo.muted = true;
                modalVideo.loop = true;
                modalVideo.currentTime = 0;
                modalVideo.load();
                const autoplayAttempt = modalVideo.play();
                if (autoplayAttempt && typeof autoplayAttempt.catch === 'function') {
                    autoplayAttempt.catch(() => {
                        // Browser may block autoplay; controls remain available.
                    });
                }
            } else {
                modalVideo.src = '';
                modalVideo.pause();
                modalVideo.currentTime = 0;
                modalVideo.style.display = 'none';
                modalImage.style.display = 'block';
                modalImage.src = fullImage;
                modalImage.alt = caption;
            }

            modalCaption.textContent = caption;
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
        });
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function initHomepageGalleryControl() {
    const galleryItems = Array.from(document.querySelectorAll('[data-gallery-slot]'));
    if (!galleryItems.length) {
        return;
    }

    const slots = {
        img1: { type: 'image' },
        img2: { type: 'image' },
        img3: { type: 'image' },
        img4: { type: 'image' },
        vid1: { type: 'video' },
        vid2: { type: 'video' },
        vid3: { type: 'video' },
        vid4: { type: 'video' }
    };

    const updateImageSlot = (item, value) => {
        const mediaUrl = normalizeMediaUrl(value);
        if (!mediaUrl) return;
        const img = item.querySelector('[data-gallery-thumb]') || item.querySelector('img');
        if (img) {
            img.src = mediaUrl;
        }
        item.setAttribute('data-full', mediaUrl);
    };

    const updateVideoSlot = (item, value) => {
        const mediaUrl = normalizeMediaUrl(value);
        const video = item.querySelector('[data-gallery-video]') || item.querySelector('video');
        const source = video ? video.querySelector('source') : null;
        if (source) {
            if (mediaUrl) {
                source.src = mediaUrl;
            } else {
                source.removeAttribute('src');
            }
        }
        if (video) {
            if (source) {
                video.removeAttribute('src');
            } else if (mediaUrl) {
                video.src = mediaUrl;
            } else {
                video.removeAttribute('src');
            }
            video.load();
        }
        if (mediaUrl) {
            item.setAttribute('data-video', mediaUrl);
        } else {
            item.removeAttribute('data-video');
        }
    };

    const applyGalleryData = (data) => {
        galleryItems.forEach((item) => {
            const slotKey = item.getAttribute('data-gallery-slot');
            const slot = slots[slotKey];
            if (!slot) return;
            const value = data?.[slotKey];
            if (slot.type === 'image') {
                updateImageSlot(item, value);
            } else {
                updateVideoSlot(item, value);
            }
        });
    };

    if (!(window.firebase && firebase.firestore)) {
        return;
    }

    const db = firebase.firestore();
    db.collection('gallery').doc('homepage_gallery').onSnapshot((doc) => {
        const data = doc.exists ? doc.data() : {};
        applyGalleryData(data || {});
    }, (error) => {
        console.debug('gallery snapshot failed', error);
    });
}

// Fetch daily live rates from Firestore (if available) and update the UI.
async function fetchDailyRates() {
    const goldEl = document.getElementById('gold-rate-value');
    const silverEl = document.getElementById('silver-rate');
    const rateDateEl = document.getElementById('rate-day-date');

    const setFallback = (g, s, dayDate) => {
        // Only overwrite existing DOM if admin-provided values exist
        const formatRate = (val) => {
            if (val === null || val === undefined) return null;
            const str = String(val).trim();
            if (str === '') return null;
            // if already contains currency symbol/label, return as-is
            if (/\b(Nrs|Rs|रु|NPR)\b|₹/.test(str)) return str;
            return `Nrs. ${str}`;
        };

        const gFormatted = formatRate(g);
        const sFormatted = formatRate(s);

        if (goldEl && gFormatted) goldEl.textContent = gFormatted;
        if (silverEl && sFormatted) silverEl.textContent = sFormatted;
        if (rateDateEl && dayDate !== null && dayDate !== undefined && String(dayDate).trim() !== '') rateDateEl.textContent = String(dayDate).trim();
    };

    // Try Firestore first
    try {
        if (window.firebase && firebase.firestore) {
            const db = firebase.firestore();
            const doc = await db.collection('settings').doc('live_rates').get();
            if (doc && doc.exists) {
                const data = doc.data();
                const gold = data?.gold ?? data?.goldRate ?? null;
                const silver = data?.silver ?? data?.silverRate ?? null;
                const dayDate = data?.rateDate ?? data?.dayDate ?? data?.dateLabel ?? null;
                setFallback(gold, silver, dayDate);
                return;
            }
        }
    } catch (err) {
        // Firestore not available or network error — fall through to local fallback
        console.debug('fetchDailyRates: Firestore unavailable', err);
    }

    // Local fallback: read from localStorage key 'live_rates' or previously saved admin rates
    try {
        const local = JSON.parse(localStorage.getItem('live_rates') || null) || JSON.parse(localStorage.getItem('adminDashboardRates') || null);
        if (local) {
            setFallback(local.gold ?? local.goldRate, local.silver ?? local.silverRate, local.rateDate ?? local.dayDate ?? local.dateLabel);
            return;
        }
    } catch (e) {
        // ignore parse errors
    }

    // No data available
    setFallback(null, null, null);
}

// Run on load to populate live rate spans when present
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fetchDailyRates);
} else {
    fetchDailyRates();
}

function getCurrentSiteLanguage() {
    return localStorage.getItem('siteLang') || 'en';
}

function localizeProduct(product, lang) {
    const language = lang === 'ne' ? 'ne' : 'en';
    return {
        ...product,
        nameText: product.name?.[language] || product.name?.en || '',
        descriptionText: product.description?.[language] || product.description?.en || '',
        tagsText: product.tags?.[language] || product.tags?.en || []
    };
}

function buildProductsData() {
    return [
        {
            id: 'necklaces-001',
            name: {
                en: 'Bridal Grand Rani Haar',
                ne: 'दुलही रानी हार'
            },
            category: 'necklaces',
            weight: '२ तोला देखि १० तोला',
            material: 'Gold',
            certification: 'Certified',
            tags: {
                en: ['Rani Haar', 'Bridal', '2-10 Tola'],
                ne: ['रानी हार', 'दुलही', '२ तोला देखि १० तोला']
            },
            description: {
                en: 'A grand bridal rani haar with royal traditional design for wedding looks.',
                ne: 'विशेष कलेक्सनको भव्य रानी हार, दुलहीका लागि रोयल र परम्परागत डिजाइन।'
            },
            image: 'img/ranihaar.webp'
        },
        {
            id: 'necklaces-002',
            name: {
                en: 'Attractive Short Haar',
                ne: 'आकर्षक छोटो हार'
            },
            category: 'necklaces',
            weight: '२-४ तोला',
            material: 'Gold',
            certification: 'Certified',
            tags: {
                en: ['Short Haar', 'Daily Wear', '2-4 Tola'],
                ne: ['छोटो हार', 'दैनिक प्रयोग', '२-४ तोला']
            },
            description: {
                en: 'Lightweight and attractive short haar for daily wear and party styling.',
                ne: 'हल्का र आकर्षक छोटो हार, दैनिकी तथा पार्टी दुवैका लागि उपयुक्त।'
            },
            image: 'img/short_haar.webp'
        },
        {
            id: 'necklaces-003',
            name: {
                en: 'Chadke Tilhari',
                ne: 'छड्के तिलहरी'
            },
            category: 'necklaces',
            weight: '६ आना देखि १ तोला',
            material: 'Gold',
            certification: 'Certified',
            tags: {
                en: ['Tilhari', 'Traditional', '2-4 Tola'],
                ne: ['तिलहरी', 'परम्परागत', '६ आना देखि १ तोला']
            },
            description: {
                en: 'Traditional chadke tilhari carrying cultural identity for festivals and weddings.',
                ne: 'सांस्कृतिक पहिचान बोकेको छड्के तिलहरी, विशेष पर्व र विवाहका लागि।'
            },
            image: 'img/chadke_tilhari.webp'
        },
        {
            id: 'necklaces-004',
            name: {
                en: 'Maili Tilhari',
                ne: 'माइली तिलहरी'
            },
            category: 'necklaces',
            weight: '२ आना देखि ८ आना',
            material: 'Gold',
            certification: 'Certified',
            tags: {
                en: ['Tilhari', 'Classic', '1-2.5 Tola'],
                ne: ['तिलहरी', 'क्लासिक', '२ आना देखि ८ आना']
            },
            description: {
                en: 'Classic maili tilhari with customizable traditional styling.',
                ne: 'परम्परागत स्टाइलको माइली तिलहरी, मनपर्ने डिजाइनमा उपलब्ध।'
            },
            image: 'img/maili_tilhari.webp'
        },
        {
            id: 'others-001',
            name: {
                en: 'Shirbandi',
                ne: 'शिरबन्दी'
            },
            category: 'others',
            weight: '३ आना देखि ८ आना',
            material: 'Gold',
            certification: 'Certified',
            tags: {
                en: ['Head Jewelry', 'Bridal', '3-6 Tola'],
                ne: ['शिर गहना', 'दुलही', '३ आना देखि ८ आना']
            },
            description: {
                en: 'Special shirbandi for bridal head styling with elegant traditional details.',
                ne: 'शिरको सुन्दरताका लागि विशेष शिरबन्दी, दुलही सेटसँग मिल्दो डिजाइन।'
            },
            image: 'img/shirbandi.webp'
        },
        {
            id: 'others-002',
            name: {
                en: 'Chandrama Clip',
                ne: 'चन्द्रमा क्लिप'
            },
            category: 'others',
            weight: '१ आना देखि ४ आना',
            material: 'Gold',
            certification: 'Certified',
            tags: {
                en: ['Chandrama Clip', 'Head Accessory', '1-2 Tola'],
                ne: ['चन्द्रमा क्लिप', 'हेड एसेसरी', '१ आना देखि ४ आना']
            },
            description: {
                en: 'Chandrama clip for head adornment with a graceful traditional-modern blend.',
                ne: 'शिर सजावटका लागि चन्द्रमा क्लिप, परम्परा र आधुनिकताको राम्रो संयोजन।'
            },
            image: 'img/chandrama_clip.webp'
        },
        {
            id: 'bracelets-001',
            name: {
                en: 'Buttedar Pata Baala',
                ne: 'बुट्टेदार पाता बाला'
            },
            category: 'bracelets',
            weight: '२-४ तोला',
            material: 'Gold / Silver',
            certification: 'Certified',
            tags: {
                en: ['Baala', 'Buttedar', '2-4 Tola'],
                ne: ['बाला', 'बुट्टेदार', '२-४ तोला']
            },
            description: {
                en: 'Engraved pata baala design for hands with rich traditional motifs.',
                ne: 'हातका लागि बुट्टेदार पाता बाला, आकर्षक नक्कासी सहित।'
            },
            image: 'img/balaa.webp'
        },
        {
            id: 'bracelets-002',
            name: {
                en: 'Stone Bracelet',
                ne: 'पत्थर ब्रासलेट'
            },
            category: 'bracelets',
            weight: '३ तोला देखि ५ तोला',
            material: 'Gold / Silver',
            certification: 'Certified',
            tags: {
                en: ['Stone Bracelet', 'Modern', '3-5 Tola'],
                ne: ['पत्थर ब्रासलेट', 'आधुनिक', '३ तोला देखि ५ तोला']
            },
            description: {
                en: 'Modern stone bracelet with lightweight structure and stylish finish.',
                ne: 'आधुनिक डिजाइनको पत्थर ब्रासलेट, हल्का र स्टाइलिश फिनिसिङ।'
            },
            image: 'img/stone_bracelet.webp'
        },
        {
            id: 'rings-001',
            name: {
                en: 'Rashi Ring',
                ne: 'राशि औंठी'
            },
            category: 'rings',
            weight: '७ आना देखि १ तोला',
            material: 'Gold',
            certification: 'Certified',
            tags: {
                en: ['Rashi Ring', 'Jyotish', '7 Anna - 1 Tola'],
                ne: ['राशि औंठी', 'ज्योतिष', '७ आना देखि १ तोला']
            },
            description: {
                en: 'Astrology-guided rashi rings crafted in personalized custom designs.',
                ne: 'ज्योतिषिय परामर्श अनुसार तयार गरिने राशि औंठी, व्यक्तिगत डिजाइनमा उपलब्ध।'
            },
            image: 'img/rashi_ring.webp'
        },
        {
            id: 'earrings-001',
            name: {
                en: 'Attractive Mundra',
                ne: 'आकर्षक मुन्द्रा'
            },
            category: 'earrings',
            weight: '२ आना देखि ८ आना',
            material: 'Gold',
            certification: 'Certified',
            tags: {
                en: ['Mundra', 'Earrings', 'Traditional'],
                ne: ['मुन्द्रा', 'इयररिङ', 'परम्परागत']
            },
            description: {
                en: 'Attractive mundra set suitable for both daily wear and festive looks.',
                ne: 'आकर्षक मुन्द्रा सेट, दैनिक र पर्व दुवै प्रयोगका लागि।'
            },
            image: 'img/mundra.webp'
        },
        {
            id: 'earrings-002',
            name: {
                en: 'Jhumka',
                ne: 'झुम्का'
            },
            category: 'earrings',
            weight: '१.५-३.५ तोला',
            material: 'Gold',
            certification: 'Certified',
            tags: {
                en: ['Jhumka', 'Festival', '1.5-3.5 Tola'],
                ne: ['झुम्का', 'पर्व विशेष', '१.५-३.५ तोला']
            },
            description: {
                en: 'Jhumka collection in multiple sizes and designs for weddings and events.',
                ne: 'विभिन्न साइज र डिजाइनमा उपलब्ध झुम्का, विवाह र विशेष कार्यक्रमका लागि।'
            },
            image: 'img/jhumka.webp'
        },
        {
            id: 'others-003',
            name: {
                en: 'Gold Top',
                ne: 'सुनको टप'
            },
            category: 'earrings',
            weight: '४ आना देखि ११ आना',
            material: 'Gold',
            certification: 'Certified',
            tags: {
                en: ['Top', 'Gold', 'Custom Design'],
                ne: ['टप', 'सुन', 'कस्टम डिजाइन']
            },
            description: {
                en: 'Gold tops in multiple motif patterns made to customer preference.',
                ne: 'विभिन्न बुट्टाका सुनको टप, ग्राहकको रोजाइ अनुसार तयार गरिन्छ।'
            },
            image: 'img/gold_top.webp'
        },
        {
            id: 'others-004',
            name: {
                en: 'Top Tiki',
                ne: 'टप टिकी'
            },
            category: 'others',
            weight: '३ आना देखि ८ आना',
            material: 'Gold',
            certification: 'Certified',
            tags: {
                en: ['Top Tiki', 'Gold', 'Lightweight'],
                ne: ['टप टिकी', 'सुन', 'हल्का']
            },
            description: {
                en: 'Top tiki designs that blend well with modern and traditional styling.',
                ne: 'फेस र हेयर स्टाइलसँग मिल्ने टप टिकी, आधुनिक र परम्परागत दुवैमा।'
            },
            image: 'img/top_tiki.webp'
        },
        {
            id: 'others-005',
            name: {
                en: 'Phuli',
                ne: 'फुली'
            },
            category: 'others',
            weight: '१ आना देखि ५ आना',
            material: 'Gold',
            certification: 'Certified',
            tags: {
                en: ['Phuli', 'Nose Jewelry', 'Custom'],
                ne: ['फुली', 'नाक गहना', 'कस्टम']
            },
            description: {
                en: 'Phuli designs from minimal to ornate motifs, available in custom styles.',
                ne: 'विभिन्न डिजाइनको फुली, सानोदेखि आकर्षक बुट्टासम्म।'
            },
            image: 'img/phuli.webp'
        },
        {
            id: 'necklaces-005',
            name: {
                en: 'Naugedi',
                ne: 'नौगेडी'
            },
            category: 'necklaces',
            weight: '४ आना देखि ८ आना',
            material: 'Gold',
            certification: 'Certified',
            tags: {
                en: ['Naugedi', 'Heritage', 'Traditional'],
                ne: ['नौगेडी', 'प्रतिष्ठित', 'परम्परागत']
            },
            description: {
                en: 'Prestigious heritage naugedi pattern reflecting classic Nepali tradition.',
                ne: 'पुरानो र प्रतिष्ठित नौगेडी डिजाइन, सांस्कृतिक पहिचानसहित।'
            },
            image: 'img/naugedi.webp'
        },
        {
            id: 'necklaces-006',
            name: {
                en: 'Jantar',
                ne: 'जन्तर'
            },
            category: 'necklaces',
            weight: '१ आना देखि ४ आना',
            material: 'Gold',
            certification: 'Certified',
            tags: {
                en: ['Jantar', 'Traditional', 'Handcrafted'],
                ne: ['जन्तर', 'परम्परागत', 'हस्तकला']
            },
            description: {
                en: 'Handcrafted jantar with a modern presentation of classic design language.',
                ne: 'हातले बनाइएको जन्तर, पुराना डिजाइनको आधुनिक प्रस्तुति।'
            },
            image: 'img/jantar.webp'
        },
        {
            id: 'necklaces-007',
            name: {
                en: 'Barahpuri Sikri',
                ne: 'बराहपुरी सिक्री'
            },
            category: 'necklaces',
            weight: '१ तोला देखि ३ तोला',
            material: 'Gold / Silver',
            certification: 'Certified',
            tags: {
                en: ['Barahpuri Sikri', 'Prestige', 'Traditional'],
                ne: ['बराहपुरी सिक्री', 'प्रतिष्ठित', 'परम्परागत']
            },
            description: {
                en: 'Signature barahpuri sikri design from our prestigious heritage collection.',
                ne: 'बराहपुरी सिक्रीको विशिष्ट डिजाइन, प्रतिष्ठित कलेक्सनमा उपलब्ध।'
            },
            image: 'img/barahpuri_sikri.webp'
        },
        {
            id: 'bracelets-003',
            name: {
                en: 'Artistic Silver Pauju',
                ne: 'चाँदीको पाउजु'
            },
            category: 'bracelets',
            weight: '५-१५ तोला',
            material: 'Silver',
            certification: 'Certified',
            tags: {
                en: ['Pauju', 'Silver', '5-15 Tola'],
                ne: ['पाउजु', 'चाँदी', '५-१५ तोला']
            },
            description: {
                en: 'Artistic silver pauju for feet, available in many motifs and sizes.',
                ne: 'खुट्टाको लागि कलात्मक चाँदीको पाउजु, विभिन्न बुट्टा र साइजमा।'
            },
            image: 'img/silver_pauju.webp'
        },
        {
            id: 'rings-002',
            name: {
                en: 'Engagement Ring',
                ne: 'इंगेजमेन्ट रिङ'
            },
            category: 'rings',
            weight: '६ आना देखि १ तोला',
            material: 'Gold / Diamond',
            certification: 'Certified',
            tags: {
                en: ['Engagement Ring', 'Special', 'Couple Choice'],
                ne: ['इंगेजमेन्ट रिङ', 'विशेष', 'जोडी रोजाइ']
            },
            description: {
                en: 'Special engagement rings designed to match each couple’s preferences.',
                ne: 'विशेष इंगेजमेन्ट रिङ, जोडीको रोजाइ अनुसार डिजाइन गर्न सकिने।'
            },
            image: 'img/ring.webp'
        },
        {
            id: 'others-006',
            name: {
                en: 'Custom Making Service',
                ne: 'कस्टम मेकिङ सेवा'
            },
            category: 'others',
            weight: 'रोजाइ अनुसार',
            material: 'Gold / Silver',
            certification: 'Certified',
            tags: {
                en: ['Custom', 'Made to Order', 'Designer'],
                ne: ['कस्टम', 'अर्डर अनुसार', 'डिजाइनर']
            },
            description: {
                en: 'Complete custom making service based on customer preference and design needs.',
                ne: 'ग्राहकको चाहना बमोजिम पुरै Custom Making सेवा उपलब्ध छ।'
            },
            image: 'img/custom_making.webp'
        }
    ];
}

function createWhatsAppOrderLink(product) {
    const number = '9779857823643';
    const localized = localizeProduct(product, getCurrentSiteLanguage());
    const tagsText = localized.tagsText && localized.tagsText.length ? `\n*Features:* ${localized.tagsText.join(', ')}` : '';
    const productLink = createProductShareLink(product);
    const message = `*🛍️ PRODUCT INQUIRY*\n\n*Product:* ${localized.nameText}\n*Product ID:* ${product.id}${tagsText}\n*Rate:* As per daily market rate\n*Product Link:* ${productLink}\n\nI want to order this product. Please share availability and today's rate.`;
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function createProductShareLink(product) {
    const url = new URL(window.location.href);
    url.pathname = '/products';
    url.searchParams.set('product', product.id);
    return url.toString();
}

function initProductsCatalog() {
    const catalogEl = document.getElementById('productsCatalog');
    if (!catalogEl) {
        return;
    }

    const filterWrap = document.getElementById('catalogFilters');
    const searchInput = document.getElementById('catalogSearch');
    const modal = document.getElementById('productModal');
    const modalClose = document.getElementById('productModalClose');
    const modalImage = document.getElementById('productModalImage');
    const modalName = document.getElementById('productModalName');
    const modalPrice = document.getElementById('productModalPrice');
    const modalDesc = document.getElementById('productModalDesc');
    const modalTags = document.getElementById('productModalTags');
    const modalWhatsApp = document.getElementById('productModalWhatsapp');
    const modalShare = document.getElementById('productModalShare');

    const products = buildProductsData();
    let activeCategory = 'all';
    let query = '';
    let currentModalProduct = null;

    const localizedProduct = (product) => localizeProduct(product, getCurrentSiteLanguage());

    const openModal = (product) => {
        if (!modal || !modalImage || !modalName || !modalPrice || !modalDesc || !modalTags || !modalWhatsApp) {
            return;
        }

        currentModalProduct = product;
        const view = localizedProduct(product);
        const t = translations[getCurrentSiteLanguage()] || translations.en;
        modalImage.src = product.image;
        modalImage.alt = view.nameText;
        modalImage.onerror = () => {
            modalImage.src = 'img/model.webp';
        };
        modalName.textContent = view.nameText;
        modalPrice.textContent = `${t['spec.weight'] || 'Weight'}: ${product.weight} | ${t['spec.material'] || 'Material'}: ${product.material}`;
        modalDesc.textContent = view.descriptionText;
        modalTags.innerHTML = `
            <span class="cert-pill cert-pill-modal" title="Certified Product">
                <i class="fas fa-certificate"></i>
                ${translations[localStorage.getItem('siteLang') || 'en']?.['spec.certified'] || 'Certified'}
            </span>
            ${view.tagsText.map((tag) => `<span class="catalog-tag">${tag}</span>`).join('')}
        `;
        modalWhatsApp.href = createWhatsAppOrderLink(product);
        if (modalShare) {
            modalShare.dataset.shareUrl = createProductShareLink(product);
        }
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    };

    const closeModal = () => {
        if (!modal) {
            return;
        }
        currentModalProduct = null;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    };

    const render = () => {
        const t = translations[getCurrentSiteLanguage()] || translations.en;
        const filtered = products.filter((p) => {
            const categoryMatch = activeCategory === 'all' || p.category === activeCategory;
            const view = localizedProduct(p);
            const text = `${view.nameText} ${view.tagsText.join(' ')} ${p.name.en || ''} ${p.name.ne || ''}`.toLowerCase();
            const searchMatch = !query || text.includes(query);
            return categoryMatch && searchMatch;
        });

        catalogEl.innerHTML = filtered.map((product) => `
            <article class="catalog-card" data-id="${product.id}">
                <button type="button" class="catalog-preview catalog-open" aria-label="Open ${localizedProduct(product).nameText}">
                    <img src="${product.image}" alt="${localizedProduct(product).nameText}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='img/model.webp';">
                    <span class="cert-pill" title="${translations[localStorage.getItem('siteLang') || 'en']?.['spec.certified'] || 'Certified'} product">
                        <i class="fas fa-certificate"></i>
                        <span class="cert-pill-text">${translations[localStorage.getItem('siteLang') || 'en']?.['spec.certified'] || 'Certified'}</span>
                    </span>
                </button>
                <div class="catalog-body">
                    <h3 class="catalog-name">${localizedProduct(product).nameText}</h3>
                    <p class="catalog-meta">${product.id.toUpperCase()}</p>
                    <p class="catalog-specs">
                        <span class="spec-chip"><i class="fas fa-weight-hanging"></i> ${translations[localStorage.getItem('siteLang') || 'en']?.['spec.weight'] || 'Weight'}: ${product.weight}</span>
                        <span class="spec-chip"><i class="fas fa-ring"></i> ${translations[localStorage.getItem('siteLang') || 'en']?.['spec.material'] || 'Material'}: ${product.material}</span>
                    </p>
                    <div class="catalog-tags">
                        ${localizedProduct(product).tagsText.map((tag) => `<span class="catalog-tag">${tag}</span>`).join('')}
                    </div>
                    <p class="catalog-desc">${localizedProduct(product).descriptionText}</p>
                    <div class="catalog-actions">
                        <button type="button" class="btn btn-outline catalog-open">${t['catalog.viewDetails'] || 'View Details'}</button>
                        <a href="${createWhatsAppOrderLink(product)}" class="btn btn-primary catalog-whatsapp" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-whatsapp"></i> ${t['catalog.orderWhatsApp'] || 'Order on WhatsApp'}
                        </a>
                    </div>
                </div>
            </article>
        `).join('');
    };

    window.refreshProductsCatalog = () => {
        render();
        if (currentModalProduct && modal?.classList.contains('active')) {
            openModal(currentModalProduct);
        }
    };

    render();

    const productId = new URLSearchParams(window.location.search).get('product');
    if (productId) {
        const initialProduct = products.find((p) => p.id === productId);
        if (initialProduct) {
            openModal(initialProduct);
        }
    }

    filterWrap?.addEventListener('click', (e) => {
        const btn = e.target.closest('.catalog-filter');
        if (!btn) {
            return;
        }
        activeCategory = btn.getAttribute('data-cat') || 'all';
        filterWrap.querySelectorAll('.catalog-filter').forEach((f) => f.classList.remove('active'));
        btn.classList.add('active');
        render();
    });

    searchInput?.addEventListener('input', (e) => {
        query = (e.target.value || '').trim().toLowerCase();
        render();
    });

    catalogEl.addEventListener('click', (e) => {
        const whatsappButton = e.target.closest('.catalog-whatsapp');
        if (whatsappButton) {
            e.preventDefault();
            const card = whatsappButton.closest('.catalog-card');
            const product = card ? products.find((p) => p.id === card.getAttribute('data-id')) : null;
            if (product) {
                window.location.href = createWhatsAppOrderLink(product);
            }
            return;
        }
        const card = e.target.closest('.catalog-card');
        if (!card) {
            return;
        }
        const product = products.find((p) => p.id === card.getAttribute('data-id'));
        if (product) {
            openModal(product);
        }
    });

    modalWhatsApp?.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentModalProduct) {
            window.location.href = createWhatsAppOrderLink(currentModalProduct);
        }
    });

    modalShare?.addEventListener('click', async (e) => {
        e.preventDefault();
        if (!currentModalProduct) {
            return;
        }

        const shareUrl = modalShare.dataset.shareUrl || createProductShareLink(currentModalProduct);
        const shareText = `${localizedProduct(currentModalProduct).nameText} - ${currentModalProduct.weight}, ${currentModalProduct.material}`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: currentModalProduct.name,
                    text: shareText,
                    url: shareUrl
                });
                return;
            } catch (error) {
                // fall back to clipboard below
            }
        }

        try {
            await navigator.clipboard.writeText(shareUrl);
            modalShare.textContent = 'Link Copied';
            setTimeout(() => {
                modalShare.innerHTML = '<i class="fas fa-share-alt"></i> Share Product Link';
            }, 1500);
        } catch (error) {
            window.location.href = shareUrl;
        }
    });

    modalClose?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            closeModal();
        }
    });
}

const productCache = new Map();

function normalizeMediaUrl(url) {
    const cleanUrl = String(url || '').trim();
    if (!cleanUrl) return '';
    if (cleanUrl.startsWith('../')) return cleanUrl.replace(/^\.\.\//, '');
    return cleanUrl;
}

function normalizeImageUrl(url) {
    return normalizeMediaUrl(url) || 'img/model.webp';
}

function getCurrentLang() {
    return localStorage.getItem('siteLang') || 'en';
}

function getLocalizedTitle(product) {
    const lang = getCurrentLang();
    if (lang === 'ne') {
        return product.titleNe || product.title_ne || product.titleNp || product.titleNepali || product.title || '';
    }
    return product.title || '';
}

function getLocalizedDescription(product) {
    const lang = getCurrentLang();
    if (lang === 'ne') {
        return product.descriptionNe || product.description_ne || product.descriptionNp || product.descriptionNepali || product.description || '';
    }
    return product.description || '';
}

function getActiveModalElements() {
    const modal = document.getElementById('productModal') || document.getElementById('featuredProductModal');
    if (!modal) return null;
    return {
        modal,
        modalClose: document.getElementById(modal.id === 'productModal' ? 'productModalClose' : 'featuredProductModalClose'),
        modalImage: document.getElementById(modal.id === 'productModal' ? 'productModalImage' : 'featuredProductModalImage'),
        modalName: document.getElementById(modal.id === 'productModal' ? 'productModalName' : 'featuredProductModalName'),
        modalPrice: document.getElementById(modal.id === 'productModal' ? 'productModalPrice' : 'featuredProductModalPrice'),
        modalDesc: document.getElementById(modal.id === 'productModal' ? 'productModalDesc' : 'featuredProductModalDesc'),
        modalTags: document.getElementById(modal.id === 'productModal' ? 'productModalTags' : 'featuredProductModalTags'),
        modalWhatsApp: document.getElementById(modal.id === 'productModal' ? 'productModalWhatsapp' : 'featuredProductModalWhatsapp'),
        modalShare: document.getElementById(modal.id === 'productModal' ? 'productModalShare' : 'featuredProductModalShare')
    };
}

function buildShareUrl(productId) {
    const url = new URL(window.location.href);
    url.searchParams.set('product', productId);
    return url.toString();
}

function updateUrlForProduct(productId) {
    const url = new URL(window.location.href);
    url.searchParams.set('product', productId);
    window.history.replaceState({}, '', url.toString());
}

function clearProductUrl() {
    const url = new URL(window.location.href);
    url.searchParams.delete('product');
    window.history.replaceState({}, '', url.toString());
}

function buildWhatsAppLink(product, shareUrl) {
    const title = product.title || 'Product';
    const weight = product.weight || 'N/A';
    const type = product.type || 'N/A';
    const category = product.category || 'N/A';
    const message = `*🛍️ PRODUCT INQUIRY*\n\n*Product:* ${title}\n*Category:* ${category}\n*Type:* ${type}\n*Weight:* ${weight}\n*Product Link:* ${shareUrl}\n\nPlease share availability and today's rate.`;
    return `https://wa.me/9779857823643?text=${encodeURIComponent(message)}`;
}

function openProductModal(product) {
    const modalSet = getActiveModalElements();
    if (!modalSet) return;

    const { modal, modalImage, modalName, modalPrice, modalDesc, modalTags, modalWhatsApp, modalShare } = modalSet;
    const imageUrl = normalizeImageUrl(product.imageUrl || product.image);
    const title = getLocalizedTitle(product) || 'Product';
    const weight = product.weight || '';
    const type = product.type || '';
    const category = product.category || '';
    const description = getLocalizedDescription(product) || '';

    modalImage.src = imageUrl;
    modalImage.alt = title;
    modalImage.onerror = () => {
        modalImage.src = 'img/model.webp';
    };
    modalName.textContent = title;
    modalPrice.textContent = `Weight: ${weight} | Type: ${type} | Category: ${category}`;
    modalDesc.textContent = description;
    modalTags.innerHTML = `
        <span class="cert-pill cert-pill-modal" title="Certified Product">
            <i class="fas fa-certificate"></i>
            ${translations[localStorage.getItem('siteLang') || 'en']?.['spec.certified'] || 'Certified'}
        </span>
        ${category ? `<span class="catalog-tag">${category}</span>` : ''}
        ${type ? `<span class="catalog-tag">${type}</span>` : ''}
    `;

    const shareUrl = buildShareUrl(product._docId || product.id);
    modalWhatsApp.href = buildWhatsAppLink(Object.assign({}, product, { title }), shareUrl);
    if (modalShare) {
        modalShare.dataset.shareUrl = shareUrl;
    }

    updateUrlForProduct(product._docId || product.id);
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
}

function initProductModalHandlers() {
    const modalSet = getActiveModalElements();
    if (!modalSet) return;

    const { modal, modalClose, modalShare, modalWhatsApp } = modalSet;

    const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        clearProductUrl();
    };

    modalClose?.addEventListener('click', closeModal);

    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            closeModal();
        }
    });

    modalWhatsApp?.addEventListener('click', (e) => {
        e.preventDefault();
        if (modalWhatsApp.href) {
            window.location.href = modalWhatsApp.href;
        }
    });

    modalShare?.addEventListener('click', async (e) => {
        e.preventDefault();
        const shareUrl = modalShare.dataset.shareUrl;
        if (!shareUrl) return;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Shree Ganapati Jewellers',
                    url: shareUrl
                });
                return;
            } catch (error) {
                // fall back to clipboard below
            }
        }
        try {
            await navigator.clipboard.writeText(shareUrl);
            modalShare.textContent = 'Link Copied';
            setTimeout(() => {
                modalShare.innerHTML = '<i class="fas fa-share-alt"></i> Share Product Link';
            }, 1500);
        } catch (error) {
            window.location.href = shareUrl;
        }
    });
}

// Dynamic Firestore catalog rendering (products.html)
function displayAllCatalogProducts() {
    const catalogGrid = document.getElementById('productsCatalog');
    if (!catalogGrid) {
        return;
    }

    const filterWrap = document.getElementById('catalogFilters');
    const searchInput = document.getElementById('catalogSearch');
    let allProducts = [];
    let activeCategory = 'all';
    let query = '';

    if (!(window.firebase && firebase.firestore)) {
        catalogGrid.innerHTML = '<p class="catalog-empty">Products are unavailable right now.</p>';
        return;
    }

    const renderCatalog = () => {
        const lang = getCurrentLang();
        const t = translations[lang] || translations.en;
        const normalizedQuery = query.trim().toLowerCase();

        const filtered = allProducts.filter((product) => {
            const category = String(product.category || '').toLowerCase();
            const categoryMatch = activeCategory === 'all' || category === activeCategory;
            const title = getLocalizedTitle(product).toLowerCase();
            const description = getLocalizedDescription(product).toLowerCase();
            const searchMatch = !normalizedQuery || `${title} ${description} ${category}`.includes(normalizedQuery);
            return categoryMatch && searchMatch;
        });

        if (!filtered.length) {
            catalogGrid.innerHTML = '<p class="catalog-empty">No products available yet.</p>';
            return;
        }

        catalogGrid.innerHTML = filtered.map((product) => {
            const docId = product._docId;
            const title = getLocalizedTitle(product) || 'Untitled';
            const category = product.category || '';
            const weight = product.weight || '';
            const description = getLocalizedDescription(product) || '';
            const cleanImgUrl = normalizeImageUrl(product.imageUrl || product.image);
            return `
                <article class="catalog-card" data-product-id="${docId}">
                    <button type="button" class="catalog-preview catalog-open" aria-label="Open ${title}">
                        <img src="${cleanImgUrl}" alt="${title}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='img/model.webp';">
                    </button>
                    <div class="catalog-body">
                        <h3 class="catalog-name">${title}</h3>
                        <p class="catalog-meta">${category}</p>
                        <p class="catalog-specs">
                            <span class="spec-chip"><i class="fas fa-weight-hanging"></i> ${t['spec.weight'] || 'Weight'}: ${weight}</span>
                        </p>
                        <p class="catalog-desc">${description}</p>
                        <div class="catalog-actions">
                            <button type="button" class="btn btn-outline catalog-open">${t['catalog.viewDetails'] || 'View Details'}</button>
                            <a href="${buildWhatsAppLink(product, buildShareUrl(docId))}" class="btn btn-primary catalog-whatsapp" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-whatsapp"></i> ${t['catalog.orderWhatsApp'] || 'Order on WhatsApp'}
                            </a>
                        </div>
                    </div>
                </article>
            `;
        }).join('');
    };

    const getCreatedAtValue = (item) => {
        const createdAt = item?.createdAt;
        if (createdAt && typeof createdAt.toMillis === 'function') {
            return createdAt.toMillis();
        }
        if (typeof createdAt === 'number') {
            return createdAt;
        }
        if (typeof createdAt === 'string') {
            const parsed = Date.parse(createdAt);
            return Number.isNaN(parsed) ? 0 : parsed;
        }
        return typeof item?._updatedAt === 'number' ? item._updatedAt : 0;
    };

    const isCustomProduct = (item) => {
        const title = String(item?.title || item?.titleNe || item?.name?.en || item?.name?.ne || '').toLowerCase();
        return title.includes('custom') || title.includes('कस्टम') || item?.id === 'p-020';
    };

    const db = firebase.firestore();
    db.collection('products').onSnapshot((querySnapshot) => {
        productCache.clear();
        allProducts = querySnapshot.docs.map((doc) => {
            const product = doc.data() || {};
            const docId = doc.id;
            const withId = Object.assign({}, product, { _docId: docId });
            productCache.set(docId, withId);
            return withId;
        }).sort((a, b) => {
            const aCustom = isCustomProduct(a);
            const bCustom = isCustomProduct(b);
            if (aCustom && !bCustom) return 1;
            if (!aCustom && bCustom) return -1;
            return getCreatedAtValue(a) - getCreatedAtValue(b);
        });

        renderCatalog();
    });

    filterWrap?.addEventListener('click', (e) => {
        const btn = e.target.closest('.catalog-filter');
        if (!btn) return;
        activeCategory = String(btn.getAttribute('data-cat') || 'all').toLowerCase();
        filterWrap.querySelectorAll('.catalog-filter').forEach((f) => f.classList.remove('active'));
        btn.classList.add('active');
        renderCatalog();
    });

    searchInput?.addEventListener('input', (e) => {
        query = String(e.target.value || '');
        renderCatalog();
    });

    window.refreshProductsCatalog = () => {
        renderCatalog();
    };

    catalogGrid.addEventListener('click', (e) => {
        const openBtn = e.target.closest('.catalog-open');
        if (!openBtn) return;
        const card = e.target.closest('.catalog-card');
        const productId = card?.getAttribute('data-product-id');
        if (!productId) return;
        const product = productCache.get(productId);
        if (product) {
            openProductModal(product);
        }
    });
}

// Dynamic featured products rendering (index.html)
function displayFeaturedHomepageProducts() {
    const featuredGrid = document.getElementById('featured-grid-container');
    if (!featuredGrid) {
        return;
    }

    if (!(window.firebase && firebase.firestore)) {
        featuredGrid.innerHTML = '<p class="catalog-empty">No featured items selected by admin.</p>';
        return;
    }

    const db = firebase.firestore();
    const renderFeatured = (snapshot) => {
        featuredGrid.innerHTML = '';

        if (snapshot.empty) {
            featuredGrid.innerHTML = '<p class="catalog-empty">No featured items selected by admin.</p>';
            return;
        }

        const isCustomProduct = (item) => {
            const title = String(item?.title || item?.titleNe || item?.name?.en || item?.name?.ne || '').toLowerCase();
            return title.includes('custom') || title.includes('कस्टम') || item?.id === 'p-020';
        };

        const docs = snapshot.docs.slice().sort((a, b) => {
            const aData = a.data() || {};
            const bData = b.data() || {};
            const aCustom = isCustomProduct(aData);
            const bCustom = isCustomProduct(bData);
            if (aCustom && !bCustom) return 1;
            if (!aCustom && bCustom) return -1;
            const aTime = aData.createdAt?.toMillis?.() || 0;
            const bTime = bData.createdAt?.toMillis?.() || 0;
            return aTime - bTime;
        });

        docs.forEach((doc) => {
            const product = doc.data() || {};
            const docId = doc.id;
            productCache.set(docId, Object.assign({}, product, { _docId: docId }));

            const title = getLocalizedTitle(product) || 'Untitled';
            const weight = product.weight || '';
            const cleanImgUrl = normalizeImageUrl(product.imageUrl || product.image);

            featuredGrid.innerHTML += `
                <div class="collection-card" data-product-id="${docId}">
                    <button type="button" class="product-image featured-product-btn" aria-label="Open ${title}">
                        <img src="${cleanImgUrl}" alt="${title}" loading="lazy" decoding="async" style="object-fit: cover; width: 100%; height: 100%;" onerror="this.onerror=null;this.src='img/model.webp';">
                    </button>
                    <h3>${title}</h3>
                    <div class="product-spec-list">
                        <p><strong>Weight</strong>: ${weight}</p>
                    </div>
                    <div class="featured-actions">
                        <button type="button" class="btn btn-outline featured-product-btn">${translations[localStorage.getItem('siteLang') || 'en']?.['catalog.viewDetails'] || 'View Details'}</button>
                        <a href="${buildWhatsAppLink(product, buildShareUrl(docId))}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-whatsapp"></i> ${translations[localStorage.getItem('siteLang') || 'en']?.['cta.enquireWhatsapp'] || 'Enquire on WhatsApp'}
                        </a>
                    </div>
                </div>
            `;
        });
    };

    db.collection('products').where('isFeatured', '==', true).limit(4).onSnapshot(renderFeatured);

    window.refreshFeaturedCatalog = () => {
        if (!(window.firebase && firebase.firestore)) {
            return;
        }
        firebase.firestore().collection('products').where('isFeatured', '==', true).limit(4).get().then(renderFeatured);
    };

    featuredGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('.featured-product-btn');
        if (!btn) return;
        const card = e.target.closest('.collection-card');
        const productId = card?.getAttribute('data-product-id');
        if (!productId) return;
        const product = productCache.get(productId);
        if (product) {
            openProductModal(product);
        }
    });
}

function openProductFromUrl() {
    const productId = new URLSearchParams(window.location.search).get('product');
    if (!productId || !(window.firebase && firebase.firestore)) return;

    if (productCache.has(productId)) {
        openProductModal(productCache.get(productId));
        return;
    }

    const db = firebase.firestore();
    db.collection('products').doc(productId).get().then((doc) => {
        if (!doc.exists) return;
        const product = Object.assign({}, doc.data(), { _docId: doc.id });
        productCache.set(doc.id, product);
        openProductModal(product);
    });
}

function rotateWhatsAppHint() {
    if (floatingWhatsApp) {
        floatingWhatsApp.classList.add('show-hint');
        setTimeout(() => {
            floatingWhatsApp.classList.remove('show-hint');
        }, 3000);
    }
}

// Show hint every 9 seconds
setInterval(rotateWhatsAppHint, 9000);

// Show hint on first load after 2 seconds
setTimeout(rotateWhatsAppHint, 2000);

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effects to product cards
const cards = document.querySelectorAll('.product-card, .product-card-large');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Quantity counter for products (optional enhancement)
function addQuantityCounter(productCard) {
    const quantityDiv = document.createElement('div');
    quantityDiv.className = 'quantity-counter';
    quantityDiv.innerHTML = `
        <button onclick="decreaseQty(this)">-</button>
        <input type="number" value="1" min="1" readonly>
        <button onclick="increaseQty(this)">+</button>
    `;
    return quantityDiv;
}

// Increase quantity
function increaseQty(btn) {
    const input = btn.parentElement.querySelector('input');
    input.value = parseInt(input.value) + 1;
}

// Decrease quantity
function decreaseQty(btn) {
    const input = btn.parentElement.querySelector('input');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

// Enhanced WhatsApp with product details
function whatsappOrderEnhanced(productName, productId, specs) {
    const whatsappNumber = '9779857823643';
    
    const specsText = specs ? `
*Product Specifications:*
${specs}` : '';

    const message = `
*🛍️ PRODUCT INQUIRY*

*Product:* ${productName}
*Product ID:* ${productId}${specsText}
*Rate:* As per daily market rate

I'm interested in purchasing this product. Please provide more details about:
- Current availability
- Delivery time
- Customization options
- Payment methods

Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
}

// Featured Products Modal
function initFeaturedProductsModal() {
    const featuredCards = document.querySelectorAll('.collection-card[data-featured-product]');
    const modal = document.getElementById('featuredProductModal');
    const modalClose = document.getElementById('featuredProductModalClose');
    const modalImage = document.getElementById('featuredProductModalImage');
    const modalName = document.getElementById('featuredProductModalName');
    const modalPrice = document.getElementById('featuredProductModalPrice');
    const modalDesc = document.getElementById('featuredProductModalDesc');
    const modalTags = document.getElementById('featuredProductModalTags');
    const modalWhatsApp = document.getElementById('featuredProductModalWhatsapp');
    const modalShare = document.getElementById('featuredProductModalShare');

    if (!modal || !featuredCards.length) {
        return;
    }

    const featuredProducts = {
        p1: {
            id: 'featured-jhumka-001',
            name: 'परम्परागत सुनको तीन लेयर झुम्का (Triple Layer Jhumka)',
            weight: '१ देखि ३ तोला',
            style: 'तीन लेयर डिजाइन',
            certification: 'Certified',
            description: 'सुनबाट निर्मित यो झुम्का विशेष गरी विवाह र चाडपर्वका लागि डिजाइन गरिएको हो। यसमा रहेका तीनवटा पत्र (Layers) र मसिना सुनका दानाहरूले तपाईंको लुक्सलाई थप भव्य बनाउँछ।',
            tags: ['झुम्का', 'तीन लेयर', 'विवाह विशेष'],
            image: 'img/jhumka.webp'
        },
        p2: {
            id: 'featured-ranihaar-002',
            name: 'शाही रानी हार र झुम्का सेट (Rani Haar Set)',
            weight: '२ तोला देखि १० तोला (रोजाइ अनुसार)',
            style: 'रानी हार सेट डिजाइन',
            certification: 'Certified',
            description: 'नेपाली परम्परा झल्काउने यो रानी हार सेट दुलहीका लागि सबैभन्दा उत्तम गहना हो। यसको बिचमा रहेको ठूलो पेन्डेन्ट र मसिना पत्थरको कामले यसलाई रोयल लुक दिएको छ। यसको साथमा मिल्दो झुम्का पनि उपलब्ध छ।',
            tags: ['रानी हार सेट', 'रोयल', 'दुलही कलेक्सन'],
            image: 'img/ranihaar.webp'
        },
        p3: {
            id: 'featured-baala-003',
            name: 'आकर्षक बुट्टेदार सुनको पाता बाला (Gold Baala)',
            weight: '२ देखि ४ तोला (जोडी)',
            style: 'शुद्ध सुनको परम्परागत कला',
            certification: 'Certified',
            description: 'मजबुत र आकर्षक बुट्टा भएको यो सुनको बाला हातमा टपक्क मिल्छ। यसमा परम्परागत कलाकृति कुँदिएको छ, जसलाई तपाईंले साडी वा लेहेंगासँग सहजै लगाउन सक्नुहुन्छ।',
            tags: ['पाता बाला', 'परम्परागत बुट्टा', '२-४ तोला'],
            image: 'img/balaa.webp'
        },
        p4: {
            id: 'featured-crownring-004',
            name: 'हिरा र माणि जडित क्राउन रिङ (Crown Ring)',
            weight: '७ आना देखि २ तोला',
            style: 'हिरा र माणि जडित',
            certification: 'Certified',
            description: 'रानीको ताज (Crown) बाट प्रेरित यो आधुनिक औंठीमा एउटा चम्किलो हिरा र एउटा रातो माणि (Ruby) पत्थर प्रयोग गरिएको छ। यो इंगेजमेन्ट वा जन्मदिनको उपहारका लागि सबैभन्दा आकर्षक विकल्प हो।',
            tags: ['क्राउन रिङ', 'हिरा', 'माणि'],
            image: 'img/ring.webp'
        }
    };

    const featuredProductsById = Object.values(featuredProducts).reduce((acc, product) => {
        acc[product.id] = product;
        return acc;
    }, {});

    const createFeaturedShareUrl = (product) => {
        return `${window.location.origin}${window.location.pathname}?featured=${product.id}`;
    };

    const createFeaturedWhatsAppUrl = (product) => {
        const shareUrl = createFeaturedShareUrl(product);
        const whatsappMessage = `*🛍️ PRODUCT INQUIRY*\n\n*Product:* ${product.name}\n*Product ID:* ${product.id}\n*Features:* ${product.tags.join(', ')}\n*Product Link:* ${shareUrl}\n*Rate:* As per daily market rate\n\nI want to enquire about this product. Please share availability and today's rate.`;
        return `https://wa.me/9779857823643?text=${encodeURIComponent(whatsappMessage)}`;
    };

    let currentProduct = null;

    const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        currentProduct = null;
    };

    const openModal = (product) => {
        currentProduct = product;
        modalImage.src = product.image;
        modalImage.alt = product.name;
        modalImage.onerror = () => {
            modalImage.src = 'img/model.webp';
        };
        modalName.textContent = product.name;
        modalPrice.textContent = `Weight: ${product.weight}`;
        modalDesc.textContent = product.description;
        modalTags.innerHTML = `
            <span class="cert-pill cert-pill-modal" title="Certified Product">
                <i class="fas fa-certificate"></i>
                ${translations[localStorage.getItem('siteLang') || 'en']?.['spec.certified'] || 'Certified'}
            </span>
            ${product.tags.map((tag) => `<span class="catalog-tag">${tag}</span>`).join('')}
        `;
        
        modalWhatsApp.href = createFeaturedWhatsAppUrl(product);
        
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    };

    featuredCards.forEach((card) => {
        const productKey = card.getAttribute('data-featured-product');
        const product = featuredProducts[productKey];
        if (!product) return;

        const cardWhatsAppBtn = card.querySelector('.featured-actions a.btn.btn-primary');
        if (cardWhatsAppBtn) {
            cardWhatsAppBtn.href = createFeaturedWhatsAppUrl(product);
            cardWhatsAppBtn.addEventListener('click', (e) => {
                // Always regenerate before opening so every card shares its own current product link.
                e.preventDefault();
                e.stopPropagation();
                const whatsappUrl = createFeaturedWhatsAppUrl(product);
                cardWhatsAppBtn.href = whatsappUrl;
                window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            });
        }

        card.addEventListener('click', (e) => {
            if (e.target.closest('a')) {
                return;
            }
            openModal(product);
        });

        const buttons = card.querySelectorAll('.featured-product-btn');
        buttons.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                openModal(product);
            });
        });
    });

    modalClose?.addEventListener('click', closeModal);

    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    modalWhatsApp?.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentProduct) {
            window.location.href = modalWhatsApp.href;
        }
    });

    modalShare?.addEventListener('click', async (e) => {
        e.preventDefault();
        if (!currentProduct) return;

        const shareUrl = createFeaturedShareUrl(currentProduct);
        const shareText = `${currentProduct.name} - ${currentProduct.weight}, ${currentProduct.style}`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: currentProduct.name,
                    text: shareText,
                    url: shareUrl
                });
                return;
            } catch (error) {
                // fall back to clipboard
            }
        }

        try {
            await navigator.clipboard.writeText(shareUrl);
            modalShare.textContent = 'Link Copied!';
            setTimeout(() => {
                modalShare.innerHTML = '<i class="fas fa-share-alt"></i> Share Product Link';
            }, 1500);
        } catch (error) {
            alert('Copy link: ' + shareUrl);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            closeModal();
        }
    });

    const featuredId = new URLSearchParams(window.location.search).get('featured');
    if (featuredId && featuredProductsById[featuredId]) {
        openModal(featuredProductsById[featuredId]);
    }
}

// Track product clicks for analytics (optional)
function trackProductClick(productName) {
    console.log(`Product clicked: ${productName}`);
    // You can send this to analytics service
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Jewellery Shop Website Loaded');
    initHomepageGalleryControl();
    initGalleryModal();
    initLanguageToggle();
    initProductModalHandlers();
    displayAllCatalogProducts();
    displayFeaturedHomepageProducts();
    openProductFromUrl();
    
    // Set default filter to 'all'
    const allFilterBtn = document.querySelector('[data-filter="all"]');
    if (allFilterBtn) {
        allFilterBtn.classList.add('active');
    }
});

// Add to cart simulation (if you want to add cart functionality later)
const cart = [];

function addToCart(productName, price, productId) {
    const cartItem = {
        id: productId,
        name: productName,
        price: price,
        quantity: 1
    };
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(cartItem);
    }
    
    console.log('Cart updated:', cart);
    alert(`${productName} added to cart!`);
}

// Get cart total
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Clear cart
function clearCart() {
    cart.length = 0;
    console.log('Cart cleared');
}

// Smooth page transitions
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Add loading animation
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        e.target.style.pointerEvents = 'none';
        setTimeout(() => {
            e.target.style.pointerEvents = 'auto';
        }, 300);
    }
});

