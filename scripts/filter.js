const price = document.querySelectorAll('.price');
const produto = document.querySelectorAll('.produto');
const filter = document.querySelectorAll('.filt');

filter.forEach(element => {
  let assign = parseInt(element.value) + 1;
  element.addEventListener('click', consulta)
  function consulta(){
    if(this.checked == true){
      produto.forEach(p => {
        if(p.dataset.value >= assign){
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      })
    }else {
      produto.forEach(p => p.classList.remove('active'));
    }
  }
});
