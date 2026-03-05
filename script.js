// 1. Sirf ek bar function define karein
function createToolCard(tool) {
  const domain = new URL(tool.url).hostname.replace("www.", "");
  const logo = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;

  // Fix: Removed 'col-lg-4' and 'style="width: 18rem"'
  return `
    <div class="col">
      <div class="card text-center h-100 bg-secondary text-white border-0 shadow-sm">
        <img src="${logo}" 
             class="card-img-top p-4"
             style="height:120px; object-fit:contain; background: white;">
        <div class="card-body d-flex flex-column">
          <h4 class="card-title text-truncate">${tool.name}</h4>
          <p class="card-text small">${tool.description}</p>
          <a href="${tool.url}" target="_blank" class="btn btn-primary mt-auto">
            Visit
          </a>
        </div>
      </div>
    </div>
  `;
}

// 2. Helper function to render tools (code bachane ke liye)
function renderSection(containerId, toolsArray, limit = 9) {
    const container = document.getElementById(containerId);
    if (container) {
        const toolsToDisplay = toolsArray.slice(0, limit);
        container.innerHTML = toolsToDisplay.map(createToolCard).join("");
    }
}

/* ===== Sabhi Sections ko render karein ===== */

// Latest AI Tools (Filtered)
if (document.getElementById("latestAiContainer")) {
    const latestTools = allTools.filter(tool => tool.islatest === true);
    renderSection("latestAiContainer", latestTools, 9);
}

// Baki saare simple categories
renderSection("videoMakingAiTools", videoMakingAiTools, 9);
renderSection("imageMakingAiTools", imageMakingAiTools, 9);
renderSection("codingAssistantAi", codingAiTools, 9);
renderSection("chatBots&Writing", chat_WritingAiTools, 9);
renderSection("aiAutomation", aiAutomationTools, 9);
renderSection("voiceAndAudio", voiceAndAudioTools, 100); // 100 limit matlab saare tools