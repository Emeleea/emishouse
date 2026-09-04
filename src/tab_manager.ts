function updateRegion(): void {
  document.querySelectorAll<HTMLElement>(".content-region").forEach(
    (element) => {
      element.setAttribute("hidden", "");
    },
  );

  document.querySelectorAll<HTMLElement>(".main-menu a").forEach((link) => {
    link.classList.remove("active");
  });

  const firstLink = document.querySelector(".main-menu a:first-child");
  const region = location.hash || firstLink?.getAttribute("href");

  if (!region) return;

  document.querySelector<HTMLElement>(region)?.removeAttribute("hidden");

  document
    .querySelector(`.main-menu a[href="${CSS.escape(region)}"]`)
    ?.classList.add("active");
}

self.addEventListener("load", updateRegion);
self.addEventListener("hashchange", updateRegion);
