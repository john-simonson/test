self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./scripts/script.js", "./scripts/index.js", "./logos/rowdy.png"]);
        })
    );
    console.log("Install! complete");
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
    console.log('Intercepting fetch request for: ' + e.request.url);
});
