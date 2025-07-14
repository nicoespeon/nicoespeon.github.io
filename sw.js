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
    "url": "webpack-runtime-2408bc7e890e0fdce45c.js"
  },
  {
    "url": "app-e9efcee18540e2d79972.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-85c60ab57010e48f2883.js"
  },
  {
    "url": "index.html",
    "revision": "67654e6c56c6d3c270e5fc7588fd74ce"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "1a5ce25aba9227ecd72d0a1fbd927a94"
  },
  {
    "url": "1.e6c971ce64534436238b.css"
  },
  {
    "url": "component---src-pages-index-jsx.bb9f1ae7f8c8c8c3586c.css"
  },
  {
    "url": "component---src-pages-index-jsx-b500bad0338a9409ddd9.js"
  },
  {
    "url": "0-f9b011feafd8db62b383.js"
  },
  {
    "url": "1-9c8755622c7f500f0e92.js"
  },
  {
    "url": "2-81437ac88187808019a7.js"
  },
  {
    "url": "static/d/863/path---index-6a9-D6ZdKh0lU4fZLjl76sPvx7eCIE.json",
    "revision": "47fa1e4584d6abe8f2dc63d1a1690854"
  },
  {
    "url": "component---src-pages-404-jsx-c623fb445a41694089ef.js"
  },
  {
    "url": "static/d/800/path---404-html-516-62a-7fJrJa0ldSdUCzbN5QEEQzdRBxM.json",
    "revision": "504aa60084fd0566583eb651d1dcba10"
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