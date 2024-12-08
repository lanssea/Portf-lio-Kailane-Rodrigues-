let currentSlide = 0;

function changeSlide(direction) {
  const slideContainer = document.querySelector('.slide-container');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // Atualiza o índice do slide atual
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  // Move para o slide correto
  slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}




function mostrarConteudo(num) {
  // Seleciona todos os iframes e os esconde
  const projetos = document.querySelectorAll(".projeto, .projeto-destaque");
  
  // Esconde todos os conteúdos
  projetos.forEach(projeto => {
    projeto.classList.add("oculto");
  });

  // Mostra o conteúdo correspondente à bolinha clicada
  if (num === 0) {
    // Exibe o conteúdo original (primeiro grupo de iframes)
    document.querySelector(".projeto").classList.remove("oculto");
    document.querySelector(".projeto-destaque").classList.remove("oculto");
  } else {
    // Exibe o conteúdo adicional
    document.querySelectorAll(".projeto")[num].classList.remove("oculto");
    document.querySelectorAll(".projeto-destaque")[num].classList.remove("oculto");
  }
}


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); 
      const targetId = this.getAttribute('href'); 
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
      });
    });
  });

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); 
    const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    };
  
    emailjs.send("lansea", "lanesea", templateParams)
      .then(function (response) {
        alert("E-mail enviado com sucesso! ✅");
      })
      .catch(function (error) {
        alert("Houve um erro ao enviar o e-mail. ❌");
        console.error("Erro:", error);
      });
  });

  

 
  