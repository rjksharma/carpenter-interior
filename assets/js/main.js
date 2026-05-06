const body = document.body;
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
const enquiryForm = document.getElementById("enquiryForm");
const formNote = document.getElementById("formNote");
const year = document.getElementById("year");
const revealItems = document.querySelectorAll("[data-reveal]");
const galleryButtons = document.querySelectorAll("[data-gallery-image]");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const contactNumber = "919742741841";

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (revealItems.length) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const openLightbox = (imageSrc, imageTitle) => {
  if (!lightbox || !lightboxImage || !lightboxCaption) {
    return;
  }

  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageTitle;
  lightboxCaption.textContent = imageTitle;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  body.style.overflow = "hidden";
};

const closeLightbox = () => {
  if (!lightbox || !lightboxImage || !lightboxCaption) {
    return;
  }

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
  lightboxCaption.textContent = "";
  body.style.overflow = "";
};

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openLightbox(button.dataset.galleryImage, button.dataset.galleryTitle || "Gallery image");
  });
});

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

if (enquiryForm && formNote) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(enquiryForm);
    const name = formData.get("name")?.toString().trim() || "";
    const mobile = formData.get("mobile")?.toString().trim() || "";
    const city = formData.get("city")?.toString().trim() || "";
    const service = formData.get("service")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const whatsappMessage = [
      "Hi Sharma Interior,",
      "",
      "I would like a free consultation.",
      "Location Reference: Civil Aviation Layout, Rachenahalli, Thanisandra, Bengaluru 560077",
      `Name: ${name}`,
      `Mobile: ${mobile}`,
      `City: ${city}`,
      `Service: ${service}`,
      `Project Details: ${message || "Not provided"}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/${contactNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener");

    formNote.textContent = "WhatsApp message prepared. If a new tab did not open, please allow pop-ups and try again.";
    formNote.classList.add("is-success");
  });
}
