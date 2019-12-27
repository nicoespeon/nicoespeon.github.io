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
    "url": "webpack-runtime-1fac47b2b0ecf934c3be.js"
  },
  {
    "url": "app-a28781cee54de6f2bd9c.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-5f2b74aaa9780afd7bf0.js"
  },
  {
    "url": "index.html",
    "revision": "73e3f78517525f072ab002a1e1ccb3bb"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0e1a033b4a108770443dfc24d6217e7e"
  },
  {
    "url": "1.56b164801cac7ab28b2f.css"
  },
  {
    "url": "component---src-pages-index-jsx.a4f249e984380538d077.css"
  },
  {
    "url": "component---src-pages-index-jsx-fa0057c41f97103cc453.js"
  },
  {
    "url": "0-1fc3bea78341134a4e47.js"
  },
  {
    "url": "1-320ddb90bd51c892751f.js"
  },
  {
    "url": "2-9d62d26dd2cdaa76a942.js"
  },
  {
    "url": "static/d/708/path---index-6a9-xpUxBbANNVNcW9DKbK8F2QYq0k.json",
    "revision": "0fe00f167f2853e44bb22b79775ccafb"
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