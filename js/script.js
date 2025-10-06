




// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.createElement('div');
const fruitsGrid = document.getElementById('fruits-grid');
const juicesGrid = document.getElementById('juices-grid');
const galleryGrid = document.getElementById('gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const fruitSearch = document.getElementById('fruit-search');
const juiceSearch = document.getElementById('juice-search');
const contactForm = document.getElementById('contact-form');





// Fruit data
const fruits = [
    { name: 'Mango', localName: 'Mango' },
    { name: 'Banana', localName: 'Banana' },
    { name: 'Guava', localName: 'Guava' },
    { name: 'Orange', localName: 'Orange' },
    { name: 'Grapes', localName: 'Grapes' },
    { name: 'Pomegranate', localName: 'Pomegranate' },
    { name: 'Papaya', localName: 'Papaya' },
    { name: 'Watermelon', localName: 'Watermelon' },
    { name: 'Apple', localName: 'Apple' },
    { name: 'Jackfruit', localName: 'Jackfruit' },
    { name: 'Chikoo', localName: 'Chikoo' },
    { name: 'Sitaphal', localName: 'Sitaphal' },
    { name: 'Litchi', localName: 'Litchi' },
    { name: 'Coconut', localName: 'Coconut' },
    { name: 'Ber', localName: 'Ber' },
    { name: 'Jamun', localName: 'Jamun' },
    { name: 'Plum', localName: 'Plum' },
    { name: 'Pineapple', localName: 'Pineapple' },
    { name: 'Strawberry', localName: 'Strawberry' },
    { name: 'Kiwi', localName: 'Kiwi' },
    { name: 'Pear', localName: 'Pear' },
    { name: 'Dragon', localName: 'Dragon' },
    { name: 'Mulberry', localName: 'Mulberry' },
    { name: 'Dates', localName: 'Dates' }
    
];

// Juice data
const juices = [
  { name: 'Mango', localName: 'Mango Juice' },
  { name: 'Banana', localName: 'Banana Juice' },
  { name: 'Carrot', localName: 'Carrot Juice' },
  { name: 'Beetroot', localName: 'Beetroot Juice' },
  { name: 'Mosambi', localName: 'Mosambi Juice' },
  { name: 'Santara', localName: 'Santara Juice' },
  { name: 'Anar', localName: 'Anar Juice' },
  { name: 'Pineapple', localName: 'Pineapple Juice' }
];

// Gallery images data
const galleryImages = [
    { src: 'images/gallery/img1.jpg', caption: 'Shop View 1' },
    { src: 'images/gallery/img2.jpg', caption: 'Shop View 2' },
    { src: 'images/gallery/img3.jpg', caption: 'Shop View 3' },
    { src: 'images/gallery/img4.jpg', caption: 'Shop View 4' },
    { src: 'images/gallery/img5.jpg', caption: 'Shop View 5' },
    { src: 'images/gallery/img6.jpg', caption: 'Shop View 6' },
    { src: 'images/gallery/img7.jpg', caption: 'Shop View 7' },
    { src: 'images/gallery/img8.jpg', caption: 'Shop View 8' },
    { src: 'images/gallery/img9.jpg', caption: 'Shop View 9' },
    { src: 'images/gallery/img10.jpg', caption: 'Shop View 10' },
    { src: 'images/gallery/img11.jpg', caption: 'Shop View 11' },
    { src: 'images/gallery/img12.jpg', caption: 'Shop View 12' },
    { src: 'images/gallery/img13.jpg', caption: 'Shop View 13' },
    { src: 'images/gallery/img14.jpg', caption: 'Shop View 14' },
    { src: 'images/gallery/img15.jpg', caption: 'Shop View 15' },
    { src: 'images/gallery/img16.jpg', caption: 'Shop View 16' },
    { src: 'images/gallery/img17.jpg', caption: 'Shop View 17' },
    { src: 'images/gallery/img18.jpg', caption: 'Shop View 18' },
    { src: 'images/gallery/img19.jpg', caption: 'Shop View 19' },
    { src: 'images/gallery/img20.jpg', caption: 'Shop View 20' }
];

// Populate fruits section
function populateFruits() {
    fruitsGrid.innerHTML = '';
    
    fruits.forEach(fruit => {
        const fruitItem = document.createElement('div');
        fruitItem.className = 'fruit-item';
        
        // Create image path based on fruit name (lowercase with hyphens)
        const imageName = fruit.name.toLowerCase().replace(/\s+/g, '-');
        const imagePath = `images/fruits/${imageName}.jpg`;
        
        fruitItem.innerHTML = `
            <img src="${imagePath}" alt="${fruit.name}">
            <p>${fruit.localName}</p>
        `;
        
        fruitsGrid.appendChild(fruitItem);
    });
}

// Populate juices section
function populateJuices() {
    juicesGrid.innerHTML = '';
    
    juices.forEach(juice => {
        const juiceItem = document.createElement('div');
        juiceItem.className = 'juice-item';
        
        // File name format: mango-juice.jpg, banana-juice.jpg etc.
        const imageName = juice.name.toLowerCase().replace(/\s+/g, '-');
        const imagePath = `images/juices/${imageName}-juice.jpg`;
        
        juiceItem.innerHTML = `
            <img src="${imagePath}" alt="${juice.name}">
            <p>${juice.localName}</p>
        `;
        
        juicesGrid.appendChild(juiceItem);
    });
}

// Populate gallery section
function populateGallery() {
    galleryGrid.innerHTML = '';
    
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.caption}">
        `;
        
        galleryItem.addEventListener('click', () => {
            openLightbox(image.src, image.caption);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Open lightbox
function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
}

// Close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = ''; // Re-enable scrolling
}

// Search functionality
function setupSearch() {
    // Fruit search
    fruitSearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const fruitItems = document.querySelectorAll('.fruit-item');
        
        fruitItems.forEach(item => {
            const fruitName = item.querySelector('p').textContent.toLowerCase();
            if (fruitName.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
    
    // Juice search
    juiceSearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const juiceItems = document.querySelectorAll('.juice-item');
        
        juiceItems.forEach(item => {
            const juiceName = item.querySelector('p').textContent.toLowerCase();
            if (juiceName.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    menuToggle.addEventListener('click', () => {
        if (mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
            menuToggle.classList.remove('open');
        } else {
            mobileMenu.classList.add('show');
            menuToggle.classList.add('open');
        }
    });
    
    // Create mobile menu
    mobileMenu.className = 'mobile-menu';
    
    // Add navigation links
    const mobileNavList = document.createElement('ul');
    navLinks.forEach(link => {
        const listItem = document.createElement('li');
        const linkClone = link.cloneNode(true);
        linkClone.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
            menuToggle.classList.remove('open');
        });
        listItem.appendChild(linkClone);
        mobileNavList.appendChild(listItem);
    });
    
    mobileMenu.appendChild(mobileNavList);
    document.body.appendChild(mobileMenu);
}

// Smooth scrolling
function setupSmoothScrolling() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for navbar height
                    behavior: 'smooth'
                });
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
}

// Handle contact form submission
function setupContactForm() {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would normally send the data to a server
        // For now, just show an alert
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}


document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});


// Set up lightbox events
function setupLightbox() {
    lightboxClose.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    populateFruits();
    populateJuices();
    populateGallery();
    setupMobileMenu();
    setupSmoothScrolling();
    setupSearch();
    setupLightbox();
    setupContactForm();
    
    // Add fade-in animations for sections
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add initial fade-in for hero section
    setTimeout(() => {
        document.querySelector('.hero-section').classList.add('fade-in-up');
    }, 500);
});

// Export functions for testing/debugging
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;