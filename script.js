document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const company = form.company.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const subject = encodeURIComponent(`Advisory inquiry from ${name}`);
      const bodyLines = [
        `Name: ${name}`,
        company ? `Company: ${company}` : null,
        `Email: ${email}`,
        "",
        message,
      ].filter(Boolean);
      const body = encodeURIComponent(bodyLines.join("\n"));
      window.location.href = `mailto:tolgaorhunn@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
