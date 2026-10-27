(() => {
  const body = document.body;
  const languageToggle = document.getElementById("languageToggle");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const form = document.getElementById("enquiryForm");
  const formStatus = document.getElementById("formStatus");
  let currentLanguage = "en";

  function setLanguage(language) {
    currentLanguage = language;
    body.classList.toggle("lang-bn", language === "bn");
    document.documentElement.lang = language === "bn" ? "bn" : "en";
    document.querySelectorAll("[data-en][data-bn]").forEach((el) => {
      el.textContent = el.dataset[language === "bn" ? "bn" : "en"];
    });
    document.querySelectorAll("[data-placeholder-en][data-placeholder-bn]").forEach((el) => {
      el.placeholder = el.dataset[language === "bn" ? "placeholderBn" : "placeholderEn"];
    });
    languageToggle.textContent = language === "en" ? "বাংলা" : "English";
    languageToggle.setAttribute("aria-label", language === "en" ? "Switch to Bengali" : "Switch to English");
    if (formStatus) formStatus.textContent = "";
  }

  languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "bn" : "en"));
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.textContent = open ? "×" : "☰";
  });
  navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const select = document.getElementById("interest");
    const interest = select.options[select.selectedIndex].text;
    const message = document.getElementById("message").value.trim();
    if (!name || !select.value || !message) {
      formStatus.textContent = currentLanguage === "bn" ? "অনুগ্রহ করে প্রয়োজনীয় তথ্য পূরণ করুন।" : "Please complete all required fields.";
      return;
    }
    const heading = currentLanguage === "bn" ? "SIICVPRP ওয়েবসাইট থেকে জিজ্ঞাসা:" : "Enquiry from the SIICVPRP website:";
    const bodyText = [heading, `Name / নাম: ${name}`, `Phone / ফোন: ${phone || "Not provided / উল্লেখ করা হয়নি"}`, `Interest / আগ্রহ: ${interest}`, `Message / বার্তা: ${message}`].join("\n");
    formStatus.textContent = currentLanguage === "bn" ? "WhatsApp খুলছে। বার্তাটি দেখে নিজে পাঠিয়ে দিন।" : "Opening WhatsApp. Review the prepared message and send it when ready.";
    window.open("https://wa.me/918961426974?text=" + encodeURIComponent(bodyText), "_blank", "noopener,noreferrer");
  });
  document.getElementById("year").textContent = new Date().getFullYear();
  setLanguage("en");
})();