(() => {
  const contactLinks = document.querySelectorAll("[data-contact]");

  contactLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const contactType = link.dataset.contact;

      if (window.ttq && typeof window.ttq.track === "function") {
        window.ttq.track("ClickButton", {
          content_name: contactType === "whatsapp" ? "WhatsApp" : "Phone call",
        });
      }
    });
  });
})();
