// Apply price updates when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved price updates
    const updates = localStorage.getItem('priceUpdates');
    
    if (updates) {
        const priceUpdates = JSON.parse(updates);
        
        priceUpdates.forEach(update => {
            const menuItems = document.querySelectorAll(`#${update.category} .menu-item`);
            if (menuItems[update.index]) {
                const priceElement = menuItems[update.index].querySelector('.menu-item-price');
                if (priceElement) {
                    priceElement.textContent = update.newPrice;
                }
            }
        });
    }
    
    // Mobile menu toggle (keep your existing code)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navbar = document.getElementById('navbar');
    
    mobileMenuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});