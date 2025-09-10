// Mobile navbar toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Typed.js typing effect
document.addEventListener("DOMContentLoaded", () => {
  new Typed("#typed", {
    strings: ["Full-Stack Developer", "Data Analyst", "Cloud Enthusiast", "AI/ML Learner"],
    typeSpeed: 60,
    backSpeed: 40,// Navbar toggle for mobile
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Typing effect (simple version)
document.addEventListener("DOMContentLoaded", () => {
  const typedText = ["Full-Stack Developer", "Data Analyst", "AI/ML Learner"];
  let index = 0;
  let charIndex = 0;
  const typedElement = document.getElementById("typed");

  function typeEffect() {
    if (charIndex < typedText[index].length) {
      typedElement.textContent += typedText[index].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(eraseEffect, 2000);
    }
  }

  function eraseEffect() {
    if (charIndex > 0) {
      typedElement.textContent = typedText[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 50);
    } else {
      index = (index + 1) % typedText.length;
      setTimeout(typeEffect, 500);
    }
  }

  typeEffect();
});

    loop: true
  });
});
