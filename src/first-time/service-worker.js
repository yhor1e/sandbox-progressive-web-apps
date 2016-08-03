if('serviceWorker' in navigator) {
  navigator.serviceWorker
    .registory('./service-worker.js')
    .then(function () { console.log('Service Worker Registered');})
}
