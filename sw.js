/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-32bee33d8370131f983c.js"
  },
  {
    "url": "app-a28781cee54de6f2bd9c.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-5f2b74aaa9780afd7bf0.js"
  },
  {
    "url": "index.html",
    "revision": "7df42e33fc715072cda4db0644438fe2"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c739d8b9aa5712f77e4517de49de9c7b"
  },
  {
    "url": "1.e6c971ce64534436238b.css"
  },
  {
    "url": "component---src-pages-index-jsx.bb9f1ae7f8c8c8c3586c.css"
  },
  {
    "url": "component---src-pages-index-jsx-6f01bef27b5d2850d753.js"
  },
  {
    "url": "0-bd3cfe82c996ec44cdd4.js"
  },
  {
    "url": "1-2f74648fb5ec5bd4f0e1.js"
  },
  {
    "url": "2-91086bbd293eb1ddadc5.js"
  },
  {
    "url": "static/d/593/path---index-6a9-QCYcfJueIFogudtkV5FQPfAMfbE.json",
    "revision": "67030533f069957d9ae4b2b88cc58655"
  },
  {
    "url": "component---src-pages-404-jsx-196164e16922a532708f.js"
  },
  {
    "url": "static/d/764/path---404-html-516-62a-rtm66PODRX7BKazSN58o5w6sPM.json",
    "revision": "2c65fed3a4fa3a744f2faf58bbde7063"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});