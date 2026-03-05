const container = document.getElementById("aiAutoMationToolsPage");

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

container.innerHTML = aiAutomationTools.map(createToolCard).join("");
