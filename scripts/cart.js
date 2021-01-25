const spanName = document.createElement('span');
const spanTotal = document.createElement('span');
const input = document.createElement('input');
const carrinho = document.querySelector('.item');
input.type="number";
input.placeholder="0";
const select = document.querySelectorAll("[data-ordem]");
const shopProduct = [
 {
    num: 0,
    name: 'Bebedouro',
    price: 20
  },
  {
    num: 1,
    name: 'Massageador para gatos',
    price: 15
  },
  {
    num: 2,
    name:'Kit Spray com brinquedo de catnip',
    price: 40
  },
  {
    num: 3,
    name:'Sache de Catnip',
    price: 5
  }
];

select.forEach((e) => {
  let newItem = parseInt(e.dataset.ordem);
  e.addEventListener('click', addItem);
    function addItem(e){
      e.preventDefault();
        for(i=0; i < shopProduct.length; i++){
          if(newItem === shopProduct[i].num){
            console.log(shopProduct[i].name);
          }
        }
    }
})
carrinho.appendChild(spanName);
      carrinho.appendChild(input);
      carrinho.appendChild(spanTotal);
      spanName.classList.add('nome');
      input.classList.add('qtd');
      spanTotal.classList.add('total');