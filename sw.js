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
    "url": "webpack-runtime-2d50bc3683f4d179d995.js"
  },
  {
    "url": "app-b19e0a2104c6eda24733.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-5f2b74aaa9780afd7bf0.js"
  },
  {
    "url": "index.html",
    "revision": "e61765beeb2d2e7aac7b87a696a310df"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c08c83aa5e438bb788c9843d7d4c00b6"
  },
  {
    "url": "1.4413e3ef7b9d37243594.css"
  },
  {
    "url": "component---src-pages-index-jsx.10a0f6a7823b64195043.css"
  },
  {
    "url": "component---src-pages-index-jsx-73ad62c6d3197c2f3b7b.js"
  },
  {
    "url": "0-a91e1e365ea3540c37ca.js"
  },
  {
    "url": "1-2a802cfaa686a5cc4d36.js"
  },
  {
    "url": "2-72af66054198dace5993.js"
  },
  {
    "url": "static/d/493/path---index-6a9-SANOoaM2QC4UsB1UFq4qHNaGQk4.json",
    "revision": "2189c0e93135ad7954f91efdecc759f6"
  },
  {
    "url": "component---src-pages-404-jsx-eaf2abc9c9fc5947f16a.js"
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