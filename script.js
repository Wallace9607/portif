// === Exibir idade automaticamente ===
function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nasc = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nasc.getFullYear();
  const mes = hoje.getMonth() - nasc.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < nasc.getDate())) idade--;
  return idade;
}
document.getElementById("age").textContent = calcularIdade("1996-07-01");

// === Efeito digitação Typed.js ===
new Typed("#typed", {
  strings: [
    "Desenvolvedor Front-End 💻",
    "Criador de Interfaces 🎨",
    "Apaixonado por Tecnologia 🚀"
  ],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true,
  backDelay: 1500,
  startDelay: 500
});

// === Menu responsivo ===
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  toggle.querySelector("i").classList.toggle("fa-bars");
  toggle.querySelector("i").classList.toggle("fa-xmark");
});

// === Rolagem suave ===
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      navLinks.classList.remove("show");
      toggle.querySelector("i").classList.add("fa-bars");
      toggle.querySelector("i").classList.remove("fa-xmark");
    }
  });
});

// === Efeito de fade ao rolar ===
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".section, .project-card, .skill").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
