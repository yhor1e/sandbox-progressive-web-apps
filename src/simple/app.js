window.addEventListener('DOMContentLoaded', function(){

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(this.readyState==4 && this.status==200) {
      if(this.response){
        console.log('fetched data is `', this.response.data, '`')
        var bodyEls =document.getElementsByTagName('body');
        bodyEls[0].textContent = this.response.data;
      }
    }
  }

  xhr.open( 'GET', './data.json', true );
  xhr.responseType = 'json';
  xhr.setRequestHeader('Pragma', 'no-cache');
  xhr.setRequestHeader('Cache-Control', 'no-cache');
  xhr.send( null );

});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
    console.info('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    console.error('ServiceWorker registration failed: ', err);
  });
}
