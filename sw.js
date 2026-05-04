const CACHE_VERSION = 'site-cache-v2';
const CORE_CACHE = `${CACHE_VERSION}-core`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

const CORE_ASSETS = [
  '/',
  '/blog/',
  '/blog/articles/',
  '/blog/archive/',
  '/blog/tags/',
  '/offline/',
  '/favicon.png',
  '/favicon.svg',
  '/logo.svg',
  '/sidebar-data.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CORE_CACHE)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith('site-cache-') && !key.startsWith(CACHE_VERSION))
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (!isCacheableRequest(request)) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
    return;
  }

  if (isNextStaticAsset(request)) {
    event.respondWith(networkFirst(request));
    return;
  }

  if (isStaticAsset(request)) {
    event.respondWith(cacheFirst(request));
  }
});


function isCacheableRequest(request) {
  const url = new URL(request.url);
  return request.method === 'GET' && url.origin === self.location.origin;
}

function isStaticAsset(request) {
  const url = new URL(request.url);
  return (
    /\.(?:css|js|png|jpg|jpeg|webp|svg|gif|ico|woff2?)$/i.test(url.pathname)
  );
}

function isNextStaticAsset(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/_next/static/');
}

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  const response = await fetch(request);

  if (response.ok) {
    const cache = await caches.open(RUNTIME_CACHE);
    cache.put(request, response.clone());
  }

  return response;
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);

    if (response.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || caches.match('/offline/');
  }
}
