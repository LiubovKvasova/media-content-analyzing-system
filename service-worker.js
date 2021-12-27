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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "ee697ba08973164fff3fd769ec3e96f0"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.61338829.css",
    "revision": "00917f7fe285c428986fe3e8dcba8aea"
  },
  {
    "url": "assets/img/Add_report.131e7f5f.png",
    "revision": "131e7f5ffb4387a3b821dcfa1adb37d0"
  },
  {
    "url": "assets/img/EER-diagram.c3eca197.png",
    "revision": "c3eca1978cf566cb00bbc00810cdd6aa"
  },
  {
    "url": "assets/img/Get_all_reports.525711d8.png",
    "revision": "525711d83466b3485cae1431624a49ed"
  },
  {
    "url": "assets/img/Get_one_report.3944309e.png",
    "revision": "3944309e5cd988f132c5ee0553f8e235"
  },
  {
    "url": "assets/img/Remove_report.4ab48298.png",
    "revision": "4ab48298910d18a0ab789f2b82a70715"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Update_report.93628aad.png",
    "revision": "93628aad54c7af029a2c10d7a2d3c863"
  },
  {
    "url": "assets/js/10.03454f9e.js",
    "revision": "d251e44230b4aa91b256ae67337f3834"
  },
  {
    "url": "assets/js/11.7c52a695.js",
    "revision": "2fee32b63375d341e32a294c2c6345a9"
  },
  {
    "url": "assets/js/12.459c6e92.js",
    "revision": "996d848f4de09c8b2dc8efc0852411c9"
  },
  {
    "url": "assets/js/13.6141e8eb.js",
    "revision": "70c39296a76ef954a0ce4a0a7096e955"
  },
  {
    "url": "assets/js/14.ce1c76d6.js",
    "revision": "b21c4836850891b644ad946539a3f39d"
  },
  {
    "url": "assets/js/15.a17b48b9.js",
    "revision": "3eea8928282d560f1bffb5898ed37b36"
  },
  {
    "url": "assets/js/16.446bbc29.js",
    "revision": "551650be5ecf9f0cec1c22c3320c1123"
  },
  {
    "url": "assets/js/17.c52af17f.js",
    "revision": "1c91852b889b9974362cc6fbc3b98349"
  },
  {
    "url": "assets/js/18.b45526e1.js",
    "revision": "eba9dc93e226c16989788ada87a90963"
  },
  {
    "url": "assets/js/19.6581ef79.js",
    "revision": "563b1f996febe64dffd841907fb061e9"
  },
  {
    "url": "assets/js/2.cf89387c.js",
    "revision": "afaf4bddca2b2800d658855e0ec5d731"
  },
  {
    "url": "assets/js/20.db39150c.js",
    "revision": "7cae61c4ee048ada9a4032f133057fb5"
  },
  {
    "url": "assets/js/21.24abf14a.js",
    "revision": "450ce1e3b05480fc75eabeebd5c7d2e7"
  },
  {
    "url": "assets/js/22.889e2926.js",
    "revision": "0dc8f8fd1b5e8789c0eda0690089ec2c"
  },
  {
    "url": "assets/js/23.c66fba2f.js",
    "revision": "c56fc3b82aac7b7a0b6fbea2d9e84787"
  },
  {
    "url": "assets/js/24.352b7b99.js",
    "revision": "b84fecacbcd6f54b91294220e880db02"
  },
  {
    "url": "assets/js/26.01ddc578.js",
    "revision": "bf2a0e15fb7672f72f6d3128bd3c275e"
  },
  {
    "url": "assets/js/3.b557305d.js",
    "revision": "de188d36f433d2c1cc43c903d16c8f2c"
  },
  {
    "url": "assets/js/4.01a29078.js",
    "revision": "ffd13917df69abdfab82b98623f78444"
  },
  {
    "url": "assets/js/5.fc7e2c8e.js",
    "revision": "5b304d6ee31e12a1bd7c19b08906518c"
  },
  {
    "url": "assets/js/6.7663af5a.js",
    "revision": "d07495ab87b2938b3094e0d4508910ee"
  },
  {
    "url": "assets/js/7.47ae5a1e.js",
    "revision": "def8db3804b872a054ce0e86e522a034"
  },
  {
    "url": "assets/js/8.3dd59e41.js",
    "revision": "a022fe02206b9da1f15515f2cac9cad2"
  },
  {
    "url": "assets/js/9.7d67b720.js",
    "revision": "2f569a0724af1716c6346bd4fa111cdb"
  },
  {
    "url": "assets/js/app.0d166b66.js",
    "revision": "36c404dc714de890dfbf826bd79a1e05"
  },
  {
    "url": "conclusion/index.html",
    "revision": "3e9920bf67e388608e8df5be73ff778b"
  },
  {
    "url": "design/index.html",
    "revision": "9f11321a4457b7fc35bff95b02fe54e1"
  },
  {
    "url": "EER-diagram.png",
    "revision": "c3eca1978cf566cb00bbc00810cdd6aa"
  },
  {
    "url": "index.html",
    "revision": "7e86dc8670655ed817d1ffe7e187f0dc"
  },
  {
    "url": "intro/index.html",
    "revision": "272e4feb845c487f31af8a456a0d6959"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "1ae6dfa11deb1133418257ac416ae9c0"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "fd6269bbbf8cb1981ca02b9b85fb6dc1"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "a7364af5d721d140903c80669ada4e74"
  },
  {
    "url": "software/index.html",
    "revision": "889bcb243a4a0856a2ad7c212963aee5"
  },
  {
    "url": "test/index.html",
    "revision": "a02a9d3db2c5002c3c576e427d25c686"
  },
  {
    "url": "use cases/index.html",
    "revision": "ed173fd8835a5fb55047c226092da715"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
