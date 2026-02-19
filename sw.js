const CACHE_NAME = "ai-tools-cache-v1";
const urlsToCache = [
  "/TopAIToolsHub/videoMakingTools.html",
  "/TopAIToolsHub/index.html",
  "/TopAIToolsHub/assets/styles.css",
  "/TopAIToolsHub/assets/script.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});