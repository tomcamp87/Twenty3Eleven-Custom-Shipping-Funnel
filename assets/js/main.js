/* Asylum Wellness Collective - interactions
   nav toggle, sticky nav, scroll reveal, count-up, Asylum Method journey */
(function () {
  "use strict";

  /* ---- mobile nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
    document.querySelectorAll(".nav-list a").forEach(function (a) {
      a.addEventListener("click", function () {
        if (!a.parentElement.classList.contains("has-sub")) {
          document.body.classList.remove("nav-open");
        }
      });
    });
  }

  /* ---- sticky nav shadow on scroll ---- */
  var nav = document.querySelector(".navbar");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- scroll reveal ---- */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window && !reduceMotion) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          ro.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { ro.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- count-up for stats ---- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1400, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      el.textContent = (target % 1 === 0 ? Math.round(val) : val.toFixed(1)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window && !reduceMotion) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); co.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { co.observe(c); });
  }

  /* ---- Asylum Method journey ---- */
  var aj = document.getElementById("aj");
  if (aj) {
    var stages = Array.prototype.slice.call(aj.querySelectorAll(".aj-stage"));
    var fill = aj.querySelector(".aj-rail-fill");
    var pulse = aj.querySelector(".aj-pulse");
    var replay = aj.querySelector(".aj-replay");
    var n = stages.length, i = -1, timer = null;

    function setRail(idx) {
      if (!fill || n < 2) return;
      var pct = (idx / (n - 1)) * 100;
      fill.style.width = pct + "%";
      if (pulse) pulse.style.left = pct + "%";
    }
    function activate(idx) {
      stages.forEach(function (s, k) {
        s.classList.toggle("is-active", k === idx);
        s.classList.toggle("is-done", k < idx);
      });
      setRail(idx);
    }
    function next() {
      i++;
      if (i >= n) { clearInterval(timer); timer = null; return; }
      activate(i);
    }
    function play() {
      if (timer) clearInterval(timer);
      i = -1;
      stages.forEach(function (s) { s.classList.remove("is-active", "is-done"); });
      setRail(0);
      if (reduceMotion) { activate(n - 1); return; }
      next();
      timer = setInterval(function () {
        next();
        if (i >= n - 1) {
          clearInterval(timer);
          timer = setTimeout(play, 2600);
        }
      }, 2000);
    }
    if (replay) replay.addEventListener("click", play);
    if ("IntersectionObserver" in window) {
      var jo = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { play(); jo.unobserve(aj); } });
      }, { threshold: 0.35 });
      jo.observe(aj);
    } else { play(); }
  }
})();
