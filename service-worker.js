
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('tanques-v1').then(function(cache) {
      return cache.addAll([
        './',
        './controle_tanques_interface.html',
        './manifest.json',
        './service-worker.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
