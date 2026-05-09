const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* Contact form: Formspree AJAX submit */
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const sendBtn = document.getElementById("sendBtn");

if (form && status && sendBtn) {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const originalText = sendBtn.textContent;

    sendBtn.textContent = "Sending...";
    sendBtn.disabled = true;
    status.textContent = "";
    status.className = "form-status";

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        status.textContent = "Thank you. Your message has been sent.";
        status.className = "form-status success";
        form.reset();
      } else {
        status.textContent = "Something went wrong. Please try again or email us directly.";
        status.className = "form-status error";
      }
    } catch (error) {
      status.textContent = "Network error. Please try again later.";
      status.className = "form-status error";
    }

    sendBtn.textContent = originalText;
    sendBtn.disabled = false;
  });
}
