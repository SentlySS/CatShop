const price = document.querySelectorAll('.price');
const produto = document.querySelectorAll('.produto');
const filter = document.querySelectorAll('.filt');

filter.forEach(element => {
  let assign = element.value;
  element.addEventListener('click', consul)
  function consul(){
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
