document.addEventListener("DOMContentLoaded", function() {
    // Toggle do menu mobile
    const menuToggle = document.getElementById("menuToggle");
    const navList = document.querySelector(".nav-list");
    
    menuToggle.addEventListener("click", function() {
      navList.classList.toggle("nav-active");
    });
    
    // Navegação por abas
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");
    
    tabLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        // Remove a classe "active" de todas as abas e conteúdos
        tabLinks.forEach(link => link.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));
        
        // Ativa a aba clicada e o conteúdo correspondente
        this.classList.add("active");
        const target = this.getAttribute("data-target");
        document.getElementById(target).classList.add("active");
      });
    });
    
    // Lógica da surpresa
    const showMessageBtn = document.getElementById("showMessageBtn");
    const hiddenMessage = document.getElementById("hiddenMessage");
    
    if (showMessageBtn) {
      showMessageBtn.addEventListener("click", function() {
        if (hiddenMessage.style.display === "none" || hiddenMessage.style.display === "") {
          hiddenMessage.style.display = "block";
          showMessageBtn.textContent = "Fechar Surpresa";
        } else {
          hiddenMessage.style.display = "none";
          showMessageBtn.textContent = "Clique aqui para a surpresa!";
        }
      });
    }
  
    // Slider de imagens na homepage
    let slideIndex = 0;
    showSlides();
  
    function showSlides() {
      const slides = document.getElementsByClassName("slide");
      const dots = document.getElementsByClassName("dot");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1; }
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      if (slides.length > 0) {
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
      }
      setTimeout(showSlides, 5000); // Troca a imagem a cada 5 segundos
    }
  
    // Função para pular para um slide específico
    window.currentSlide = function(n) {
      slideIndex = n - 1;
      showSlides();
    }
  });
  