var hasRequestPending=false;

window.addEventListener('DOMContentLoaded', function(){
  window.fetch('./data.json').then(function(response) {
    hasRequestPending=true;
    response.json().then(
      function(json){
        hasRequestPending=false;
        console.log('fetched data is `', json.data, '`')
        var bodyEls =document.getElementsByTagName('body');
        bodyEls[0].textContent = json.data;
      });
  });
})


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
    console.info('ServiceWorker registration successful with scope: ',    registration.scope);
  }).catch(function(err) {
    console.error('ServiceWorker registration failed: ', err);
  });
}
