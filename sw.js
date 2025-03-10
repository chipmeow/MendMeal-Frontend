// Cache name
const CACHE_NAME = "mendmeal-cache-v1";

// Files to cache
const urlsToCache = [
    "/",
    "/index.html",
    "/app.js",
    "/manifest.json",
    "/images/icon.png", // Add actual icon file
];

// Install service worker
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log("Opened cache");
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch from cache first, then network
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

// Activate SW and remove old cache
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
            );
        })
    );
});
