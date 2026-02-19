const container = document.getElementById("codingAiToolsPage");

function createToolCard(tool) {
  const domain = new URL(tool.url).hostname.replace("www.", "");
  const logo = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;

  return `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-5">
      <div class="card text-center h-100" style="width: 18rem;">
        <img src="${logo}" 
             class="card-img-top p-4"
             style="height:120px; object-fit:contain;">
        <div class="card-body">
          <h4 class="card-title">${tool.name}</h4>
          <p class="card-text">${tool.description}</p>
          <a href="${tool.url}" target="_blank" class="btn btn-primary">
            Visit
          </a>
        </div>
      </div>
    </div>
  `;
}
container.innerHTML = codingAiTools.map(createToolCard).join("");

const aiPresentationContainer = document.getElementById("presentationTools");

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
if (aiPresentationContainer) {
  const homepageVideoTools = presentationTools.slice(0, 9);
  aiPresentationContainer.innerHTML = homepageVideoTools.map(createToolCard).join("");
}