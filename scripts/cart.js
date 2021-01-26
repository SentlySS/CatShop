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
    name:'Kit Spray com brinquedo',
    price: 40
  },
  {
    num: 3,
    name:'Sache de Catnip',
    price: 5
  }
];

select.forEach((e) => {
  let newValue = parseInt(e.dataset.ordem);
  e.addEventListener('click', addItem);
    function addItem(e){
      e.preventDefault();
      const spanName = document.createElement('span');
      const spanTotal = document.createElement('span');
      const input = document.createElement('input');
      const cart = document.querySelector('.item');
      input.type="number";
      input.placeholder="0";
      cart.appendChild(spanName);
      cart.appendChild(input);
      cart.appendChild(spanTotal);
      spanName.classList.add('nome');
      input.classList.add('qtd');
      spanTotal.classList.add('total');

        for(i=0; i < shopProduct.length; i++){
          if(newValue=== shopProduct[i].num){
            let textNode = document.createTextNode(shopProduct[i].name);
            let priceNode = document.createTextNode(shopProduct[i].price);
            spanName.appendChild(textNode);
            spanTotal.appendChild(priceNode);
          }
        }
    }
})