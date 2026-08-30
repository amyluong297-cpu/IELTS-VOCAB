const CACHE_NAME = 'ielts-vocab-v101-20260829';
const STATIC_ASSETS = [
  './',
  './ielts-vocab-app.html',
  './manifest.json'
];

// Install event - cache essential files
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching static assets');
      return cache.addAll(STATIC_ASSETS).catch(err => {
        console.warn('Some assets failed to cache:', err);
        return cache.addAll(STATIC_ASSETS.filter(url => !url.includes('.html')));
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event
// HTML/navigation requests: network-first (always get latest code), cache only as offline fallback.
// Other assets: cache-first (fast, rarely change).
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;
  if (url.origin !== location.origin) return;

  const isHTML = request.mode === 'navigate' || request.destination === 'document' || url.pathname.endsWith('.html');

  if (isHTML) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseToCache));
          }
          return response;
        })
        .catch(() => caches.match(request).then(r => r || caches.match('./ielts-vocab-app.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((response) => {
      if (response) return response;
      return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type === 'error') return response;
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, responseToCache));
        return response;
      });
    })
  );
});

// Message handler for cache updates
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
