var CACHE_NAME = 'v0.0.9';

var urlsToCache = [
  '/',
  '/data.json'
];

// Install steps
self.addEventListener('install', function(event) {
  console.log('[Service Worker] install called');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  )
});

// Fetch step
self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] fetch called',  event.request.url);
  event.respondWith(
    fetch(event.request)
      .catch(function() {
        return caches.match(event.request);
      })
  );
});

// Fetch step
self.addEventListener('activate', function(event) {
  console.log('[Service Worker] activate called');

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (CACHE_NAME.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }))
    })
  );
})
