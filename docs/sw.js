if(!self.define){let s,e={};const a=(a,f)=>(a=new URL(a+".js",f).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(f,i)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let r={};const t=s=>a(s,o),n={module:{uri:o},exports:r,require:t};e[o]=Promise.all(f.map((s=>n[s]||t(s)))).then((s=>(i(...s),r)))}}define(["./workbox-926a8ce9"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/bootstrap/css/bootstrap.min.css",revision:"670d9e2827f66fc79b9c5fc4ef2ae7c9"},{url:"assets/bootstrap/js/bootstrap.min.js",revision:"dfd824922bdcd8afddd7a123029bba09"},{url:"assets/css/styles.min.css",revision:"c99585616ddbfea35be6cce9613d99f4"},{url:"assets/fonts/fa-brands-400.eot",revision:"088a34f78f530102fd9661173b4a4f26"},{url:"assets/fonts/fa-brands-400.svg",revision:"d72293118cda50ec50c39957d9d836d0"},{url:"assets/fonts/fa-brands-400.ttf",revision:"273dc9bf9778fd37fa61357645d46a28"},{url:"assets/fonts/fa-brands-400.woff",revision:"f4920c94c0861c537f72ba36590f6362"},{url:"assets/fonts/fa-brands-400.woff2",revision:"822d94f19fe57477865209e1242a3c63"},{url:"assets/fonts/fa-regular-400.eot",revision:"3ac49cb33f43a6471f21ab3df40d1b1e"},{url:"assets/fonts/fa-regular-400.svg",revision:"d2e53334c22a9a4937bc26e84b36e1e0"},{url:"assets/fonts/fa-regular-400.ttf",revision:"ece54318791c51b52dfdc689efdb6271"},{url:"assets/fonts/fa-regular-400.woff",revision:"a57bcf76c178aee452db7a57b75509b6"},{url:"assets/fonts/fa-regular-400.woff2",revision:"9efb86976bd53e159166c12365f61e25"},{url:"assets/fonts/fa-solid-900.eot",revision:"7fb1cdd9c3b889161216a13267b55fe2"},{url:"assets/fonts/fa-solid-900.svg",revision:"7a5de9b08012e4da40504f2cf126a351"},{url:"assets/fonts/fa-solid-900.ttf",revision:"2aa6edf8f296a43b32df35f330b7c81c"},{url:"assets/fonts/fa-solid-900.woff",revision:"93f284548b42ab76fe3fd03a9d3a2180"},{url:"assets/fonts/fa-solid-900.woff2",revision:"f6121be597a72928f54e7ab5b95512a1"},{url:"assets/fonts/fontawesome-all.min.css",revision:"e0076d9b1984448e1b530d5b1a419c7a"},{url:"assets/fonts/s/nunito/v25/XRXV3I6Li01BKofIMeaBXso.woff2",revision:"b64d77c41dff8cf0803c13fe1758189e"},{url:"assets/fonts/s/nunito/v25/XRXV3I6Li01BKofINeaB.woff2",revision:"c26b97e7f5bb7a34d190703522d75e16"},{url:"assets/fonts/s/nunito/v25/XRXV3I6Li01BKofIO-aBXso.woff2",revision:"272ba1c184e00d2f0280ebcba62a1a17"},{url:"assets/fonts/s/nunito/v25/XRXV3I6Li01BKofIOOaBXso.woff2",revision:"be9a2b8acd284f1c3d3c318bf4921fed"},{url:"assets/fonts/s/nunito/v25/XRXV3I6Li01BKofIOuaBXso.woff2",revision:"d609bdf9fcfde23841819aa5def35a51"},{url:"assets/fonts/s/nunito/v25/XRXX3I6Li01BKofIMNaDRs4.woff2",revision:"3e234fa0724b4b5b6c5f0bb405055d7d"},{url:"assets/fonts/s/nunito/v25/XRXX3I6Li01BKofIMNaHRs71cA.woff2",revision:"f031d234e14a530d1646ae4991b3f341"},{url:"assets/fonts/s/nunito/v25/XRXX3I6Li01BKofIMNaMRs71cA.woff2",revision:"991986f8c47e0c6e566f86a30500c173"},{url:"assets/fonts/s/nunito/v25/XRXX3I6Li01BKofIMNaNRs71cA.woff2",revision:"65ad4992d52b3543a94b976456cd32c8"},{url:"assets/fonts/s/nunito/v25/XRXX3I6Li01BKofIMNaORs71cA.woff2",revision:"2a9dd39d1084a6dff253f9cf6ecc9302"},{url:"assets/img/avatars/avatar1.jpeg",revision:"a71e0ba0e32de73d90a8d2612bc08ffb"},{url:"assets/img/avatars/avatar2.jpeg",revision:"6ecf4240905e292de3df6725d36cf393"},{url:"assets/img/avatars/avatar3.jpeg",revision:"182e554cd2e84e3a6da2ff9369504a08"},{url:"assets/img/avatars/avatar4.jpeg",revision:"a9bdb0057a62c104e8769b848d559c33"},{url:"assets/img/avatars/avatar5.jpeg",revision:"8832f56457c6b0aa3767477ace659554"},{url:"assets/img/dogs/image2.jpeg",revision:"8976cf4205f6b788fdd35d083e9b9a4c"},{url:"assets/img/dogs/image3.jpeg",revision:"0ae3284b98c6d048be196fb249a26a18"},{url:"assets/js/chart.min.js",revision:"bd9843d1866f45d1406a12f7de05f9ff"},{url:"assets/js/main.js",revision:"063ea282a0acce3a34a8f0d6228e2aa9"},{url:"assets/js/script.min.js",revision:"bdf36300aae20ed8ebca7e88738d5267"},{url:"assets/js/sw.js",revision:"3b40102037e9d92a1cfd25f3c027cbe8"},{url:"assets/js/workbox-926a8ce9.js",revision:"2e8108d82eb417009284d8a30b1fd9e1"},{url:"index.html",revision:"2125828450ffc4766c84add7c4cf96f0"},{url:"login.html",revision:"8fb7a0cf98708137fea1d4d19d30b43b"},{url:"manifest.json",revision:"66794e58b239fc389fe480664d0b4a92"},{url:"profile.html",revision:"2854ec78faace05abdd12fbf1a248c87"},{url:"register.html",revision:"3fb17d763fddfef79c8f3540345365d0"},{url:"sitemap.xml",revision:"8f11a9b491edb0c6c7e327db2208da28"},{url:"table.html",revision:"569b7d7c1a656d78b8f95d495e1ef73d"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
