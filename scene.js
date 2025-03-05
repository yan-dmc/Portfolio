import WebGL from "three/addons/capabilities/WebGL.js";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

if (!WebGL.isWebGL2Available()) {
  const warning = WebGL.getWebGL2ErrorMessage();
  document.body.appendChild(warning);
  throw new Error("WebGL2 não disponível.");
}

// Configuração da cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true; // Habilita sombras

// Adiciona o renderizador à div com a classe "scene"
const sceneContainer = document.querySelector(".scene");
sceneContainer.appendChild(renderer.domElement);

// Função para ajustar o tamanho do renderer e da câmera
function resizeRendererToDisplaySize() {
  const width = sceneContainer.clientWidth;
  const height = sceneContainer.clientHeight;
  const needResize =
    renderer.domElement.width !== width ||
    renderer.domElement.height !== height;

  if (needResize) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

// Posição da câmera X Y Z
camera.position.set(0, 0, 3);

// Adiciona luz ambiente (ilumina tudo igualmente)
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Adiciona luz direcional (simula luz do sol)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(2, 5, 3); // Posição da luz
directionalLight.castShadow = true; // Ativa sombras
scene.add(directionalLight);

// Variável para armazenar o modelo carregado
let modeloGLTF = null;
let pivot = null; // Grupo para aplicar a rotação

// Gerenciador de progresso
const manager = new THREE.LoadingManager();
manager.onProgress = (url, itemsLoaded, itemsTotal) => {
  console.log(
    `Carregando arquivo: ${url}. Progresso: ${itemsLoaded}/${itemsTotal}`
  );
};

// Define as posições para cada opção do dropdown
const positions = [
  { x: 0, y: 0, z: 1, rotX: 0.2, rotY: 0.01, rotate: 1 }, // Posição 1 (Inicio)
  { x: 0, y: -0.25, z: 2.75, rotX: -0.25, rotY: -0.4, rotate: 0 }, // Posição 2 (Serviços)
  { x: -0.5, y: -0.25, z: 2.8, rotX: 0, rotY: 0.5, rotate: 0 }, // Posição 3 (Experiencia)
  { x: .75, y: 0, z: 2.5, rotX: .75, rotY: 0, rotate: 0 }, // Posição 4 (Educação)
];

// Variável para armazenar a posição atual
let currentPosition = positions[0];

// Variáveis para transição suave
let targetPosition = new THREE.Vector3();
let targetRotation = new THREE.Quaternion();
let isTransitioning = false;

// Carrega o modelo GLTF corretamente
const loader = new GLTFLoader(manager);
loader.load(
  "./scene.gltf",
  function (gltf) {
    modeloGLTF = gltf.scene;

    // Calcula o centro geométrico do modelo
    const box = new THREE.Box3().setFromObject(modeloGLTF);
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Move o modelo para que o centro geométrico coincida com a origem (0, 0, 0)
    modeloGLTF.position.sub(center);

    // Cria um grupo para aplicar a rotação
    pivot = new THREE.Group();
    scene.add(pivot); // Adiciona o grupo à cena
    pivot.add(modeloGLTF); // Adiciona o modelo ao grupo

    // Aplica a posição padrão (positions[0]) ao carregar a página
    pivot.position.set(
      currentPosition.x,
      currentPosition.y,
      currentPosition.z
    );
    pivot.rotation.x = currentPosition.rotX;
    pivot.rotation.y = currentPosition.rotY;

    modeloGLTF.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true; // Permite que o modelo projete sombras
        child.receiveShadow = true; // Permite que o modelo receba sombras
      }
    });

    document.querySelector(".loader").style.display = "none"; // Oculta o loader
  },
  undefined,
  function (error) {
    console.error("Erro ao carregar o modelo GLTF:", error);
    document.querySelector(".loader").textContent =
      "Erro ao carregar o modelo.";
  }
);

// Função de animação
function animate() {
  resizeRendererToDisplaySize(); // Ajusta o tamanho do renderer e da câmera

  if (pivot) {
    // Transição suave para a nova posição e rotação
    if (isTransitioning) {
      pivot.position.lerp(targetPosition, 0.05); // Interpola a posição
      pivot.quaternion.slerp(targetRotation, 0.05); // Interpola a rotação

      // Verifica se a transição está concluída
      if (
        pivot.position.distanceTo(targetPosition) < 0.01 &&
        pivot.quaternion.angleTo(targetRotation) < 0.01
      ) {
        isTransitioning = false;
      }
    }

    // Aplica a rotação contínua se necessário (após a transição)
    if (!isTransitioning && currentPosition.rotate === 1) {
      pivot.rotation.y -= currentPosition.rotY;
    }
  }

  renderer.render(scene, camera);
}

// Inicia o loop de animação corretamente
renderer.setAnimationLoop(animate);

// Monitora o redimensionamento da janela
window.addEventListener("resize", () => {
  resizeRendererToDisplaySize();
});

// Adiciona a lógica do dropdown personalizado
const dropdownItems = document.querySelectorAll("#dropdown li"); // Seleciona todos os itens da lista

// Adiciona um event listener a cada item da lista
dropdownItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedPosition = positions[item.getAttribute("value")];
    if (pivot && selectedPosition && selectedPosition !== currentPosition) {
      // Define o alvo da transição
      targetPosition.set(
        selectedPosition.x,
        selectedPosition.y,
        selectedPosition.z
      );
      targetRotation.setFromEuler(
        new THREE.Euler(selectedPosition.rotX, selectedPosition.rotY, 0)
      );

      // Inicia a transição
      isTransitioning = true;

      // Atualiza a posição atual
      currentPosition = selectedPosition;
    }
  });
});