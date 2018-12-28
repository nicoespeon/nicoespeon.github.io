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
    "url": "webpack-runtime-2185d4cd1983a7f665a4.js"
  },
  {
    "url": "app-679659bbb04a88c66edd.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-5f2b74aaa9780afd7bf0.js"
  },
  {
    "url": "index.html",
    "revision": "b79eb7717421816a9df243cb6b18f8c0"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f98799052cc8adbb90d770d377d6cfbf"
  },
  {
    "url": "1.4413e3ef7b9d37243594.css"
  },
  {
    "url": "component---src-pages-index-jsx.10a0f6a7823b64195043.css"
  },
  {
    "url": "component---src-pages-index-jsx-f353ee5021831a4ee797.js"
  },
  {
    "url": "0-adb2f97cc27438a8487c.js"
  },
  {
    "url": "1-0874cf14f07c635010c4.js"
  },
  {
    "url": "2-95af416e05d9551b4d5b.js"
  },
  {
    "url": "static/d/582/path---index-6a9-N6527KVjmWHJkT7wir1Dg5bvOo.json",
    "revision": "d39c5f1eafd5dbdb7c1ac51840919495"
  },
  {
    "url": "component---src-pages-404-jsx-7dad01c535737efdd8d0.js"
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