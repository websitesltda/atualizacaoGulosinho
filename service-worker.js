"use strict";var precacheConfig=[["/react_admin_dashboard/index.html","eb685f747f816197c324765c8c27e331"],["/react_admin_dashboard/static/css/main.8b61b94c.css","760997b04eb646c970ea09376b99e04a"],["/react_admin_dashboard/static/js/main.511cd0c4.js","abb50e667c21f3144abaa930898195ee"],["/react_admin_dashboard/static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["/react_admin_dashboard/static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["/react_admin_dashboard/static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["/react_admin_dashboard/static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["/react_admin_dashboard/static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["/react_admin_dashboard/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/react_admin_dashboard/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/react_admin_dashboard/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/react_admin_dashboard/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/react_admin_dashboard/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/react_admin_dashboard/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/react_admin_dashboard/static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["/react_admin_dashboard/static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["/react_admin_dashboard/static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["/react_admin_dashboard/static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["/react_admin_dashboard/static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["/react_admin_dashboard/static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["/react_admin_dashboard/static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["/react_admin_dashboard/static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["/react_admin_dashboard/static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["/react_admin_dashboard/static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var r="/react_admin_dashboard/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(r,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});