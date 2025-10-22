importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "...",
  authDomain: "...",
  projectId: "kuis-b111b",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.data?.title || 'Notifikasi';
  const notificationOptions = {
    body: payload.data?.body || '',
    icon: '/icons/icon-512x512.png', //payload.data?.icon || '/icons/icon-512x512.png',
    badge: '/icons/icon-128x128.png', //payload.data?.badge || '/icons/icon-128x128.png',
    color: '#4922f5',
    vibrate: [200, 100, 200],
    data: {
      click_action: payload.data?.click_action || '/',
      sound: payload.data?.sound || 'default' // default jika tidak ada
    }
  };

  // Kirim perintah mainkan suara ke semua tab aktif
  const soundUrl = `/sounds/quizme_notify_flash.mp3`;
  self.clients.matchAll({ includeUncontrolled: true }).then(clients => {
    clients.forEach(client => client.postMessage({ action: 'playSound', url: soundUrl }));
  });

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Klik notifikasi buka URL
self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  const url = event.notification.data?.click_action || '/';
  event.waitUntil(clients.openWindow(url));
});
