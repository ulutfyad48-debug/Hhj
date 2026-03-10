// 1. Function ko define karein
function renderCategoryNav() {
    const mainContainer = document.getElementById("categoryNavContainer");
    if (!mainContainer) return;

    mainContainer.innerHTML = ""; 
    
    // Screen size check: Desktop par 7, Mobile par 10
    const isDesktop = window.innerWidth >= 992;
    const itemsPerRow = isDesktop ? 7 : 10;

    for (let i = 0; i < categoriesList.length; i += itemsPerRow) {
        const rowItems = categoriesList.slice(i, i + itemsPerRow);
        
        const rowDiv = document.createElement("div");
        rowDiv.className = "category-scroll-container mb-2";
        
        const wrapperDiv = document.createElement("div");
        // Desktop par flex-wrap lagayenge taaki 7 ke baad automatic niche aayein
        wrapperDiv.className = `d-flex ${isDesktop ? 'flex-wrap' : 'flex-nowrap'} overflow-x-auto no-scrollbar justify-content-lg-center`;
        
        wrapperDiv.innerHTML = rowItems.map(cat => `
            <div class="category-col">
                <a href="${cat.url}" class="btn btn-light rounded-pill category-btn shadow-sm">${cat.name}</a>
            </div>
        `).join("");

        rowDiv.appendChild(wrapperDiv);
        mainContainer.appendChild(rowDiv);
    }
}

// 2. Page load hote hi chalane ke liye
document.addEventListener("DOMContentLoaded", () => {
    // Pehle render karein
    renderCategoryNav();
    
    // Baaki functions (agar hain)
    if (typeof renderTopToolsSection === "function") renderTopToolsSection();
});

// 3. Screen resize par update karein
window.addEventListener('resize', renderCategoryNav);
