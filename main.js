const dropdown = document.querySelector(".dropdown");
const dropdownH1 = document.querySelector(".dropdownH1");
const dropdownItems = document.querySelector(".dropdownItems");
const textContent = document.querySelector(".textContent");

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("dropdownOpen");
  dropdown.classList.toggle("dropdownClose");
});

dropdownItems.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const selecionado = e.target.textContent.trim();
    dropdownH1.innerHTML = selecionado;
    contentChange(selecionado);
  }
});

function contentChange(texto) {
  if (texto == "Início") {
    const startDate = new Date(2025, 0, 1); 
    const currentDate = new Date();

    const diffTime = Math.abs(currentDate - startDate);
    
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffMonths / 12);

    const remainingMonths = diffMonths % 12;
    const remainingDays = diffDays % 30;

    textContent.innerHTML = `
          <a class="curriculoLink" href="https://yan-dmc.github.io/curriculo/" title="Baixar Curriculo" target="_blank">
            <button class="curriculo">
              Baixar Curriculo
            </button>
          </a>
          <div class="inicioText">
            <h1>Olá,</h1>
            <p>meu nome é Yan e sou um <strong>entusiasta apaixonado por novas tecnologias,</strong>  trabalho como programador Fullstack e Freelancer a ${diffYears} anos ${remainingMonths} meses ${remainingDays} dias</p>
          </div>
          <ul class="links">
            <li class="item">
              <a href="https://www.linkedin.com/in/yan-caio-9670a8219/" title="Ir para o LinkedIn" target="_blank">
                <img src="./images/linkedin.png" alt="Linkedin">
              </a>
            </li>
            <li class="item">
              <a href="https://wa.me/5584999354767" title="Enviar Mensagem no WhatsApp" target="_blank">
                <img src="./images/whatsapp.png" alt="Whatsapp">
              </a>
            </li>
            <li class="item">
              <a href="https://www.99freelas.com.br/user/Yan-DMC" title="Ir para o 99Freelas" target="_blank"">
                <img src="./images/99.png" alt="99Freelas">
              </a>
            </li>
            <li class="item">
              <a href="https://github.com/yan-dmc" title="Ir para o GitHub" target="_blank">
                <img src="./images/github.png" alt="Github">
              </a>
            </li>
            <li class="item">
              <a href="https://x.com/yancaio_dmc" title="Ir para o Twitter" target="_blank">
                <img src="./images/twitter.png" alt="twitter">
              </a>
            </li>
            <li class="item">
              <a href="https://www.instagram.com/_yan.dev/" title="Ir para o Instagram" target="_blank">
                <img src="./images/instagram.png" alt="instagram">
              </a>
            </li>
            <li class="item">
              <a href="https://www.facebook.com/yan.dmc.2025/" title="Ir para o Facebook" target="_blank">
                <img src="./images/facebook.png" alt="facebook">
              </a>
            </li>
          </ul>
    `;
  } else if (texto === "Serviços") {
    textContent.innerHTML = `
        <div class="servicesContainer">
            <div class="serviceItem">
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" version="1.1" id="Capa_1" width="800px" height="800px" viewBox="0 0 399.997 399.997" xml:space="preserve">
                  <g>
                    <g>
                      <g>
                        <path d="M366.684,24.971H33.316C14.945,24.971,0,39.917,0,58.288V275.56c0,18.371,14.945,33.317,33.316,33.317h107.412     l-20.387,44.955c-2.105,4.643-1.709,10.037,1.053,14.321c2.762,4.285,7.51,6.873,12.607,6.873h131.996c0.006,0,0.014,0,0.02,0     c8.285,0,15-6.715,15-15c0-2.493-0.605-4.848-1.686-6.916l-20.062-44.233h107.412c18.371,0,33.316-14.946,33.316-33.317V58.288     C400,39.917,385.055,24.971,366.684,24.971z M370,275.561c0,1.829-1.488,3.316-3.316,3.316H33.316     c-1.828,0-3.316-1.487-3.316-3.316V58.288c0-1.829,1.488-3.317,3.316-3.317h333.367c1.828,0,3.316,1.488,3.316,3.317L370,275.561     L370,275.561z"/>
                        <path d="M246.198,96.434c-1.057-1.056-2.921-0.9-4.166,0.344l-16.273,16.271c-1.247,1.247-1.4,3.116-0.348,4.171l23.103,23.103     c0.525,0.526,1.261,0.751,2.013,0.688c0.756-0.063,1.53-0.413,2.157-1.038l16.271-16.272c1.244-1.245,1.4-3.111,0.343-4.166     L246.198,96.434z"/>
                        <path d="M146.336,197.582c-0.684-0.684-1.748-0.882-2.791-0.523c-1.042,0.359-1.902,1.226-2.257,2.271l-11.118,32.934     c-0.353,1.037-0.148,2.089,0.532,2.768c0.512,0.517,1.24,0.759,2.011,0.693c0.248-0.021,0.503-0.073,0.756-0.16l32.934-11.12     c1.044-0.354,1.912-1.215,2.27-2.256c0.362-1.041,0.162-2.107-0.521-2.792L146.336,197.582z"/>
                        <path d="M229.504,182.228c1.451-0.662,2.51-1.965,2.859-3.519c0.35-1.555-0.047-3.185-1.071-4.405     c-1.92-2.283-3.929-4.604-5.997-6.941l18.078-18.077c0.596-0.597,0.972-1.375,1.033-2.157c0.065-0.779-0.185-1.505-0.689-2.01     l-23.104-23.101c-1.056-1.058-2.92-0.903-4.166,0.344l-17.63,17.633c-11.824-11.209-23.699-21.209-34.165-28.732     c-7.369-5.296-20.85-14.199-28.355-14.313c-1.37-0.024-2.695,0.512-3.668,1.479c-0.976,0.966-1.519,2.285-1.508,3.657     c0.039,5.114,4.528,14.341,12.639,25.977c7.72,11.075,18.326,23.802,30.426,36.563l-23,23.002     c-1.248,1.247-1.403,3.111-0.346,4.166l23.103,23.101c0.525,0.531,1.254,0.755,2.011,0.691c0.752-0.063,1.533-0.414,2.155-1.035     l23.446-23.447c2.047,1.811,4.077,3.571,6.079,5.268c0.929,0.787,2.097,1.209,3.296,1.209c0.271,0,0.543-0.022,0.815-0.065     c1.471-0.239,2.765-1.109,3.539-2.383c1.368-2.248,3.15-4.479,5.301-6.626C223.281,185.806,226.284,183.693,229.504,182.228z"/>
                        <path d="M242.292,186.495c-5.938,0-11.606,2.531-16.396,7.32c-5.748,5.748-8.257,11.777-7.257,17.438     c0.993,5.604,5.446,10.627,12.22,13.771c5.827,2.707,11.138,3.546,15.821,4.287c4.932,0.778,9.585,1.516,13.726,4.325     c0.857,0.585,1.859,0.882,2.864,0.882c0.706,0,1.415-0.146,2.079-0.444c1.613-0.719,2.74-2.225,2.977-3.977     c1.775-13.241-0.765-25.133-7.152-33.476C256.245,190.186,249.363,186.495,242.292,186.495z"/>
                      </g>
                    </g>
                  </g>
                  </svg>
                  Criação de Sites
                </h3>
              <p>Desenvolvimento de sites responsivos e dinâmicos, Landing Pages, E-commerce, sites institucionais e portfólios.</p>
            </div>
            <div class="serviceItem">
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="800px" height="800px" viewBox="0 0 32 32" version="1.1">
                  <path d="M9.832 16.769l4.128 4.434 4.552-4.461 1.412-8.313-5.547-0.285zM9.323 16.254l4.37-8.15-12.689-0.689zM6.158 4.849l1.071 2.199 5.916 0.367zM17.772 4.848l-2.988 2.692 5.026 0.187zM7.881 27.152l5.591-5.466-3.364-3.611zM18.619 4.848l2.042 2.864 10.334-2.864z"/>
                  </svg>
                  Freelancer
                </h3>
              <p>Projetos sob demanda para empresas e empreendedores, desenvolvimento web personalizado e suporte técnico.</p>
            </div>
            <div class="serviceItem">
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="800px" height="800px" viewBox="0 0 1920 1920">
                  <path d="M517.257 1127.343c72.733 0 148.871 36.586 221.274 107.45 87.455 110.418 114.922 204.135 81.632 278.296-72.733 162.274-412.664 234.897-618.666 259.178 34.609-82.62 75.15-216.88 75.15-394.645 0-97.123 66.47-195.455 157.88-233.689 26.698-11.097 54.494-16.59 82.73-16.59Zm229.404-167.109c54.055 28.895 106.462 65.371 155.133 113.494l13.844 15.6c28.016 35.378 50.649 69.987 70.425 104.155-29.554 26.259-59.878 52.737-90.75 79.545-18.898-35.488-43.069-71.964-72.843-109.319l-4.285-4.834c-48.342-47.683-99.43-83.39-151.727-107.011 26.368-30.653 53.066-61.196 80.203-91.63Zm1046.49-803.133c7.801 7.8 18.129 21.754 16.92 52.187-6.043 155.683-284.338 494.405-740.509 909.266-19.995-32.302-41.969-64.822-67.788-97.453l-22.523-25.27c-49.22-48.671-101.408-88.883-156.012-121.074 350.588-385.855 728.203-734.356 910.254-741.828 30.983-.109 44.497 9.01 59.658 24.172Zm126.678 56.472c2.087-53.615-14.832-99.98-56.142-141.29-34.28-34.279-81.962-51.198-134.588-49.11-304.554 12.414-912.232 683.377-1179.54 996.17-53.616-5.383-106.682 2.088-157.441 23.402-132.61 55.263-225.339 193.038-225.339 334.877 0 268.517-103.935 425.737-104.923 427.275L0 1896.747l110.307-6.153c69.217-3.735 681.29-45.375 810.165-332.46 24.39-54.604 29.225-113.163 15.93-175.239 374.32-321.802 972.11-879.71 983.427-1169.322" fill-rule="evenodd"/>
                </svg>
                Designer
              </h3>
              <p>Criação de logotipos, identidade visual, layouts para websites, edição de fotos e vídeos.</p>
            </div>
            <div class="serviceItem">
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="800px" height="800px" viewBox="0 0 16 16" >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.50001 0H9.50001L10.0939 2.37548C10.7276 2.6115 11.3107 2.95155 11.8223 3.37488L14.1782 2.70096L15.6782 5.29904L13.9173 7.00166C13.9717 7.32634 14 7.65987 14 8C14 8.34013 13.9717 8.67366 13.9173 8.99834L15.6782 10.701L14.1782 13.299L11.8223 12.6251C11.3107 13.0484 10.7276 13.3885 10.0939 13.6245L9.50001 16H6.50001L5.90614 13.6245C5.27242 13.3885 4.68934 13.0484 4.17768 12.6251L1.82181 13.299L0.321808 10.701L2.08269 8.99834C2.02831 8.67366 2.00001 8.34013 2.00001 8C2.00001 7.65987 2.02831 7.32634 2.08269 7.00166L0.321808 5.29904L1.82181 2.70096L4.17768 3.37488C4.68934 2.95155 5.27241 2.6115 5.90614 2.37548L6.50001 0ZM8.00001 10C9.10458 10 10 9.10457 10 8C10 6.89543 9.10458 6 8.00001 6C6.89544 6 6.00001 6.89543 6.00001 8C6.00001 9.10457 6.89544 10 8.00001 10Z"/>
                  </svg>
                  Assistência Técnica
                </h3>
              <p>Manutenção de aparelhos, instalação de aplicativos, formatação e assistência.</p>
            </div>
          </div>
    `;
  } else if (texto === "Experiência") {
    textContent.innerHTML = `
          <div class="Projetos">
            <h1>Projetos</h1>
            <hr>
            <div class="slider">
              <a href="https://yan-dmc.github.io/dio.CSS_LabProject.5/" target="_blank" rel="noopener noreferrer">
                  <div class="projetosItem hbo">  
                  </div>
              </a>
              <a href="https://yan-dmc.github.io/GitFind/" target="_blank" rel="noopener noreferrer">
                <div class="projetosItem gitfind">  
                  <h1 style="width: 100%; text-align: right;">GitFind</h1>
                </div>
              </a>
              <a href="https://yan-dmc.github.io/Nvidia-Market/" target="_blank" rel="noopener noreferrer">
                <div class="projetosItem nvidia">  
                </div>
              </a>
              <a href="https://yan-dmc.github.io/react-memory-game/" target="_blank" rel="noopener noreferrer">
                <div class="projetosItem pokemon" style="z-index: 2;">  
                </div>
              </a>
              <a href="https://yan-dmc.github.io/deadpool-x-wolverine/" target="_blank" rel="noopener noreferrer">
                <div class="projetosItem deadpool-x-wolverine">
                </div>
              </a>
              <a href="https://yan-dmc.github.io/03-desafio-dio/" target="_blank" rel="noopener noreferrer">
                <div class="projetosItem rank">
                </div>
              </a>
              <a href="https://yan-dmc.github.io/game.HTML_Detona-Ralph.1/" target="_blank" rel="noopener noreferrer">
                <div class="projetosItem ralph">
                </div>
              </a>
              <a href="https://yan-dmc.github.io/react-tic-tac-toe/" target="_blank" rel="noopener noreferrer">
                <div class="projetosItem tictactoe">  
                </div>
              </a>
              <button id="next">></button>
              <button id="prev"><</button>
  
          </div>
    `;
    initializeSlider();
  } else if (texto === "Educação"){
    textContent.innerHTML = `
              <div>
            <h2>
              <b>Faculdade Estácio</b> - Graduação em Análise e Desenvolvimento
              de Sistemas (ADS)
            </h2>
            <h6>Janeiro 2024 - <span>Atual</span></h6>
            <br />
            <ul class="certificados">
              <li>
                <a
                  href="https://certificado.estacio.br/20e39d8949f0202fadc444f"
                  target="_blank"
                  >Programação de Algoritmos Escaláveis (240h)</a
                >
              </li>
              <li>
                <a
                  href="https://certificado.estacio.br/275909884f4f2b7abc826b4"
                  target="_blank"
                  >Programação Para Internet (280h)</a
                >
              </li>
            </ul>
          </div>
          <hr />
          <div>
            <h2><b>Digital Innovation One (DIO)</b></h2>
            <h6>Outubro 2024 - <span>Atual</span></h6>
            <br />
            <ul class="certificados">
              <li>
                <a
                  href="https://hermes.dio.me/certificates/UJV9R0RL.pdf"
                  target="_blank"
                  >Formação: HTML Web Developer (21h)</a
                >
              </li>
              <li>
                <a
                  href="https://hermes.dio.me/certificates/53LGYJLW.pdf"
                  target="_blank"
                  >Formação: CSS Web Developer (43h)</a
                >
              </li>
              <li>
                <a
                  href="https://hermes.dio.me/certificates/L1DWGOUS.pdf"
                  target="_blank"
                  >Formação: Lógica de Programação (41h)</a
                >
              </li>
              <li>
                <a
                  href="https://hermes.dio.me/certificates/RBIH3VYD.pdf"
                  target="_blank"
                  >Formação: Desenvolvimento de Software com PHP (14h)</a
                >
              </li>
              <li>
                <a
                  href="https://hermes.dio.me/certificates/IJ6IMHOL.pdf"
                  target="_blank"
                  >Curso: Iniciando com framework CSS - Bootstrap (3h)</a
                >
              </li>
              <li>
                <a
                  href="https://hermes.dio.me/certificates/ZZSBX62O.pdf"
                  target="_blank"
                  >Curso: Lógica de Programação Essencial (4h)</a
                >
              </li>
              <li>
                <a
                  href="https://hermes.dio.me/certificates/VZYFOVCY.pdf"
                  target="_blank"
                  >Curso: Estruturas de Dados e Objetos (6h)</a
                >
              </li>
            </ul>
          </div>
        </div>
    `
  };
}


function initializeSlider() {
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


contentChange('Início');