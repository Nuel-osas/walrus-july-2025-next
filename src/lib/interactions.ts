/** Accessible controls for the recovered July markup, independent of Webflow. */
export function initializeInteractions(namespace: string) {
  const controller = new AbortController();
  const { signal } = controller;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nav = document.querySelector<HTMLElement>(".navigation");
  nav?.setAttribute(
    "theme",
    ["token", "get-started"].includes(namespace) ? "dark" : "light",
  );
  document
    .querySelectorAll<HTMLAnchorElement>(".navigation a")
    .forEach((link) => {
      const active =
        new URL(link.href).pathname === location.pathname &&
        link.origin === location.origin;
      link.classList.toggle("w--current", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  const menu = document.querySelector<HTMLElement>(".navbar-menu");
  const menuButton = document.querySelector<HTMLButtonElement>(".menu-button");
  const dropdowns = Array.from(
    document.querySelectorAll<HTMLElement>(".w-dropdown"),
  );
  const toggleDropdown = (dropdown: HTMLElement, open: boolean) => {
    dropdown
      .querySelector(".w-dropdown-toggle")
      ?.classList.toggle("w--open", open);
    dropdown
      .querySelector(".w-dropdown-toggle")
      ?.setAttribute("aria-expanded", String(open));
    dropdown
      .querySelector(".w-dropdown-list")
      ?.classList.toggle("w--open", open);
  };
  const closeDropdowns = () =>
    dropdowns.forEach((dropdown) => toggleDropdown(dropdown, false));
  const toggleMenu = (open: boolean) => {
    menuButton?.classList.toggle("w--open", open);
    menuButton?.setAttribute("aria-expanded", String(open));
    menuButton?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu?.toggleAttribute("data-nav-menu-open", open);
    document.body.classList.toggle("menu-is-open", open);
    if (!open) closeDropdowns();
  };
  menuButton?.addEventListener(
    "click",
    () => toggleMenu(menuButton.getAttribute("aria-expanded") !== "true"),
    { signal },
  );
  dropdowns.forEach((dropdown) => {
    const button =
      dropdown.querySelector<HTMLButtonElement>(".w-dropdown-toggle")!;
    button.addEventListener(
      "click",
      () => {
        const open = button.getAttribute("aria-expanded") !== "true";
        closeDropdowns();
        toggleDropdown(dropdown, open);
      },
      { signal },
    );
    dropdown.addEventListener(
      "mouseenter",
      () => {
        if (matchMedia("(hover: hover) and (min-width: 992px)").matches) {
          closeDropdowns();
          toggleDropdown(dropdown, true);
        }
      },
      { signal },
    );
    dropdown.addEventListener(
      "mouseleave",
      () => {
        if (matchMedia("(hover: hover) and (min-width: 992px)").matches)
          toggleDropdown(dropdown, false);
      },
      { signal },
    );
    dropdown.addEventListener(
      "focusout",
      (event) => {
        if (!dropdown.contains(event.relatedTarget as Node))
          toggleDropdown(dropdown, false);
      },
      { signal },
    );
    button.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          toggleDropdown(dropdown, true);
          dropdown
            .querySelector<HTMLAnchorElement>(".w-dropdown-list a")
            ?.focus();
        }
      },
      { signal },
    );
  });
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") {
        const active = dropdowns.find((dropdown) =>
          dropdown.contains(document.activeElement),
        );
        closeDropdowns();
        if (active) active.querySelector<HTMLButtonElement>("button")?.focus();
        else {
          toggleMenu(false);
          menuButton?.focus();
        }
      }
    },
    { signal },
  );
  document.addEventListener(
    "click",
    (event) => {
      if (!nav?.contains(event.target as Node)) toggleMenu(false);
    },
    { signal },
  );
  window.addEventListener(
    "resize",
    () => {
      if (innerWidth >= 992) toggleMenu(false);
    },
    { signal },
  );

  const faqs = Array.from(document.querySelectorAll<HTMLElement>(".faq-item"));
  function setFAQ(item: HTMLElement, open: boolean) {
    item.dataset.state = open ? "open" : "closed";
    item.querySelector("button")?.setAttribute("aria-expanded", String(open));
    const answer = item.querySelector<HTMLElement>(".faq-answer")!;
    answer.style.height = open ? "auto" : "0px";
    answer.toggleAttribute("inert", !open);
    answer.setAttribute("aria-hidden", String(!open));
    window.dispatchEvent(new Event("resize"));
  }
  faqs.forEach((item) => {
    setFAQ(item, item.dataset.state === "open");
    item.querySelector("button")?.addEventListener(
      "click",
      () => {
        const open = item.dataset.state !== "open";
        faqs.forEach((other) => setFAQ(other, other === item && open));
      },
      { signal },
    );
  });

  const filters = document.querySelector<HTMLElement>(
    '[fs-cmsfilter-element="filters"]',
  );
  const list = document.querySelector<HTMLElement>(
    '[fs-cmsfilter-element="list"]',
  );
  if (filters && list) {
    const buttons = Array.from(
      filters.querySelectorAll<HTMLButtonElement>("[data-filter]"),
    );
    const cards = Array.from(list.children) as HTMLElement[];
    buttons.forEach((button) =>
      button.addEventListener(
        "click",
        () => {
          const value = button.dataset.filter || "all";
          buttons.forEach((other) => {
            other.classList.toggle("fs-cmsfilter_active", other === button);
            other.setAttribute("aria-pressed", String(other === button));
          });
          let count = 0;
          cards.forEach((card) => {
            const categories = Array.from(
              card.querySelectorAll("[fs-cmsfilter-field]"),
            ).map((el) => el.textContent?.trim().toLowerCase());
            card.hidden = value !== "all" && !categories.includes(value);
            if (!card.hidden) count++;
          });
          const empty = document.querySelector<HTMLElement>(".archive-empty");
          if (empty) empty.hidden = count !== 0;
          window.dispatchEvent(new Event("resize"));
        },
        { signal },
      ),
    );
    filters.addEventListener("submit", (event) => event.preventDefault(), {
      signal,
    });
  }
  document.querySelector<HTMLFormElement>(".newsletter-form")?.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();
      const status = document.querySelector<HTMLElement>(
        ".archive-form-status",
      );
      if (status)
        status.textContent =
          "This is the July 2025 archive. No subscription was submitted and your email has not been sent.";
    },
    { signal },
  );

  const cursor = document.querySelector<HTMLElement>(".cursor");
  if (cursor && matchMedia("(hover: hover)").matches) {
    window.addEventListener(
      "pointermove",
      (event) => {
        const target = (event.target as Element).closest<HTMLElement>(
          "[data-cursor]",
        );
        const text = cursor.querySelector("p");
        if (target && text)
          text.textContent = target.dataset.cursor || "Learn more";
        cursor.style.left =
          Math.min(event.clientX + 12, innerWidth - cursor.offsetWidth - 16) +
          "px";
        cursor.style.top =
          Math.min(event.clientY + 24, innerHeight - cursor.offsetHeight - 16) +
          "px";
      },
      { signal },
    );
  }

  // The original pinned layouts require animation. Keep every panel readable without it.
  if (reduced) {
    document.documentElement.classList.add("reduced-motion");
    document.querySelectorAll(".wal-circle_link-color").forEach((link, index) =>
      link.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          document
            .querySelectorAll("[data-chart-detail]")
            [index]?.scrollIntoView({ block: "center" });
        },
        { signal },
      ),
    );
  }
  return () => {
    controller.abort();
    document.body.classList.remove("menu-is-open");
    document.documentElement.classList.remove("reduced-motion");
  };
}
