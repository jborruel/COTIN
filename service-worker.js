self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('cotin-cache').then(cache => {
      return cache.addAll([
        '/',
        '/COTIN/', // Añade aquí tus archivos necesarios
        // '/COTIN/index.html', 
        '/COTIN/icon-48x48.png',
        '/COTIN/icon-72x72.png',
        '/COTIN/icon-96x96.png',
        '/COTIN/icon-144x144.png',
        '/COTIN/icon-192x192.png',
        '/COTIN/icon-256x256.png',
        '/COTIN/icon-512x512.png'
      ]);
    })
  );
});

/*
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
*/

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request, { redirect: 'follow' }) // Permitir redirecciones
      .then(response => {
        // Maneja respuestas redirigidas explícitamente
        if (response.redirected) {
          return fetch(response.url); // Reintenta con la URL redirigida
        }
        return response; // Devuelve la respuesta si no hay redirección
      })
      .catch(error => {
        console.error('Error en fetch:', error);
        return caches.match(event.request); // Busca en caché como alternativa
      })
  );
});

