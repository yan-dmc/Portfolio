import WebGL from "three/addons/capabilities/WebGL.js";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

if (!WebGL.isWebGL2Available()) {
  const warning = WebGL.getWebGL2ErrorMessage();
  document.body.appendChild(warning);
  throw new Error("WebGL2 não disponível.");
}

// Verifica se é um dispositivo móvel
const isMobile = /Mobi|Android/i.test(navigator.userAgent);

// Configuração da cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Configuração do renderizador com otimizações para mobile
const renderer = new THREE.WebGLRenderer({ antialias: !isMobile });
renderer.setPixelRatio(isMobile ? 0.5 : window.devicePixelRatio);
renderer.shadowMap.enabled = true; // Ativa sombras

// Verifica se o contêiner existe antes de anexar o renderizador
const sceneContainer = document.querySelector(".scene");
if (sceneContainer) {
  sceneContainer.appendChild(renderer.domElement);
} else {
  console.error("Elemento .scene não encontrado.");
}

// Ajusta o tamanho do renderizador corretamente
function resizeRendererToDisplaySize() {
  if (!sceneContainer) return;

  const width = sceneContainer.clientWidth;
  const height = sceneContainer.clientHeight;
  const canvas = renderer.domElement;

  if (canvas.width !== width || canvas.height !== height) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

// Configuração da câmera
camera.position.set(0, 0, 3);

// Adiciona iluminação
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(2, 5, 3);
directionalLight.castShadow = true;
scene.add(directionalLight);

// Variáveis do modelo
let modeloGLTF = null;
let pivot = new THREE.Group();
scene.add(pivot);

// Gerenciador de progresso do carregamento
const manager = new THREE.LoadingManager();
manager.onProgress = (url, itemsLoaded, itemsTotal) => {
  console.log(`Carregando arquivo: ${url}. Progresso: ${itemsLoaded}/${itemsTotal}`);
};

// Posições e rotações do modelo
const positions = [
  { x: 0, y: 0, z: 1, rotX: 0.2, rotY: 0.01, rotate: true },
  { x: 0, y: -0.25, z: 2.75, rotX: -0.25, rotY: -0.4, rotate: false },
  { x: -0.5, y: -0.25, z: 2.8, rotX: 0, rotY: 0.5, rotate: false },
  { x: 0.75, y: 0, z: 2.5, rotX: 0.75, rotY: 0, rotate: false },
];

let currentPosition = positions[0];
let targetPosition = new THREE.Vector3();
let targetRotation = new THREE.Quaternion();
let isTransitioning = false;

// Carregamento do modelo
const loader = new GLTFLoader(manager);
loader.load(
  "./scene.gltf",
  function (gltf) {
    modeloGLTF = gltf.scene;

    // Centraliza o modelo
    const box = new THREE.Box3().setFromObject(modeloGLTF);
    const center = new THREE.Vector3();
    box.getCenter(center);
    modeloGLTF.position.sub(center);

    pivot.add(modeloGLTF);

    // Define posição inicial
    pivot.position.set(currentPosition.x, currentPosition.y, currentPosition.z);
    pivot.rotation.set(currentPosition.rotX, currentPosition.rotY, 0);

    modeloGLTF.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    // Esconde o loader se existir
    const loaderElement = document.querySelector(".loader");
    if (loaderElement) loaderElement.style.display = "none";
  },
  undefined,
  function (error) {
    console.error("Erro ao carregar o modelo:", error);
    const loaderElement = document.querySelector(".loader");
    if (loaderElement) loaderElement.textContent = "Erro ao carregar o modelo.";
  }
);

// Animação do modelo
function animate() {
  resizeRendererToDisplaySize();

  if (pivot) {
    // Transição suave de posição e rotação
    if (isTransitioning) {
      pivot.position.lerp(targetPosition, 0.05);
      pivot.quaternion.slerp(targetRotation, 0.05);

      if (
        pivot.position.distanceTo(targetPosition) < 0.01 &&
        pivot.quaternion.angleTo(targetRotation) < 0.01
      ) {
        isTransitioning = false;
      }
    }

    // Rotação contínua
    if (!isTransitioning && currentPosition.rotate) {
      pivot.rotation.y -= 0.01;
    }
  }

  renderer.render(scene, camera);
}

// Inicia o loop de animação
renderer.setAnimationLoop(animate);

// Ajusta o tamanho da cena quando a janela for redimensionada
window.addEventListener("resize", resizeRendererToDisplaySize);

// Dropdown para alternar posições
const dropdownItems = document.querySelectorAll("#dropdown li");
dropdownItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedPosition = positions[item.getAttribute("value")];

    if (pivot && selectedPosition && selectedPosition !== currentPosition) {
      targetPosition.set(selectedPosition.x, selectedPosition.y, selectedPosition.z);
      targetRotation.setFromEuler(new THREE.Euler(selectedPosition.rotX, selectedPosition.rotY, 0));

      isTransitioning = true;
      currentPosition = selectedPosition;
    }
  });
});
