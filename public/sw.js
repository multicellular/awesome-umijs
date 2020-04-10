// 首先引入workbox框架
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js',
);
// workbox.precaching([
//   // 注册成功后要立即缓存的资源列表
// ])
// var precacheAndRoute = workbox.precaching.precacheAndRoute
// precacheAndRoute([
//   {url: '/index.html', revision: '383676'},
//   {url: '/styles/app.0c9a31.css', revision: null},
//   {url: '/scripts/app.0d5770.js', revision: null},
// ], {
//   urlManipulation: ({url}) => {
//     // Your logic goes here...
//     return [alteredUrlOption1, alteredUrlOption2];
//   }
// });

// html的缓存策略
workbox.routing.registerRoute(
  new RegExp("'.*.html"),
  new workbox.strategies.NetworkFirst(),
);

workbox.routing.registerRoute(
  new RegExp('.*.(?:js|css)'),
  new workbox.strategies.CacheFirst(),
);

// workbox.routing.registerRoute(
//   new RegExp('https://your\.cdn\.com/'),
//   workbox.strategies.staleWhileRevalidate()
// );

workbox.routing.registerRoute(
  new RegExp('https://your.img.cdn.com/'),
  new workbox.strategies.CacheFirst({
    cacheName: 'example:img',
  }),
);
