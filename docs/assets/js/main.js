import { Workbox } from "https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-window.prod.mjs";

if ("serviceWorker" in navigator) {
  const wb = new Workbox("/assets/js/sw.js");

  wb.register();
}
