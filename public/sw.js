// Service Worker for Plumbus Marketing Site
// Implements aggressive caching for performance

const CACHE_NAME = 'plumbus-v1';
const STATIC_CACHE_NAME = 'plumbus-static-v1';

// Assets to cache immediately
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/styles/critical.css'
];

// Assets to cache on first request
const RUNTIME_CACHE_PATTERNS = [
  /\.(?:js|css|woff2?|png|jpg|jpeg|svg|gif)$/,
  /^https:\/\/fonts\.googleapis\.com/,
  /^https:\/\/fonts\.gstatic\.com/
];

// Install event - precache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE_NAME;
            })
            .map((cacheName) => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip Chrome extensions
  if (url.protocol === 'chrome-extension:') return;

  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match('/')
        .then((response) => response || fetch(request))
        .catch(() => caches.match('/'))
    );
    return;
  }

  // Handle static assets
  if (RUNTIME_CACHE_PATTERNS.some(pattern => pattern.test(url.href))) {
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) {
            // Serve from cache
            return response;
          }

          // Fetch and cache
          return fetch(request)
            .then((response) => {
              // Don't cache non-successful responses
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }

              // Clone response before caching
              const responseToCache = response.clone();
              
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(request, responseToCache);
                });

              return response;
            });
        })
        .catch(() => {
          // Fallback for offline
          if (request.destination === 'image') {
            return new Response(
              '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#F6E8CB"/><text x="100" y="100" text-anchor="middle" fill="#8B5A3C" font-family="system-ui">Image unavailable</text></svg>',
              { headers: { 'Content-Type': 'image/svg+xml' } }
            );
          }
        })
    );
  }
});

// Background sync for analytics (optional)
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync
      console.log('Background sync triggered')
    );
  }
});

// Push notifications (optional future enhancement)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New Plumbus update available!',
    icon: '/plumbus-icon.svg',
    badge: '/plumbus-icon.svg',
    data: {
      url: '/'
    }
  };

  event.waitUntil(
    self.registration.showNotification('Plumbus Marketing', options)
  );
});