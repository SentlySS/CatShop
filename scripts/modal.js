const abrirModal = document.querySelector('[data-modal="abrir"]');
const fecharModal = document.querySelector('[data-modal="fechar"]');
const container = document.querySelector('[data-modal="container"]');
abrirModal.addEventListener('click', mudarModal);
fecharModal.addEventListener('click', mudarModal);
container.addEventListener('click', fechaModal);

function mudarModal(e){
  e.preventDefault();
  container.classList.toggle('ativo');
}

function fechaModal(e){
  if(e.target === this){
    mudarModal(e);
  }
}

