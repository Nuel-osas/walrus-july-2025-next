import { gsap as engine } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";
import Lenis from "lenis";
import lottie from "lottie-web";

export function initializeAnimations(namespace) {
  engine.registerPlugin(ScrollTrigger, SplitText, CustomEase);
  CustomEase.create("walrus-wave", "0.51, 0, 0.08, 1");
  const controller = new AbortController();
  const disposals = [],
    frames = new Set(),
    timeouts = new Set(),
    intervals = new Set();
  let disposed = false;
  const context = engine.context(() => {});
  const gsap = new Proxy(engine, {
    get(target, key) {
      const original = target[key];
      if (
        ["to", "from", "fromTo", "set", "timeline", "delayedCall"].includes(key)
      )
        return (...args) => {
          let result;
          context.add(() => {
            result = original.apply(target, args);
          });
          return result;
        };
      return typeof original === "function" ? original.bind(target) : original;
    },
  });
  const requestAnimationFrame = (callback) => {
    if (disposed) return 0;
    const id = window.requestAnimationFrame((time) => {
      frames.delete(id);
      if (!disposed) callback(time);
    });
    frames.add(id);
    return id;
  };
  const setTimeout = (callback, delay) => {
    const id = window.setTimeout(() => {
      timeouts.delete(id);
      if (!disposed) callback();
    }, delay);
    timeouts.add(id);
    return id;
  };
  const clearTimeout = (id) => {
    timeouts.delete(id);
    window.clearTimeout(id);
  };
  const setInterval = (callback, delay) => {
    const id = window.setInterval(() => {
      if (!disposed) callback();
    }, delay);
    intervals.add(id);
    return id;
  };
  const existingTriggers = new Set(ScrollTrigger.getAll());
  let isMobile = innerWidth < 480,
    isMobileLandscape = innerWidth < 768,
    isTablet = innerWidth < 992,
    previousWindowWidth = innerWidth,
    resizeTimer;
  const prefersRM = prefersReducedMotion();
  let lenis;
  function initTextEffects() {
    if (prefersRM) return;
    cleanup();
    initSplit();
    initHeadingReveals();
  }
  function handleResize() {
    window.innerWidth !== previousWindowWidth &&
      (clearTimeout(resizeTimer),
      (resizeTimer = setTimeout(function () {
        ((isMobile = window.innerWidth < 480),
          (isMobileLandscape = window.innerWidth < 768),
          (isTablet = window.innerWidth < 992),
          (previousWindowWidth = window.innerWidth),
          initTextEffects());
      }, 250)));
  }
  function debounce(e, t) {
    let r;
    return function (...a) {
      (clearTimeout(r), (r = setTimeout(() => e.apply(this, a), t)));
    };
  }
  function supportsTouch() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }
  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function cleanup() {
    (document.querySelectorAll("[data-heading-reveal]").forEach((e) => {
      e.splitInstance && (e.splitInstance.revert(), delete e.splitInstance);
    }),
      ScrollTrigger.getAll().forEach((e) => {
        e.vars &&
          e.vars.trigger &&
          e.vars.trigger.closest("[data-heading-reveal]") &&
          e.kill();
      }));
  }
  function initSplit() {
    document.querySelectorAll("[data-heading-reveal]").forEach((e) => {
      let t = new SplitText(e, {
        type: "lines, words, chars",
        linesClass: "text-line",
        wordsClass: "single-word",
        charsClass: "single-letter",
      });
      ((e.splitInstance = t),
        e.setAttribute("aria-label", e.textContent),
        t.lines.forEach((e) => {
          e.setAttribute("aria-hidden", "true");
        }),
        t.chars.forEach((e) => {
          let t = document.createElement("div");
          (t.classList.add("single-letter-wrap"),
            e.parentNode.insertBefore(t, e),
            t.appendChild(e));
        }));
    });
  }
  function ensureAriaLabels() {
    document.querySelectorAll("[data-heading-reveal]").forEach((e) => {
      e.setAttribute("aria-label", e.textContent.trim());
    });
  }
  function initHeadingReveals() {
    document.querySelectorAll("[data-heading-reveal]").forEach((e) => {
      const t = e.querySelectorAll(".single-letter");
      gsap
        .timeline({ scrollTrigger: { trigger: e, start: "top 90%", once: !0 } })
        .fromTo(
          t,
          { x: "0em" },
          {
            x: "1.4em",
            duration: 0.65,
            stagger: { amount: 0.8, from: "random" },
          },
        );
    });
  }
  function initMarqueeScrollDirection() {
    document
      .querySelectorAll("[data-marquee-scroll-direction-target]")
      .forEach((e) => {
        const t = e.querySelector("[data-marquee-collection-target]"),
          r = e.querySelector("[data-marquee-scroll-target]");
        if (!t || !r) return;
        const {
            marqueeSpeed: a,
            marqueeDirection: o,
            marqueeDuplicate: n,
            marqueeScrollSpeed: i,
          } = e.dataset,
          l = parseFloat(a),
          s = "right" === o ? 1 : -1,
          c = parseInt(n || 0),
          d = parseFloat(i),
          u =
            window.innerWidth < 479 ? 0.25 : window.innerWidth < 991 ? 0.5 : 1;
        let p = l * (t.offsetWidth / window.innerWidth) * u;
        if (c > 0) {
          const e = document.createDocumentFragment();
          for (let r = 0; r < c; r++) {
            const clone = t.cloneNode(true);
            clone.setAttribute("aria-hidden", "true");
            clone
              .querySelectorAll("a,button")
              .forEach((el) => el.setAttribute("tabindex", "-1"));
            e.appendChild(clone);
            disposals.push(() => clone.remove());
          }
          r.appendChild(e);
        }
        const g = e.querySelectorAll("[data-marquee-collection-target]"),
          f = gsap
            .to(g, { xPercent: -100, repeat: -1, duration: p, ease: "linear" })
            .totalProgress(0.5);
        (gsap.set(g, { xPercent: 1 === s ? 100 : -100 }),
          f.timeScale(s),
          f.play(),
          e.setAttribute("data-marquee-status", "normal"),
          requestAnimationFrame(() => {
            ScrollTrigger.create({
              trigger: e,
              start: "top bottom",
              end: "bottom top",
              onUpdate: (t) => {
                const r = 1 === t.direction,
                  a = r ? -s : s;
                (f.timeScale(a),
                  e.setAttribute(
                    "data-marquee-status",
                    r ? "normal" : "inverted",
                  ));
              },
            });
          }));
        const m = gsap.timeline({
            scrollTrigger: {
              trigger: e,
              start: "0% 100%",
              end: "100% 0%",
              scrub: 0,
            },
          }),
          h = -1 === s ? d : -d,
          y = -h;
        m.fromTo(r, { x: `${h}vw` }, { x: `${y}vw`, ease: "none" });
      });
  }
  function initCardReveals(e) {
    let t = e.querySelectorAll("[data-reveal-wrap]");
    prefersRM ||
      (t.forEach((e) => {
        let t = e.querySelectorAll("[data-reveal-item]");
        (gsap.set(t, { autoAlpha: 0 }),
          ScrollTrigger.create({
            trigger: e,
            start: "top 80%",
            once: !0,
            onEnter: () => {
              gsap.fromTo(
                t,
                { yPercent: 35, autoAlpha: 0 },
                { yPercent: 0, autoAlpha: 1, stagger: 0.14 },
              );
            },
          }));
      }),
      ScrollTrigger.refresh());
  }
  function initGrid(e) {
    function t() {
      ((g.width = e.offsetWidth),
        (m = window.innerWidth < 768 ? s : l),
        (y = g.width / m),
        (g.height = e.offsetHeight),
        (h = Math.ceil(g.height / y)));
      const t = g.getBoundingClientRect(),
        r = Array.from(document.querySelectorAll(".home-hero__row")).map(
          (e) => {
            const r = e.getBoundingClientRect();
            return {
              x: r.left - t.left,
              y: r.top - t.top,
              w: r.width,
              h: r.height,
            };
          },
        );
      b = [];
      for (let e = 0; e < h; e++)
        for (let t = 0; t < m; t++) {
          const a = t * y,
            o = e * y;
          r.some(
            (e) => a + y > e.x && a < e.x + e.w && o + y > e.y && o < e.y + e.h,
          ) || b.push({ x: a, y: o, color: "white", alpha: 0 });
        }
    }
    function r() {
      (f.clearRect(0, 0, g.width, g.height),
        b.forEach((e) => {
          ((f.fillStyle = e.color),
            (f.globalAlpha = e.alpha),
            f.fillRect(e.x, e.y, y, y),
            (f.globalAlpha = 1),
            (f.strokeStyle = d),
            (f.lineWidth = c),
            f.strokeRect(e.x, e.y, y, y));
        }),
        !prefersRM && requestAnimationFrame(r));
    }
    function a(e) {
      gsap.to(e, { alpha: 0, duration: 2, delay: 0.5 });
    }
    function o() {
      return "ontouchstart" in window || navigator.maxTouchPoints;
    }
    const n = {
        gridBackground: "#FFFFFF",
        gridSizeDesktop: 20,
        gridSizeMobile: 8,
        gridBorderSize: 1,
        gridBorderColor: "rgba(0, 0, 0, 0.2)",
        gridColors: ["#A56FF1", "#F946AC", "#74FF72", "#97F0E5"],
      },
      i = e.getAttribute("data-grid-background") || n.gridBackground,
      l =
        parseInt(e.getAttribute("data-grid-size-desktop")) || n.gridSizeDesktop,
      s = parseInt(e.getAttribute("data-grid-size-mobile")) || n.gridSizeMobile,
      c =
        parseFloat(e.getAttribute("data-grid-border-size")) || n.gridBorderSize,
      d = e.getAttribute("data-grid-border-color") || n.gridBorderColor;
    let u = n.gridColors;
    const p = e.getAttribute("data-grid-colors");
    if (p)
      try {
        u = JSON.parse(p);
      } catch (e) {
        try {
          u = JSON.parse(p.replace(/'/g, '"'));
        } catch (e) {
          u = n.gridColors;
        }
      }
    e.style.backgroundColor = i;
    const g = document.createElement("canvas");
    e.appendChild(g);
    disposals.push(() => g.remove());
    const f = g.getContext("2d");
    let m,
      h,
      y,
      b,
      w = null;
    if (
      (o() &&
        !prefersRM &&
        setInterval(() => {
          const e = Math.floor(Math.random() * b.length),
            t = b[e],
            r = u[Math.floor(Math.random() * u.length)];
          ((t.color = r),
            gsap.to(t, { alpha: 1, duration: 0.1, overwrite: !0 }),
            a(t));
        }, 150),
      !o())
    ) {
      let e = 0,
        t = null;
      g.addEventListener(
        "mousemove",
        (r) => {
          const o = g.getBoundingClientRect(),
            n = r.clientX - o.left,
            i = r.clientY - o.top,
            l = b.findIndex(
              (e) => n >= e.x && n < e.x + y && i >= e.y && i < e.y + y,
            );
          if (-1 !== l && l !== w) {
            const r = b[l];
            (e % 5 == 0 && (t = u[Math.floor(Math.random() * u.length)]),
              (r.color = t),
              e++,
              gsap.to(r, { alpha: 1, duration: 0.1, overwrite: !0 }),
              a(r),
              (w = l));
          }
        },
        { signal: controller.signal },
      );
    }
    (window.addEventListener("resize", debounce(t, 200), {
      signal: controller.signal,
    }),
      t(),
      r());
  }
  function initFooter(e) {
    function t() {
      (o
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, n)
        .forEach((e) => {
          let t = 1 * Math.random() + 0.5,
            r = 5 * Math.random(),
            a = gsap.fromTo(
              e,
              { backgroundColor: "transparent" },
              {
                backgroundColor: "#97F0E5",
                duration: t,
                delay: r,
                repeat: -1,
                yoyo: !0,
              },
            );
          l.push(a);
        }),
        (i = gsap.delayedCall(5, () => {
          (l.forEach((e) => {
            (e.kill(),
              e.targets().forEach((e) =>
                gsap.to(e, {
                  backgroundColor: "transparent",
                  stagger: { each: 0.05, from: "random" },
                }),
              ));
          }),
            (l = []),
            t());
        })));
    }
    function r() {
      (i && i.kill(),
        l.forEach((e) => {
          (e.kill(),
            e
              .targets()
              .forEach((e) => gsap.set(e, { backgroundColor: "transparent" })));
        }),
        (l = []));
    }
    let a = e.querySelector("[data-footer-blocks]");
    if (!a) return null;
    let o = Array.from(a.querySelectorAll(".footer-block:not(.bg-teal)"));
    const n = Math.max(16, Math.floor(0.15 * o.length));
    let i,
      l = [];
    return {
      cleanup: r,
      trigger: ScrollTrigger.create({
        trigger: a,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => t(),
        onLeave: r,
        onLeaveBack: r,
      }),
    };
  }
  function initCommunityHero(e) {
    let t = e.querySelector(".comm-hero__bg"),
      r = t.querySelectorAll(".comm-square");
    (r.forEach((e) => {
      let t = 0.75 * Math.random() + 0.25,
        r = 3 * Math.random();
      gsap.fromTo(
        e,
        { fill: "transparent", stroke: "none" },
        {
          fill: "#AEFAAD",
          stroke: "#0C0F1D",
          duration: t,
          delay: r,
          repeat: -1,
          yoyo: !0,
          paused: !0,
        },
      );
    }),
      requestAnimationFrame(() => {
        ScrollTrigger.create({
          trigger: t,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => {
            r.forEach((e) => gsap.getTweensOf(e).forEach((e) => e.play()));
          },
          onLeave: () => {
            r.forEach((e) => gsap.getTweensOf(e).forEach((e) => e.pause()));
          },
          onEnterBack: () => {
            r.forEach((e) => gsap.getTweensOf(e).forEach((e) => e.play()));
          },
        });
      }));
  }
  function initCommunityInvolved(e) {
    function t(e, t) {
      const o = gsap.timeline({ defaults: { overwrite: "auto" } });
      (e < t
        ? o.to(
            n[t],
            { clipPath: "inset(0%)", duration: prefersRM ? 0.01 : 0.8 },
            0,
          )
        : o.to(
            n[e],
            { clipPath: "inset(50%)", duration: prefersRM ? 0.01 : 0.8 },
            0,
          ),
        r(i[e]),
        a(i[t]));
    }
    function r(e) {
      const t = e.querySelectorAll("[data-details-animate]");
      gsap.to(t, {
        autoAlpha: 0,
        y: -20,
        onComplete: () => {
          gsap.set(e, { autoAlpha: 0 });
        },
      });
    }
    function a(e) {
      const t = e.querySelectorAll("[data-details-animate]");
      (gsap.set(e, { autoAlpha: 1 }),
        gsap.fromTo(
          t,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, stagger: 0.1 },
        ));
    }
    let o = e.querySelector("[data-involved-wrap]");
    if (!o) return;
    const n = o.querySelectorAll("[data-involved-img]"),
      i = o.querySelectorAll("[data-involved-details]");
    (gsap.set(n, { clipPath: "inset(50%)" }),
      gsap.set(i, { autoAlpha: 0 }),
      gsap.set(n[0], { clipPath: "inset(0%)" }),
      gsap.set(i[0], { autoAlpha: 1 }));
    let l = 0;
    requestAnimationFrame(() => {
      ScrollTrigger.create({
        trigger: o,
        start: "center center",
        end: "+=200%",
        pin: !0,
        onUpdate: (e) => {
          e.progress >= 0.33 && 0 === l
            ? (t(0, 1), (l = 1))
            : e.progress >= 0.66 && 1 === l
              ? (t(1, 2), (l = 2))
              : e.progress < 0.66 && 2 === l
                ? (t(2, 1), (l = 1))
                : e.progress < 0.33 && 1 === l && (t(1, 0), (l = 0));
        },
      });
    });
  }
  function initNewsVideoCTA(e) {
    const t = e.querySelector("[data-video-wrap]"),
      r = t.querySelector("[data-video-clip]"),
      a = t.querySelector("[data-video-cta]");
    gsap
      .timeline({
        scrollTrigger: {
          trigger: t,
          start: "top bottom",
          end: "bottom top",
          scrub: !0,
        },
        defaults: { ease: "linear" },
      })
      .fromTo(
        r,
        { clipPath: "polygon(0% 8%, 97% 0%, 96% 95%, 12% 95%)" },
        { clipPath: "polygon(8% 0%, 94% 5%, 100% 100%, 0% 96%)" },
      )
      .fromTo(t, { yPercent: 0 }, { yPercent: -15 }, 0)
      .to(a, { yPercent: 120 }, "<");
  }
  function initAboutScroller(e) {
    const t = e.querySelector("[data-about-innovate]");
    if (t) {
      const e = t.querySelector("[data-about-img]"),
        r = t.querySelectorAll("[data-about-detail]");
      (isMobileLandscape ||
        ScrollTrigger.create({ trigger: e, start: "center center", pin: e }),
        gsap.set(r, { opacity: 0.4 }),
        gsap.set(r[0], { opacity: 1, overwrite: !0 }),
        r.forEach((e) => {
          const t = e.querySelector(".about-innov_number");
          ScrollTrigger.create({
            trigger: e,
            start: "top 65%",
            end: "top 35%",
            onEnter: () => {
              (gsap.to(e, { opacity: 1 }), t.classList.add("green"));
            },
            onEnterBack: () => {
              (gsap.to(e, { opacity: 1 }), t.classList.add("green"));
            },
            onLeave: () => {
              (gsap.to(e, { opacity: 0.4 }), t.classList.remove("green"));
            },
            onLeaveBack: () => {
              (gsap.to(e, { opacity: 0.4 }), t.classList.remove("green"));
            },
          });
        }));
    }
  }
  function initRFPScroller(e) {
    const t = e.querySelector("[data-rfp-process]");
    if (t) {
      const e = t.querySelector("[data-rfp-sticky]"),
        r = t.querySelectorAll("[data-rfp-detail]");
      (isMobileLandscape ||
        ScrollTrigger.create({
          trigger: e,
          start: "top 15%",
          endTrigger: r[r.length - 1],
          end: "top 35%-=96",
          pin: e,
          pinSpacing: !1,
        }),
        gsap.set(r, { opacity: 0.4 }),
        gsap.set(r[0], { opacity: 1, overwrite: !0 }),
        r.forEach((e) => {
          const t = e.querySelector(".about-innov_number");
          ScrollTrigger.create({
            trigger: e,
            start: "top 65%",
            end: "top 35%",
            onEnter: () => {
              (gsap.to(e, { opacity: 1 }), t.classList.add("green"));
            },
            onEnterBack: () => {
              (gsap.to(e, { opacity: 1 }), t.classList.add("green"));
            },
            onLeave: () => {
              (gsap.to(e, { opacity: 0.4 }), t.classList.remove("green"));
            },
            onLeaveBack: () => {
              (gsap.to(e, { opacity: 0.4 }), t.classList.remove("green"));
            },
          });
        }));
    }
  }
  function initTokenPieChart(e) {
    function t(e, t) {
      const r = gsap.timeline({ defaults: { overwrite: "auto" } }),
        o = a[e].querySelectorAll("[data-chart-detail-anim]"),
        n = a[t].querySelectorAll("[data-chart-detail-anim]");
      (r
        .to(o, { autoAlpha: 0, y: -20, overwrite: !0 })
        .set(a[t], { autoAlpha: 1 }, "<")
        .fromTo(
          n,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, stagger: 0.06 },
          "<",
        )
        .to(i[t], { scale: 1.25 }, "<")
        .to(i[e], { scale: 1 }, "<"),
        l[e].classList.remove("active"),
        l[t].classList.add("active"),
        s[e].classList.remove("is--active"),
        s[t].classList.add("is--active"),
        ScrollTrigger.refresh());
    }
    if (!e.querySelector(".wal-circle")) return;
    const r = e.querySelector(".wal-circle_grid"),
      a = e.querySelectorAll("[data-chart-detail]"),
      o = e.querySelector(".piechart"),
      n = o.querySelector("svg"),
      i = o.querySelectorAll("path"),
      l = e.querySelectorAll(".wal-circle_link-color"),
      s = e.querySelectorAll(".piechart-text");
    (l.forEach((e, t) => e.classList.toggle("active", 0 === t)),
      s.forEach((e, t) => e.classList.toggle("is--active", 0 === t)),
      gsap.set(n, { overflow: "visible" }),
      a.forEach((e, t) => gsap.set(e, { autoAlpha: 0 === t ? 1 : 0 })),
      gsap.set(i[0], { scale: 1.25, transformOrigin: "20% 45%" }),
      gsap.set(i[1], { scale: 1, transformOrigin: "0% 100%" }),
      gsap.set(i[2], { scale: 1, transformOrigin: "100% 100%" }),
      gsap.set(i[3], { scale: 1, transformOrigin: "100% 50%" }),
      gsap.set(i[4], { scale: 1, transformOrigin: "100% 0%" }));
    let c = 0;
    const d = ScrollTrigger.create({
      trigger: r,
      start: isMobileLandscape ? "top top" : "center center",
      end: "+=200%",
      pin: r,
      onUpdate: (e) => {
        let r,
          a = e.progress;
        ((r = a < 0.2 ? 0 : a < 0.4 ? 1 : a < 0.6 ? 2 : a < 0.8 ? 3 : 4),
          r !== c && (t(c, r), (c = r)));
      },
    });
    l.forEach((e, t) => {
      e.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          const r = 0.1 + 0.2 * t,
            a = d.start + (d.end - d.start) * r;
          lenis.scrollTo(a, { force: !0, duration: 0.5 });
        },
        { signal: controller.signal },
      );
    });
  }
  function initNewsHover(e) {
    function t(e, t) {
      const r = a[t].querySelectorAll("[data-blog-visual-anim]"),
        o = a[t].querySelector(".blog-visual__inner-img.behind"),
        n = a[t].querySelector(".blog-visual__inner-img.front"),
        i = a[e].querySelectorAll("[data-blog-visual-anim]"),
        l = a[e].querySelector(".blog-visual__inner-img.behind"),
        s = a[e].querySelector(".blog-visual__inner-img.front");
      gsap
        .timeline()
        .set(a[e], { autoAlpha: 1 })
        .to(r, { autoAlpha: 0, y: -20, overwrite: !0 })
        .to(
          [o, n],
          {
            autoAlpha: 0,
            rotate: 0,
            yPercent: 0,
            duration: 0.3,
            overwrite: !0,
          },
          "<",
        )
        .fromTo(
          i,
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.06 },
          "<",
        )
        .fromTo(
          l,
          { yPercent: 0, rotate: 0, autoAlpha: 0 },
          { yPercent: -30, rotate: 2, autoAlpha: 0.5 },
          "<",
        )
        .fromTo(
          s,
          { yPercent: -10, rotate: 0, autoAlpha: 0 },
          { yPercent: -20, rotate: -10, autoAlpha: 1 },
          "<",
        );
    }
    const r = e.querySelectorAll("[data-blog-visual-link]");
    let a = e.querySelectorAll("[data-blog-visual]"),
      o = 0;
    r.length &&
      (r[0].classList.add("is--active"),
      t(0, 0),
      r.forEach((e, a) => {
        e.addEventListener(
          "mouseenter",
          () => {
            (r.forEach((e) => {
              e.classList.remove("is--active");
            }),
              t(a, o),
              (o = a),
              e.classList.add("is--active"));
          },
          { signal: controller.signal },
        );
      }));
  }
  function initGetStartedHero() {
    if (prefersRM) return;
    let e = gsap.utils.toArray([
      ".started-mini-block",
      ".started-medium-block",
    ]);
    gsap.fromTo(
      e,
      { scale: 0 },
      {
        scale: gsap.utils.random(1, 2),
        duration: gsap.utils.random(0.4, 0.85),
        repeatRefresh: !0,
        stagger: { each: 0.1, from: "random", yoyo: !0, repeat: -1 },
      },
    );
  }

  const container = document.querySelector("main");
  if (!container) return () => {};
  if (!prefersRM) {
    lenis = new Lenis({ lerp: 0.12, anchors: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    engine.ticker.add(tick);
    disposals.push(() => {
      engine.ticker.remove(tick);
      lenis.destroy();
    });
  } else
    lenis = {
      scrollTo: (target) => {
        if (typeof target === "number") window.scrollTo(0, target);
        else target?.scrollIntoView();
      },
    };
  ensureAriaLabels();
  initTextEffects();
  initCardReveals(container);
  container.querySelectorAll("[data-lottie]").forEach((element) => {
    const animation = lottie.loadAnimation({
      container: element,
      renderer: "svg",
      loop: !prefersRM,
      autoplay: !prefersRM,
      path: element.dataset.lottie,
    });
    disposals.push(() => animation.destroy());
  });
  if (!prefersRM) {
    const footer = initFooter(container);
    if (footer) disposals.push(footer.cleanup);
  }
  if (namespace === "home") {
    if (!prefersRM) initMarqueeScrollDirection();
    container.querySelectorAll("[data-grid]").forEach(initGrid);
  }
  if (namespace === "get-started") initGetStartedHero();
  if (namespace === "community" && !prefersRM) {
    initCommunityHero(container);
    initCommunityInvolved(container);
    initMarqueeScrollDirection();
  }
  if (namespace === "about" && !prefersRM) initAboutScroller(container);
  if (namespace === "rfp" && !prefersRM) initRFPScroller(container);
  if (namespace === "token" && !prefersRM) initTokenPieChart(container);
  if (namespace === "news") {
    initNewsHover(container);
    if (!prefersRM) initNewsVideoCTA(container);
  }
  window.addEventListener("resize", handleResize, {
    signal: controller.signal,
  });
  ScrollTrigger.refresh();
  return () => {
    disposed = true;
    controller.abort();
    frames.forEach((id) => window.cancelAnimationFrame(id));
    timeouts.forEach((id) => window.clearTimeout(id));
    intervals.forEach((id) => window.clearInterval(id));
    disposals.reverse().forEach((fn) => fn());
    ScrollTrigger.getAll()
      .filter((t) => !existingTriggers.has(t))
      .forEach((t) => t.kill(true));
    context.revert();
    cleanup();
  };
}
