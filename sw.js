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
    "url": "webpack-runtime-d7f3d238d120eff40335.js"
  },
  {
    "url": "app-4b69be65322cef6f2922.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-5f2b74aaa9780afd7bf0.js"
  },
  {
    "url": "index.html",
    "revision": "415d01e06e34ddaec2aaec6a8137a3f7"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f7dbdc68f3a1b124fb9079a944c94895"
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
    "url": "0-90b3f267660c5b5198fe.js"
  },
  {
    "url": "1-d04f2debcacbe6576aaf.js"
  },
  {
    "url": "2-a4be8b4be4b8b83b17fa.js"
  },
  {
    "url": "static/d/239/path---index-6a9-JXNPHs5X7b169L2gokY1j4rARwQ.json",
    "revision": "00124134f4f17a4e7247bbcbb72c879e"
  },
  {
    "url": "component---src-pages-404-jsx-7856d8e49ab062d7bb70.js"
  },
  {
    "url": "static/d/465/path---404-html-516-62a-vKf8dUbNQtlVOTOd8BItuslxs.json",
    "revision": "db48381469fe455c7e2165ae0ddd77e3"
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