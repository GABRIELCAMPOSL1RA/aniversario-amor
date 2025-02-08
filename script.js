// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function() {
    // Toggle do menu mobile
    const menuToggle = document.getElementById("menuToggle");
    const navList = document.querySelector(".nav-list");
    
    menuToggle.addEventListener("click", function() {
      navList.classList.toggle("nav-active");
    });
    
    // Lógica da surpresa
    const btn = document.getElementById("showMessageBtn");
    const hiddenMessage = document.getElementById("hiddenMessage");
  
    btn.addEventListener("click", function() {
      if (hiddenMessage.style.display === "none" || hiddenMessage.style.display === "") {
        hiddenMessage.style.display = "block";
        btn.textContent = "Fechar Surpresa";
      } else {
        hiddenMessage.style.display = "none";
        btn.textContent = "Clique aqui para a surpresa!";
      }
    });
  });
  