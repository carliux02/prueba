document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const swiperWrapper = document.getElementById("swiper-wrapper");
    let swiper; // Swiper se inicializa más tarde
  
    document.querySelectorAll(".open-modal").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
  
        const images = JSON.parse(this.getAttribute("data-images").replace(/'/g, '"'));
        swiperWrapper.innerHTML = "";
  
        images.forEach((src) => {
          const slide = document.createElement("div");
          slide.classList.add("swiper-slide");
          slide.innerHTML = `<img src="${src}" style="width: 100%; height: auto;" />`;
          swiperWrapper.appendChild(slide);
        });
  
        modal.classList.add("active");
  
        // Si ya hay una instancia, destrúyela antes de crear una nueva
        if (swiper) {
          swiper.destroy(true, true);
        }
  
        // Inicializar Swiper con autoplay
        swiper = new Swiper(".swiper", {
          loop: true,
          autoplay: {
            delay: 2000, // cambia de imagen cada 3 segundos
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
    });
  
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("active");
        if (swiper) {
          swiper.autoplay.stop(); // Detener autoplay al cerrar modal
        }
      }
    });
  });
  