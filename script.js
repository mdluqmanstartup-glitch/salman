const WHATSAPP = "919693487083";

const header = document.getElementById("header");
const progress = document.getElementById("progressBar");
const nav = document.getElementById("navLinks");
const menu = document.getElementById("menuToggle");
const cursorGlow = document.querySelector(".cursor-glow");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${docHeight > 0 ? (scrollTop / docHeight) * 100 : 0}%`;
  header.classList.toggle("scrolled", scrollTop > 15);
});

menu.addEventListener("click", () => {
  nav.classList.toggle("mobile-open");
});

document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("mobile-open"));
});

if (cursorGlow) {
  window.addEventListener("pointermove", e => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  });
}

// Scroll reveal
const revealItems = document.querySelectorAll(".reveal-up, .reveal-left, .reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

revealItems.forEach((el, index) => {
  if (!el.classList.contains("hero-title")) {
    el.style.transitionDelay = `${Math.min((index % 5) * 70, 280)}ms`;
  }
  observer.observe(el);
});

// Package buttons
document.querySelectorAll(".package-book").forEach(button => {
  button.addEventListener("click", () => {
    const selected = button.dataset.package;
    const select = document.getElementById("packageSelect");

    [...select.options].forEach(option => {
      if (option.textContent.toLowerCase().includes(selected.toLowerCase())) {
        select.value = option.value;
      }
    });

    document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
  });
});

// Booking -> WhatsApp
const form = document.getElementById("bookingForm");
const status = document.getElementById("formStatus");
const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", () => {
  phoneInput.value = phoneInput.value.replace(/\D/g, "").slice(0, 10);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = phoneInput.value.trim();
  const city = document.getElementById("city").value.trim();
  const selectedPackage = document.getElementById("packageSelect").value;

  if (!/^\d{10}$/.test(phone)) {
    status.textContent = "Please enter a valid 10-digit mobile number.";
    status.style.color = "#d84c4c";
    return;
  }

  const message =
`Hello VitaCare,

I want to book a health checkup.

Name: ${name}
Mobile: ${phone}
City: ${city}
Package: ${selectedPackage}

Please contact me for confirmation.`;

  const whatsappURL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

  status.textContent = "Opening WhatsApp...";
  status.style.color = "#0a9b78";

  setTimeout(() => {
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }, 250);
});

// Subtle parallax for hero visual
const stage = document.querySelector(".hero-stage");
window.addEventListener("scroll", () => {
  if (!stage || window.innerWidth < 800) return;
  const y = Math.min(window.scrollY * 0.07, 35);
  stage.style.transform = `translateY(${y}px)`;
});
