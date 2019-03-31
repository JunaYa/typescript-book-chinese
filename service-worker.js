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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f10086e1d15aa89e8e0e9a5955701ab0"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b635c98c.js",
    "revision": "484368cc1f8538ce33bd5b2825f1b0a4"
  },
  {
    "url": "assets/js/11.f5389cb8.js",
    "revision": "6f2c3cfd2bb6a2891961030c97c141c8"
  },
  {
    "url": "assets/js/12.bf312ac7.js",
    "revision": "1ba9b3e4b7f8c44c56caff59f2bcf03f"
  },
  {
    "url": "assets/js/13.d5b39a3b.js",
    "revision": "aa4384e5aabe7e56b7eaf7301ef01246"
  },
  {
    "url": "assets/js/14.ff09e74e.js",
    "revision": "1158a03217f155355fb2e49698a4c4fb"
  },
  {
    "url": "assets/js/15.30721a43.js",
    "revision": "0681c5903e43fbc429537072037d34a7"
  },
  {
    "url": "assets/js/16.f7c33f85.js",
    "revision": "119e378f767d2dad47fea3be040c45ae"
  },
  {
    "url": "assets/js/17.5d604219.js",
    "revision": "7dc640b4442b769aae3830999ab2fc9d"
  },
  {
    "url": "assets/js/18.fb850ea8.js",
    "revision": "377556b6dba11e966793e5e1146a1512"
  },
  {
    "url": "assets/js/19.501fb616.js",
    "revision": "ceb234a1c264acc1464b39d815241f66"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.20f88f2b.js",
    "revision": "da7eff8113f48772f625667d3f98de5d"
  },
  {
    "url": "assets/js/21.d8f66771.js",
    "revision": "66e715e21f645e4807b683fc2c467473"
  },
  {
    "url": "assets/js/22.d755962d.js",
    "revision": "c99c95c865ebaba7596ecad5a9c5f0ed"
  },
  {
    "url": "assets/js/23.c605d868.js",
    "revision": "91b3a5186e1ea5e19f9f80fc160bee46"
  },
  {
    "url": "assets/js/24.340c13c5.js",
    "revision": "077c0176427b4cf5657e473c471b127b"
  },
  {
    "url": "assets/js/25.fd161f03.js",
    "revision": "a1b528282351727b5ded515a55dc1911"
  },
  {
    "url": "assets/js/26.d491a4c6.js",
    "revision": "8ae995c6e57a07251520885f4972ccba"
  },
  {
    "url": "assets/js/27.32aeb1e4.js",
    "revision": "f337f4c80bca9563c438d00423ec88e7"
  },
  {
    "url": "assets/js/28.8b723ad9.js",
    "revision": "245b02ce7d183ce41e0b5c875de81ae4"
  },
  {
    "url": "assets/js/29.881762c9.js",
    "revision": "ecf913c6a61e659643beef54f226855e"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.42cb6708.js",
    "revision": "d57a3552d4b3aa3440c9e4d6e0169d5c"
  },
  {
    "url": "assets/js/31.ad4777a3.js",
    "revision": "093ad2b6c1a83c2d8c2d92d0ab728437"
  },
  {
    "url": "assets/js/32.effc0d29.js",
    "revision": "90e017ee05bfdd289daf67507d29658e"
  },
  {
    "url": "assets/js/33.37c14879.js",
    "revision": "e770601192aae94e223d9664d7083e75"
  },
  {
    "url": "assets/js/34.fc07f87f.js",
    "revision": "e7bdfe7db50c28f0b11c21458b74e174"
  },
  {
    "url": "assets/js/35.d011b2cf.js",
    "revision": "97f40b440154c0ca0fc11b31e1f8c2b6"
  },
  {
    "url": "assets/js/36.0dff3eca.js",
    "revision": "8d099040c3e0a01e0edc8de622f22cec"
  },
  {
    "url": "assets/js/37.78f01aa5.js",
    "revision": "d60892cd572ce39259d63d297f35f8b8"
  },
  {
    "url": "assets/js/38.dfc6af1b.js",
    "revision": "6fa1f603ddf95e9a3e1df5e68a641041"
  },
  {
    "url": "assets/js/39.f17651e5.js",
    "revision": "f610b628c2fb4e61c0f4a40bb4d4e434"
  },
  {
    "url": "assets/js/4.f7fc35f8.js",
    "revision": "3e147c93f683a033d6006e7e59949cdd"
  },
  {
    "url": "assets/js/40.08fe56d7.js",
    "revision": "9e749394e0f0e2123e95ab84e6697bf9"
  },
  {
    "url": "assets/js/41.c19000ad.js",
    "revision": "a33c753e075c1445cdd9b110cc320cf4"
  },
  {
    "url": "assets/js/42.6b8e90d0.js",
    "revision": "09060804ef3c9a51b48e8e889a6e5ce7"
  },
  {
    "url": "assets/js/43.fb4273bb.js",
    "revision": "02e0aa492c5a51049c8b84f4c2d0d037"
  },
  {
    "url": "assets/js/44.56f9412c.js",
    "revision": "ba657ebd647334433c96afd0ba0b5e1f"
  },
  {
    "url": "assets/js/45.6a62db81.js",
    "revision": "1752bb1db13168e095e4ff1d162597c9"
  },
  {
    "url": "assets/js/46.668a5c23.js",
    "revision": "53c2cf0e9ef17637792ae2df50c0713a"
  },
  {
    "url": "assets/js/47.fc817602.js",
    "revision": "45713ef949ad634bdc8cd925aaa0e321"
  },
  {
    "url": "assets/js/48.948fdb9d.js",
    "revision": "2b808d15446e3bba5198e8645601a389"
  },
  {
    "url": "assets/js/49.2a81dd4a.js",
    "revision": "f47d40238f1942495f466f6b447a57ae"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.7ad8e68e.js",
    "revision": "9b699eec00fb204da99e67580b6c28fb"
  },
  {
    "url": "assets/js/51.9b7bd61f.js",
    "revision": "5143ff0be37f12c45f2cfee97e42488b"
  },
  {
    "url": "assets/js/52.608d11fb.js",
    "revision": "5ad6f78124acb8b2533b60ff26784eef"
  },
  {
    "url": "assets/js/53.e76a4334.js",
    "revision": "7e007a784d4528f947280794ece03022"
  },
  {
    "url": "assets/js/54.039460a5.js",
    "revision": "c15d95cca2d39d887c0734c5ed693615"
  },
  {
    "url": "assets/js/55.3bcc9eda.js",
    "revision": "21e6c0148950755660326797a9c33879"
  },
  {
    "url": "assets/js/56.e2fd0397.js",
    "revision": "77d1274a31255e75e2cf1ea3c79e5a3f"
  },
  {
    "url": "assets/js/57.59d0262d.js",
    "revision": "4bd229059ce925d3ac561f6c847fded5"
  },
  {
    "url": "assets/js/58.6a3a89c8.js",
    "revision": "780f0dcff28b5df4d2a55b8739e8197f"
  },
  {
    "url": "assets/js/59.54abefbe.js",
    "revision": "876eacc909c7a34d5b6c6bf6bfc9b38f"
  },
  {
    "url": "assets/js/6.cffe5692.js",
    "revision": "32c4228908feb9cd1d62a0cd1c4db5ca"
  },
  {
    "url": "assets/js/60.3ecc7cd1.js",
    "revision": "70fe4c17173093046999358e07b300e9"
  },
  {
    "url": "assets/js/61.ff3840cc.js",
    "revision": "3e8d3537a00b1e09e1d5328f250d19d8"
  },
  {
    "url": "assets/js/62.05446a77.js",
    "revision": "b5cdb9932f291ca1811911e06f59287a"
  },
  {
    "url": "assets/js/63.f1fff279.js",
    "revision": "ddabeba307f9a16e4d2a389692099d1c"
  },
  {
    "url": "assets/js/64.dc692e44.js",
    "revision": "c3b64c00950696df80de84321109b34e"
  },
  {
    "url": "assets/js/65.5e14bfa2.js",
    "revision": "037beaebedb2b130abaeac94a9159559"
  },
  {
    "url": "assets/js/66.a1ce00cf.js",
    "revision": "e209f88ea229d96b678fa222f8a28c93"
  },
  {
    "url": "assets/js/67.95329b50.js",
    "revision": "e3d98a2a0d19c5e55d18838ce2cdeec4"
  },
  {
    "url": "assets/js/68.ac829fd3.js",
    "revision": "dc2b0f752029201dd86fb32f68c6a2a1"
  },
  {
    "url": "assets/js/69.587a0d39.js",
    "revision": "6d0f7cd75305374c5413b526eeefa0ed"
  },
  {
    "url": "assets/js/7.f87b0991.js",
    "revision": "ff0189ace83b2c2cf1931ece05156961"
  },
  {
    "url": "assets/js/70.17292dd8.js",
    "revision": "746970e2299592a3bd990e4747ce04aa"
  },
  {
    "url": "assets/js/71.76e83172.js",
    "revision": "2f8f4640c24df23008d87c7213ead458"
  },
  {
    "url": "assets/js/72.581c1da2.js",
    "revision": "8e70bcd44046f651506d6272653073e6"
  },
  {
    "url": "assets/js/73.854cd7a2.js",
    "revision": "be05dd6ac8e88d71a67d35bbf783aaa4"
  },
  {
    "url": "assets/js/74.f2c6daf2.js",
    "revision": "b65f8e2b05a964cc2ec9d7a269527d11"
  },
  {
    "url": "assets/js/75.b23255bc.js",
    "revision": "71ca71c93edf951c6b1747e4ddcb705c"
  },
  {
    "url": "assets/js/76.e86a0924.js",
    "revision": "47ffcb141dbc5753cec1f60b9c63e483"
  },
  {
    "url": "assets/js/77.621bd0e5.js",
    "revision": "b51cf8877c9b29d58c1a79a7173d4d7b"
  },
  {
    "url": "assets/js/78.ef6e24db.js",
    "revision": "c85e40e020bb3e9b1b36861e5322777a"
  },
  {
    "url": "assets/js/79.094b1730.js",
    "revision": "bb34dd901ea876f47813089d4ef52a1b"
  },
  {
    "url": "assets/js/8.44e2ec24.js",
    "revision": "1642ec963948d2619ac0ce6cb8036b31"
  },
  {
    "url": "assets/js/80.5a051e5a.js",
    "revision": "4004c10a771a394d7e011bcecfe93d0c"
  },
  {
    "url": "assets/js/81.7d863e9c.js",
    "revision": "df4d4cf233b8a43ce40ab7ebe5a44305"
  },
  {
    "url": "assets/js/82.f438d6f0.js",
    "revision": "029216db3c1b59e82f8205eecaae6ea3"
  },
  {
    "url": "assets/js/83.2a1582dd.js",
    "revision": "d7a8a5fbf7427137d43613c9396ff6c7"
  },
  {
    "url": "assets/js/84.cc3e7643.js",
    "revision": "4618a432e62b265ef7bf50deceb0ad1f"
  },
  {
    "url": "assets/js/85.39d842d7.js",
    "revision": "d71486446c522efc5321c81eb6216808"
  },
  {
    "url": "assets/js/86.b9742a32.js",
    "revision": "338c219f3bfc2998992994c8128538cf"
  },
  {
    "url": "assets/js/87.adee741f.js",
    "revision": "393f6e405769b16e66db2edd1635ca41"
  },
  {
    "url": "assets/js/9.f326f90c.js",
    "revision": "a2aae02cb232f162943a7524e03bbe05"
  },
  {
    "url": "assets/js/app.4cc5af38.js",
    "revision": "bde485079111c848f9a2fec521b384f1"
  },
  {
    "url": "compiler/ast.html",
    "revision": "84df03fc96784a84b09a832cf4a8080a"
  },
  {
    "url": "compiler/binder.html",
    "revision": "950893867c1d0234ba80f209b0ac8032"
  },
  {
    "url": "compiler/checker.html",
    "revision": "c478d2da6f890b8e0e04201b94854559"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "61c427f7c7f61ab7e1eca11bb1a8bc71"
  },
  {
    "url": "compiler/overview.html",
    "revision": "c49c5161e6b1c599bb262c283e93e6ae"
  },
  {
    "url": "compiler/parser.html",
    "revision": "22ae6d37f7299a80a5323dfe2243c5e3"
  },
  {
    "url": "compiler/program.html",
    "revision": "ad7eed2638ad51848eeb9bd6211e7c6b"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "1af709d38c04f1c4e7cfc5ddb533d96c"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "78c6d320002d42f7b6cc614e28e78b86"
  },
  {
    "url": "error/interpreting.html",
    "revision": "c97ffefc4c257dc7ae7e6a200c8cc1e2"
  },
  {
    "url": "faqs/class.html",
    "revision": "66b21e6cebc9d000875bf77f8ade8bea"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "851408c8064975c305f2bfd838795ce5"
  },
  {
    "url": "faqs/comments.html",
    "revision": "c872adb40c0115f300b8da047b8baa51"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "b36a08f5f079c4ae82873d00b0bccb2b"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "7442abfc6a0a2eca8decd16f869ccf2c"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "77686bfa212570d1fa18374c35fa8660"
  },
  {
    "url": "faqs/enums.html",
    "revision": "21d8f374fec2e525ac8668797597ee4f"
  },
  {
    "url": "faqs/function.html",
    "revision": "e65e41d3c7b1ca8eb7daaff8ec3ebdac"
  },
  {
    "url": "faqs/generics.html",
    "revision": "8abc08b4c46926751a717d3574ac0aca"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "3f9ec3e9dc1820917234d954a9091897"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "151adbf477ad53de40780ba14f03ff7f"
  },
  {
    "url": "faqs/modules.html",
    "revision": "8b224f1ae60966a6a3d4940bd35f1ea9"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "6615e608c160d5247c54c448b4d6156a"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "fdf4ab3176c1b04194069bc2b1f9fdd8"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "594a31076e5635e9a4f34aea77c13edf"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "1bece00d823b9c5acf183e85ab05c7b7"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "a069b569e564c7ced0975910e5e8b9e2"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "41c68e655da67759a1d7cbec7c998f08"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "d667a3cc824096bf8e41eb1f83647332"
  },
  {
    "url": "jsx/support.html",
    "revision": "a48f5ce623fc14efc3e224ec5f3feafd"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "43ef457dde194336ef358690b9ff1f33"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "81e73579262bc7f26066713d0d02fa45"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "099066030112201658a0eb0a3a48422b"
  },
  {
    "url": "project/modules.html",
    "revision": "6504d1a22ee329bba36c742681b15a2f"
  },
  {
    "url": "project/namespaces.html",
    "revision": "5b8db52aebf14da6c20422452fee5d07"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "eb10b983665b467a0f5bb9e72d0835ea"
  },
  {
    "url": "tips/barrel.html",
    "revision": "df21fc1581e397061a24718636b0f4fe"
  },
  {
    "url": "tips/bind.html",
    "revision": "59c66f449db265ed1e7970b1221bb358"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "448ca5fe043c13362982bc0bbe2bb63f"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "d5a91320d8316c5ee45a4de7da48d5e5"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "c7a33194c0f5ac11e35465cab5adde1a"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "566c7ba944cd58169359fa283be856bc"
  },
  {
    "url": "tips/curry.html",
    "revision": "92c1f87420ed635b69910364d823224a"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "9c8adbaadeafb95a2c3b96e6cdf8c912"
  },
  {
    "url": "tips/infer.html",
    "revision": "9878bd70fb82c5c44fee57966a584ff8"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "1c1d7b79f50b953a1635f442d57b6c81"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "bd0b4a1abe32afc7ecc37e8072bbf16d"
  },
  {
    "url": "tips/metadata.html",
    "revision": "3ec9e724e29d35152a3d95d49290e896"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "7aaef53b2b5a934da3f03b8e27e89ab0"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "ff540c85612c74fa1adb953dfbe5ab08"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "e55fa6c72efb253f9990a1fc426af56d"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "23440c6de17f82d48c36447dc40663a6"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "e32b40c7b5c87df472178335e4c99210"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "833ebb2686054ee26026e7d1f4e89f63"
  },
  {
    "url": "tips/truthy.html",
    "revision": "9e1be53100e9c643e10f54a4ed3341f7"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "e21d5ff456742617749d9c9bfe327613"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "ea445f9ab7b6152f040ecdfa9ce7215b"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "0bd58aa7e22738bb0fd1429d6265b579"
  },
  {
    "url": "typings/callable.html",
    "revision": "455ad7ac227e7ef2d9fd14d644dac00f"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "2446056ce270b54d1d10a1b8651e146b"
  },
  {
    "url": "typings/enums.html",
    "revision": "c2e62ac8828f402f2d8cc20caba23356"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "c85dd1af22017b4bee873986d3e5cb30"
  },
  {
    "url": "typings/freshness.html",
    "revision": "5dbf206b45155d508efad1d8f578110a"
  },
  {
    "url": "typings/functions.html",
    "revision": "609de6c3e4c2902c5926b35d8ff3a2e6"
  },
  {
    "url": "typings/generices.html",
    "revision": "082deae8a240368c68fac1f5ce1c7279"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "f620a3180e3b299c0b41523340152450"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "a89ad852df9c921707e16381bb2665d8"
  },
  {
    "url": "typings/lib.html",
    "revision": "90c130e2340f7548175e27dea1adbbc0"
  },
  {
    "url": "typings/literals.html",
    "revision": "cc34828965e0f24306a9e7b2faac059b"
  },
  {
    "url": "typings/migrating.html",
    "revision": "52af3845a25a791d961c769b26190019"
  },
  {
    "url": "typings/mixins.html",
    "revision": "517bd03c9656e2b8a6a2d7081ec7c9d7"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "901ea19ea85e7c0e61a532a30b8cf9b8"
  },
  {
    "url": "typings/neverType.html",
    "revision": "67913455bb72fc6a56b54a57755628d9"
  },
  {
    "url": "typings/overview.html",
    "revision": "31b10483e6bff5b007ac954913410635"
  },
  {
    "url": "typings/readonly.html",
    "revision": "7eb4ebb5ea6f33534630d5f83b07713b"
  },
  {
    "url": "typings/thisType.html",
    "revision": "1f6091f1d04056fc02bc6932312a4146"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "6f5e08aa316d596584405b2a8c1081ad"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "66ca08983d80881e0d647e762afd1636"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "fe0b1141144ba8d90afce91b9df47978"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "fed71d2f1bf3c710c7c1026e65dfb5a1"
  },
  {
    "url": "typings/types.html",
    "revision": "063e30fdb70d0bb5b38d2a6a91663a1e"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
