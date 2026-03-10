// 1. Tool Card banane ka function (Universal)
function createToolCard(tool) {
    const domain = new URL(tool.url).hostname.replace("www.", "");
    const logo = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
    return `
    <div class="col">
        <div class="card text-center h-100 bg-secondary text-white border-0 shadow-sm tool-card">
            <img src="${logo}" class="card-img-top p-4" style="height:100px; object-fit:contain; background: white; border-radius: 10px 10px 0 0;">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title text-truncate">${tool.name}</h5>
                <p class="card-text small">${tool.description}</p>
                <a href="${tool.url}" target="_blank" class="btn btn-primary mt-auto btn-sm">Visit Site</a>
            </div>
        </div>
    </div>`;
}

// 2. Index Page ke liye Category Preview function
function renderCategoryPreview(containerId, toolsArray, catDesc, catLink) {
    const container = document.getElementById(containerId);
    if (container) {
        const firstTool = toolsArray.slice(0, 1); // Sirf pehla tool
        container.innerHTML = `
            <div class="col-12 mb-4">
                <div class="category-main-card p-3 bg-dark border border-secondary rounded shadow">
                    <div class="row align-items-center">
                        <div class="col-md-4 col-lg-3">
                            ${firstTool.map(createToolCard).join("")}
                        </div>
                        <div class="col-md-8 col-lg-9 text-md-start text-center mt-3 mt-md-0">
                            <h4 class="text-aqua fw-bold">About this Category</h4>
                            <p class="text-light small">${catDesc}</p>
                            <a href="${catLink}" class="btn btn-outline-info btn-sm rounded-pill mt-2">View All Tools in this Category →</a>
                        </div>
                    </div>
                </div>
            </div>`;
    }
}

// 3. Top AI Tools Section (Favicon Logic)
function renderTopToolsSection() {
    const container = document.getElementById("topAiGrid");
    if (container) {
        // topAiToolsList ab tools.js se aa raha hai
        container.innerHTML = topAiToolsList.map(tool => {
            const domain = new URL(tool.url).hostname.replace("www.", "");
            const logo = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
            return `
           <div class="col-4 col-md-3 col-lg-2"> <div class="top-mini-card text-center h-100 shadow-sm">
        <img src="${logo}" alt="${tool.name}">
        <h6 class="text-truncate">${tool.name}</h6>
        <a href="${tool.url}" target="_blank" class="btn-visit">Visit</a>
    </div>
</div>`;
        }).join("");
    }
}

// Execution
document.addEventListener("DOMContentLoaded", () => {
    renderTopToolsSection();

    // Category Previews (1 tool + description)
    renderCategoryPreview(
        "codingAssistantAi",
        codingAiTools,
        "Supercharge your coding workflow with AI code generators, debuggers, and pair programmers.",
        "codingAiToolsPage.html"
    );

    renderCategoryPreview(
        "videoMakingAiTools",
        videoMakingAiTools,
        "Create stunning videos from text prompts using the world's most advanced AI video generators.",
        "videoMakingTools.html"
    );

    renderCategoryPreview(
        "imageMakingAiTools",
        imageMakingAiTools,
        "Generate professional logos, artworks, and realistic images in seconds.",
        "imageMakingools.html"
    );

    renderCategoryPreview(
        "chatBots&Writing",
        chat_WritingAiTools,
        "Write blogs, emails, and social media content with smart AI writing assistants.",
        "chatBots.html"
    );

    renderCategoryPreview(
        "aiAutomation",
        aiAutomationTools,
        "Automate your repetitive tasks and business workflows with smart AI automation tools.",
        "aiAutomationToolsPage.html"
    );

    renderCategoryPreview(
        "aiVoiceAndAudio",
        voiceAndAudioTools,
        "Create realistic AI voices, generate music, and enhance audio quality with professional-grade AI tools.",
        "aiVoiceAndAudio.html"
    );

    renderCategoryPreview(
        "aiLogo",
        logoAndDesignTools,
        "Create professional logos, branding kits, and marketing designs instantly using powerful AI logo maker and graphic design tools.",
        "aiLogo.html"
    );

    renderCategoryPreview(
        "aiPresentation",
        presentationTools,
        "Discover the best AI presentation tools to create professional slides in seconds.",
        "aiPresentation.html"
    );
});
