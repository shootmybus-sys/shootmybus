export function scrollToSection(event, targetId, hash) {
  const target =
    document.getElementById(targetId) ||
    (targetId === "service" ? document.getElementById("services") : null);

  if (!target) return;

  if (event) {
    event.preventDefault();
  }

  const headerElement = document.querySelector(".smb-header");
  const headerHeight = headerElement?.offsetHeight ?? 84;
  const targetTop = target.getBoundingClientRect().top + window.scrollY;
  const scrollDestination =
    targetId === "home" ? 0 : Math.max(0, targetTop - headerHeight - 8);

  window.scrollTo({
    top: scrollDestination,
    behavior: "smooth",
  });

  if (hash && window.location.hash !== hash) {
    window.history.replaceState(null, "", hash);
  }
}

