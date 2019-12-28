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
    "url": "webpack-runtime-657355bf706e141f1b29.js"
  },
  {
    "url": "app-a28781cee54de6f2bd9c.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-5f2b74aaa9780afd7bf0.js"
  },
  {
    "url": "index.html",
    "revision": "d50d47c7f1ad532446271c935ed3d411"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3e7a122bf9dd6058452a02e8aea6b8da"
  },
  {
    "url": "1.e82f9871b875f1569171.css"
  },
  {
    "url": "component---src-pages-index-jsx.bb9f1ae7f8c8c8c3586c.css"
  },
  {
    "url": "component---src-pages-index-jsx-fa0057c41f97103cc453.js"
  },
  {
    "url": "0-1fc3bea78341134a4e47.js"
  },
  {
    "url": "1-5d4bd00cae7c3b7b9337.js"
  },
  {
    "url": "2-9d62d26dd2cdaa76a942.js"
  },
  {
    "url": "static/d/298/path---index-6a9-PLVKzCvWkflF4wXgwwbaLH0O7BU.json",
    "revision": "8544aec68eb2abb0803aa85a5ff03679"
  },
  {
    "url": "component---src-pages-404-jsx-7856d8e49ab062d7bb70.js"
  },
  {
    "url": "static/d/443/path---404-html-516-62a-GK7DINXPqHeVcCfR8txcZs73as.json",
    "revision": "7be937e7ddd00d965204bb39f07bc00e"
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