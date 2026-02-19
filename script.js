const container = document.getElementById("latestAiContainer");

function createToolCard(tool) {
  const domain = new URL(tool.url).hostname.replace("www.", "");
  const logo = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;

  return `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-5">
      <div class="card text-center h-100" style="width: 18rem;">
        <img src="${logo}" 
             class="card-img-top p-4"
             style="height:120px; object-fit:contain;">
        <div class="card-body d-flex flex-column">
          <h4 class="card-title">${tool.name}</h4>
          <p class="card-text">${tool.description}</p>
          <a href="${tool.url}" target="_blank" class="btn btn-primary mt-auto">
            Visit
          </a>
        </div>
      </div>
    </div>
  `;
}

/* ===== Latest AI Tools (Homepage 9) ===== */
if (container) {
  const latestTools = allTools
    .filter(tool => tool.islatest === true)
    .slice(0, 9);

  container.innerHTML = latestTools.map(createToolCard).join("");
}


const videoContainer = document.getElementById("videoMakingAiTools");

function createToolCard(tool) {
  const domain = new URL(tool.url).hostname.replace("www.", "");
  const logo = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;

  return `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-5">
      <div class="card text-center h-100" style="width: 18rem;">
        <img src="${logo}" 
             class="card-img-top p-4"
             style="height:120px; object-fit:contain;">
        <div class="card-body d-flex flex-column">
          <h4 class="card-title">${tool.name}</h4>
          <p class="card-text">${tool.description}</p>
          <a href="${tool.url}" target="_blank" class="btn btn-primary mt-auto">
            Visit
          </a>
        </div>
      </div>
    </div>
  `;
}
/* ===== Video Making AI Tools (Homepage 9) ===== */
if (videoContainer) {
  const homepageVideoTools = videoMakingAiTools.slice(0, 9);
  videoContainer.innerHTML = homepageVideoTools.map(createToolCard).join("");
}


const imageContainer = document.getElementById("imageMakingAiTools");

function createToolCard(tool) {
  const domain = new URL(tool.url).hostname.replace("www.", "");
  const logo = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;

  return `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-5">
      <div class="card text-center h-100" style="width: 18rem;">
        <img src="${logo}" 
             class="card-img-top p-4"
             style="height:120px; object-fit:contain;">
        <div class="card-body d-flex flex-column">
          <h4 class="card-title">${tool.name}</h4>
          <p class="card-text">${tool.description}</p>
          <a href="${tool.url}" target="_blank" class="btn btn-primary mt-auto">
            Visit
          </a>
        </div>
      </div>
    </div>
  `;
}
/* ===== Image Making AI Tools (Homepage 9) ===== */
if (imageContainer) {
  const homepageVideoTools = imageMakingAiTools.slice(0, 9);
  imageContainer.innerHTML = homepageVideoTools.map(createToolCard).join("");
};

const codingContainer = document.getElementById("codingAssistantAi");

function createToolCard(tool) {
  const domain = new URL(tool.url).hostname.replace("www.", "");
  const logo = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;

  return `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-5">
      <div class="card text-center h-100" style="width: 18rem;">
        <img src="${logo}" 
             class="card-img-top p-4"
             style="height:120px; object-fit:contain;">
        <div class="card-body d-flex flex-column">
          <h4 class="card-title">${tool.name}</h4>
          <p class="card-text">${tool.description}</p>
          <a href="${tool.url}" target="_blank" class="btn btn-primary mt-auto">
            Visit
          </a>
        </div>
      </div>
    </div>
  `;
}
/* ===== Image Making AI Tools (Homepage 9) ===== */
if (codingContainer) {
  const homepageVideoTools = codingAiTools.slice(0, 9);
  codingContainer.innerHTML = homepageVideoTools.map(createToolCard).join("");
}
const chat_WritngContainer = document.getElementById("chatBots&Writing");

function createToolCard(tool) {
  const domain = new URL(tool.url).hostname.replace("www.", "");
  const logo = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;

  return `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-5">
      <div class="card text-center h-100" style="width: 18rem;">
        <img src="${logo}" 
             class="card-img-top p-4"
             style="height:120px; object-fit:contain;">
        <div class="card-body d-flex flex-column">
          <h4 class="card-title">${tool.name}</h4>
          <p class="card-text">${tool.description}</p>
          <a href="${tool.url}" target="_blank" class="btn btn-primary mt-auto">
            Visit
          </a>
        </div>
      </div>
    </div>
  `;
}
/* ===== Image Making AI Tools (Homepage 9) ===== */
if (chat_WritngContainer) {
  const homepageVideoTools = chat_WritingAiTools.slice(0, 9);
  chat_WritngContainer.innerHTML = homepageVideoTools.map(createToolCard).join("");
}

const voiceAndAudioContainer = document.getElementById("voiceAndAudio");

function createToolCard(tool) {
  const domain = new URL(tool.url).hostname.replace("www.", "");
  const logo = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;

  return `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-5">
      <div class="card text-center h-100" style="width: 18rem;">
        <img src="${logo}" 
             class="card-img-top p-4"
             style="height:120px; object-fit:contain;">
        <div class="card-body d-flex flex-column">
          <h4 class="card-title">${tool.name}</h4>
          <p class="card-text">${tool.description}</p>
          <a href="${tool.url}" target="_blank" class="btn btn-primary mt-auto">
            Visit
          </a>
        </div>
      </div>
    </div>
  `;
}
voiceAndAudioContainer.innerHTML = voiceAndAudioTools.map(createToolCard).join("");

const aiAutomationContainer = document.getElementById("aiAutomation");

function createToolCard(tool) {
  const domain = new URL(tool.url).hostname.replace("www.", "");
  const logo = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;

  return `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-5">
      <div class="card text-center h-100" style="width: 18rem;">
        <img src="${logo}" 
             class="card-img-top p-4"
             style="height:120px; object-fit:contain;">
        <div class="card-body d-flex flex-column">
          <h4 class="card-title">${tool.name}</h4>
          <p class="card-text">${tool.description}</p>
          <a href="${tool.url}" target="_blank" class="btn btn-primary mt-auto">
            Visit
          </a>
        </div>
      </div>
    </div>
  `;
}
/* ===== Image Making AI Tools (Homepage 9) ===== */
if (aiAutomationContainer) {
  const homepageVideoTools = aiAutomationTools.slice(0, 9);
  aiAutomationContainer.innerHTML = homepageVideoTools.map(createToolCard).join("");
}