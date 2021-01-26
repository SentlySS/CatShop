// Modal Carrinho
const alteraModal = document.querySelectorAll('[data-modal="muda"]');
const container = document.querySelector('[data-modal="container"]');

alteraModal.forEach((e) => {
  e.addEventListener('click', mudarModal);
})
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

