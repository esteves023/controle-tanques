
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('transferencia-cache').then(function(cache) {
      return cache.addAll([
        'tanque_layout_percent_96_validacao_bidirecional.html',
        'manifest.json',
        'silo-icon.png'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
