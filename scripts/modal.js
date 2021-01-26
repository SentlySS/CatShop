// Modal Carrinho
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

//Modal Compra
const abrirModal2 = document.querySelector('[data-modal="abrirCompra"]');
const fecharModal2 = document.querySelector('[data-modal="fecharCompra"]');
const container2 = document.querySelector('[data-modal="containerCompra"]');
abrirModal2.addEventListener('click', mudarModal2);
fecharModal2.addEventListener('click', mudarModal2);
container2.addEventListener('click', fechaModal2);

function mudarModal2(e){
  e.preventDefault();
  container2.classList.toggle('ativo');
}

function fechaModal2(e){
  if(e.target === this){
    mudarModal(e);
  }
}

