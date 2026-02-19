const container = document.getElementById("latestToolsPage");

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

// Sirf latest tools filter karo
const latestTools = allTools.filter(tool => tool.islatest);

container.innerHTML = latestTools.map(createToolCard).join("");
