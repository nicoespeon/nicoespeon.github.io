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
    "url": "webpack-runtime-39986d628baca10dc2f7.js"
  },
  {
    "url": "app-a40505be74cf2804b6ca.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-85c60ab57010e48f2883.js"
  },
  {
    "url": "index.html",
    "revision": "9ade574a2251fd3de7d626c9754a3eab"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "68d2fea912a6b1552438cb3d83bb0bd1"
  },
  {
    "url": "1.e6c971ce64534436238b.css"
  },
  {
    "url": "component---src-pages-index-jsx.bb9f1ae7f8c8c8c3586c.css"
  },
  {
    "url": "component---src-pages-index-jsx-925f578f183d112c4add.js"
  },
  {
    "url": "0-8428338299bf62ec18c9.js"
  },
  {
    "url": "1-31d70d15c478e489604d.js"
  },
  {
    "url": "2-9542706e58aaaad8c35f.js"
  },
  {
    "url": "static/d/737/path---index-6a9-NA84n9PO89nEEO2YfFbn6FoMelU.json",
    "revision": "0be087aaea5f156785e6952875cb8db5"
  },
  {
    "url": "component---src-pages-404-jsx-a5a8ccd97c8b9c002c94.js"
  },
  {
    "url": "static/d/695/path---404-html-516-62a-e9coqJlpNXLGOIZOKcoIEtzZPZU.json",
    "revision": "6de460d4d3bdd05e67bf4e5039e558c2"
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