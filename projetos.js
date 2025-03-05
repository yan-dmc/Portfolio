export function initializeSlider() {
  let items = document.querySelectorAll('.slider .projetosItem');
  let next = document.getElementById('next');
  let prev = document.getElementById('prev');
  let active = 3;
  let isHover = false;

  function loadShow() {
      let stt = 0;
      items[active].style.transform = `none`;
      items[active].style.zIndex = 0;
      items[active].style.filter = 'none';
      items[active].style.opacity = 1;
      items[active].style.backgroundColor = "hsl(0, 0.00%, 0.00%)";
      items[active].style.color = 'hsl(0, 0%, 100%)';

      if (isHover) {
          items[active].style.transform = `scale3d(1.05, 1.05, 1.05)`;
      }

      for (let i = active + 1; i < items.length; i++) {
          stt++;
          items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(20px) rotateY(0deg)`;
          items[i].style.zIndex = -stt;
          items[i].style.filter = 'none';
          items[i].style.opacity = stt > 2 ? 0 : stt > 1 ? 0.2 : 0.5;
      }
      stt = 0;
      for (let i = active - 1; i >= 0; i--) {
          stt++;
          items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(20px) rotateY(0deg)`;
          items[i].style.zIndex = -stt;
          items[i].style.filter = 'none';
          items[i].style.opacity = stt > 2 ? 0 : stt > 1 ? 0.2 : 0.5;
      }
  }

  items.forEach(item => {
      item.addEventListener('mouseenter', () => {
          isHover = true;
          loadShow();
      });

      item.addEventListener('mouseleave', () => {
          isHover = false;
          loadShow();
      });
  });

  next.onclick = function() {
      active = active + 1 < items.length ? active + 1 : active;
      loadShow();
  }

  prev.onclick = function() {
      active = active - 1 >= 0 ? active - 1 : active;
      loadShow();
  }

  // Inicializa o slider pela primeira vez
  loadShow();
}


