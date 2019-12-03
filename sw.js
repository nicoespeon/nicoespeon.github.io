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
    "url": "webpack-runtime-59dfd975301a95b78d54.js"
  },
  {
    "url": "app-a28781cee54de6f2bd9c.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-5f2b74aaa9780afd7bf0.js"
  },
  {
    "url": "index.html",
    "revision": "ae2a7e17e7b99c97691f9acb615b9f4b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b19d0c9ee4063c980ad4ea926f4c8dfe"
  },
  {
    "url": "1.06404778f6bbd2eb332c.css"
  },
  {
    "url": "component---src-pages-index-jsx.34b8bc1aa60cfb20f0d8.css"
  },
  {
    "url": "component---src-pages-index-jsx-f009cd138e1df3aeee40.js"
  },
  {
    "url": "0-1fc3bea78341134a4e47.js"
  },
  {
    "url": "1-47e797bfb0f5cb3dc723.js"
  },
  {
    "url": "2-9d62d26dd2cdaa76a942.js"
  },
  {
    "url": "static/d/772/path---index-6a9-6S7Qc35xOtDoRENRSMk3THcW86c.json",
    "revision": "d27c4a5c14a36ac49cc0fefce2643280"
  },
  {
    "url": "component---src-pages-404-jsx-7856d8e49ab062d7bb70.js"
  },
  {
    "url": "static/d/248/path---404-html-516-62a-17zMIRn17FUPXyHQEWJ5UyWuY.json",
    "revision": "bce0b2ad48db90a60bb0d210b284d6a4"
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