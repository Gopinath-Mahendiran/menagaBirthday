/* Floating stickers for the birthday journal.
   Add this line just before </body> in your HTML (same folder):
   <script src="stickers.js"></script>                                  */

/* ===== EDIT THIS PART ===== */
var STICKER_CONFIG = {
  // Order they appear down the page. Delete any name to remove it, or reorder.
  // Built-in: spiderman, snitch, rocket, saturn, astronaut, moon, ufo, comet
  // Your own: custom1, custom2, custom3, custom4
  show: ["spiderman","rocket","snitch","custom1","saturn","astronaut","custom2","ufo","moon","custom3","comet","custom4"],

  // Replace img with the path to your own sticker (a PNG with a transparent background looks best).
  // Example: img:"stickers/my-cat.png". Leave img empty to keep the dashed placeholder.
  custom: {
    custom1: { img: "spider-man-3.png", label: "Spider-Man" },
    custom2: { img: "", label: "your sticker" },
    custom3: { img: "", label: "your sticker" },
    custom4: { img: "", label: "your sticker" }
  }
};
/* ========================== */

(function () {
  var page = document.getElementById("page-main");
  if (!page) return;
  var K = 'stroke="#6b4a5c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';

  var ART = {
    spiderman: '<svg viewBox="0 0 80 90"><path d="M40 4C16 4 6 24 8 46c2 22 14 38 32 38s30-16 32-38C74 24 64 4 40 4z" fill="#e23a4a" ' + K + '/><path d="M40 6v76M40 28q-20 0-32 6M40 28q20 0 32 6M40 50q-18 2-30 14M40 50q18 2 30 14M40 40q-14 0-26 4M40 40q14 0 26 4" fill="none" stroke="#22223b" stroke-width="2" opacity=".7"/><path d="M12 40q8-10 24 0-6 14-18 12-6-2-6-12zM68 40q-8-10-24 0 6 14 18 12 6-2 6-12z" fill="#fff" ' + K + '/></svg>',
    snitch: '<svg viewBox="0 0 100 60"><g class="wl"><path d="M40 30Q22 4 2 10q4 14 14 18-8 2-12 8 20 4 36-6z" fill="#fff" ' + K + '/></g><g class="wr"><path d="M60 30Q78 4 98 10q-4 14-14 18 8 2 12 8-20 4-36-6z" fill="#fff" ' + K + '/></g><circle cx="50" cy="32" r="14" fill="#ffd35c" ' + K + '/><path d="M43 28q4-4 8-3" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>',
    rocket: '<svg viewBox="0 0 60 100"><path class="fl" d="M24 70q6 22 6 26 0-4 6-26z" fill="#ffb347" ' + K + '/><path d="M30 4C14 22 14 52 20 68h20c6-16 6-46-10-64z" fill="#fff" ' + K + '/><path d="M30 4C22 12 18 22 17 30h26c-1-8-5-18-13-26z" fill="#ff6b6b" ' + K + '/><circle cx="30" cy="44" r="8" fill="#bfe3ff" ' + K + '/><path d="M20 56L6 74l14-4zM40 56l14 18-14-4z" fill="#ff6b6b" ' + K + '/></svg>',
    saturn: '<svg viewBox="0 0 100 70"><g transform="rotate(-18 50 35)"><ellipse cx="50" cy="35" rx="46" ry="12" fill="none" stroke="#6b4a5c" stroke-width="10"/><ellipse cx="50" cy="35" rx="46" ry="12" fill="none" stroke="#ffe9a8" stroke-width="5"/><circle cx="50" cy="35" r="22" fill="#ff9fb8" ' + K + '/><path d="M4 35a46 12 0 0 0 92 0" fill="none" stroke="#6b4a5c" stroke-width="10"/><path d="M4 35a46 12 0 0 0 92 0" fill="none" stroke="#ffe9a8" stroke-width="5"/></g></svg>',
    astronaut: '<svg viewBox="0 0 80 100"><rect x="12" y="58" width="14" height="26" rx="7" fill="#fff" ' + K + '/><rect x="54" y="58" width="14" height="26" rx="7" fill="#fff" ' + K + '/><rect x="18" y="52" width="44" height="40" rx="14" fill="#fff" ' + K + '/><circle cx="40" cy="34" r="26" fill="#fff" ' + K + '/><rect x="20" y="22" width="40" height="26" rx="13" fill="#3b4a8f" ' + K + '/><circle cx="32" cy="34" r="2.5" fill="#fff"/><circle cx="48" cy="34" r="2.5" fill="#fff"/><path d="M35 40q5 4 10 0" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><circle cx="40" cy="70" r="6" fill="#ff8fb1" ' + K + '/></svg>',
    moon: '<svg viewBox="0 0 70 70"><path d="M46 6A30 30 0 1 0 64 50 24 24 0 0 1 46 6z" fill="#ffe9a8" ' + K + '/><circle cx="26" cy="34" r="4" fill="#f3d27a"/><circle cx="34" cy="50" r="3" fill="#f3d27a"/><circle cx="22" cy="48" r="2" fill="#f3d27a"/></svg>',
    ufo: '<svg viewBox="0 0 100 70"><path d="M50 38L30 68h40z" fill="#fff" opacity=".45"/><path d="M32 28a18 18 0 0 1 36 0z" fill="#bfe3ff" ' + K + '/><ellipse cx="50" cy="32" rx="44" ry="12" fill="#d3c1f7" ' + K + '/><circle cx="24" cy="34" r="3" fill="#ffd35c"/><circle cx="50" cy="38" r="3" fill="#ffd35c"/><circle cx="76" cy="34" r="3" fill="#ffd35c"/></svg>',
    comet: '<svg viewBox="0 0 100 50"><path d="M4 42Q40 32 74 20l-4 14Q40 42 4 42z" fill="#bfe3ff" opacity=".85"/><path d="M80 8l4 9 10 1-8 7 3 10-9-5-9 5 3-10-8-7 10-1z" fill="#ffd35c" ' + K + '/></svg>'
  };
  var SIZE = { spiderman: 1, snitch: .95, rocket: 1.1, saturn: 1.05, astronaut: 1.1, moon: .9, ufo: 1, comet: 1.05 };
  var MOVE = { snitch: "sn" };

  var css = document.createElement("style");
  css.textContent =
    "#page-main .hero,#page-main .wrap{position:relative;z-index:2}" +
    "#stl{position:absolute;left:0;top:0;width:100%;height:0;overflow:hidden;pointer-events:none;z-index:1}" +
    ".sw{position:absolute;pointer-events:none}" +
    ".si{width:100%;height:100%;translate:var(--px,0px) var(--py,0px);animation:sf var(--d,6s) ease-in-out infinite;filter:drop-shadow(2px 0 0 #fff) drop-shadow(-2px 0 0 #fff) drop-shadow(0 2px 0 #fff) drop-shadow(0 -2px 0 #fff) drop-shadow(3px 5px 0 rgba(107,74,92,.22))}" +
    ".si svg,.si img{width:100%;height:100%;display:block;object-fit:contain}" +
    ".si.sn{animation:sn 7s ease-in-out infinite}" +
    "@keyframes sf{0%,100%{transform:translateY(0) rotate(var(--r,0deg))}50%{transform:translateY(-14px) rotate(calc(var(--r,0deg) + 6deg))}}" +
    "@keyframes sn{0%,100%{transform:translate(0,0) rotate(-8deg)}25%{transform:translate(46px,-20px) rotate(10deg)}50%{transform:translate(10px,-46px) rotate(-6deg)}75%{transform:translate(-32px,-14px) rotate(12deg)}}" +
    ".wl{transform-origin:40px 30px;animation:wa .18s ease-in-out infinite alternate}" +
    ".wr{transform-origin:60px 30px;animation:wb .18s ease-in-out infinite alternate}" +
    "@keyframes wa{to{transform:rotate(-24deg)}}@keyframes wb{to{transform:rotate(24deg)}}" +
    ".fl{transform-origin:30px 70px;animation:ff .22s ease-in-out infinite alternate}" +
    "@keyframes ff{to{transform:scaleY(1.25)}}" +
    ".ph-st{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;border:3px dashed #6b4a5c;border-radius:22px;background:rgba(255,255,255,.7);color:#6b4a5c;font-family:Gaegu,cursive;font-weight:700;text-align:center;line-height:1}" +
    ".ph-st b{font-size:34px}.ph-st small{font-size:13px}" +
    "@media (prefers-reduced-motion:reduce){.si,.wl,.wr,.fl{animation:none!important}}";
  document.head.appendChild(css);

  var layer = document.createElement("div");
  layer.id = "stl";
  layer.setAttribute("aria-hidden", "true");
  page.appendChild(layer);

  var items = [];
  STICKER_CONFIG.show.forEach(function (name, i) {
    var inner;
    var c = STICKER_CONFIG.custom[name];
    if (c) {
      inner = c.img
        ? '<img src="' + c.img + '" alt="">'
        : '<div class="ph-st"><b>＋</b><small>' + (c.label || "your sticker") + '</small></div>';
    } else if (ART[name]) {
      inner = ART[name];
    } else {
      return;
    }
    var w = document.createElement("div");
    w.className = "sw";
    var s = document.createElement("div");
    s.className = "si" + (MOVE[name] ? " " + MOVE[name] : "");
    s.style.setProperty("--d", (5 + (i % 4) * 1.2).toFixed(1) + "s");
    s.style.setProperty("--r", ((i % 2 ? 1 : -1) * (4 + (i % 3) * 3)) + "deg");
    s.innerHTML = inner;
    w.appendChild(s);
    layer.appendChild(w);
    items.push({ w: w, s: s, size: c ? 1.1 : (SIZE[name] || 1), speed: (i % 2 ? -1 : 1) * (0.06 + (i % 3) * 0.03), phase: i * 1.7 });
  });

  function layout() {
    layer.style.height = "0px";
    var H = page.scrollHeight;
    if (H < 500) return;
    layer.style.height = H + "px";
    var narrow = innerWidth < 700, base = narrow ? 62 : 96;
    var y0 = innerHeight * 0.95, y1 = H - 260, n = items.length;
    items.forEach(function (it, i) {
      var sz = base * it.size, left = i % 2 === 0;
      var inset = narrow ? -sz * 0.28 : (1.5 + (i % 3) * 1.6) + "%";
      it.w.style.width = sz + "px";
      it.w.style.height = sz + "px";
      it.w.style.top = (y0 + (y1 - y0) * (n > 1 ? i / (n - 1) : 0)) + "px";
      it.w.style.left = left ? (narrow ? inset + "px" : inset) : "auto";
      it.w.style.right = left ? "auto" : (narrow ? inset + "px" : inset);
    });
    move();
  }

  function move() {
    var h = innerHeight, st = page.scrollTop;
    items.forEach(function (it) {
      var r = it.w.getBoundingClientRect();
      it.s.style.setProperty("--py", (-(r.top + r.height / 2 - h / 2) * it.speed).toFixed(1) + "px");
      it.s.style.setProperty("--px", (Math.sin(st / 180 + it.phase) * 12).toFixed(1) + "px");
    });
  }

  page.addEventListener("scroll", function () { requestAnimationFrame(move); }, { passive: true });
  addEventListener("resize", layout);
  addEventListener("hashchange", function () { setTimeout(layout, 120); });
  addEventListener("load", layout);
  if (window.ResizeObserver) {
    var ro = new ResizeObserver(layout);
    [".hero", ".wrap"].forEach(function (q) { var e = page.querySelector(q); if (e) ro.observe(e); });
  }
  layout();
})();
