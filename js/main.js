const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const quantidadeTotal = document.getElementById("quantidade-total");
const itemMais = document.getElementById("item-mais");
const itemMenos = document.getElementById("item-menos");

let totalItens = 0;

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = evento.target.elements["nome"].value;
  const quantidade = evento.target.elements["quantidade"].value;
  criaElemento(nome, quantidade);
  evento.target.reset();
});

function criaElemento(nome, quantidade) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += nome;

  lista.appendChild(novoItem);

  totalItens += parseInt(quantidade);
  quantidadeTotal.innerHTML = `Total de itens: ${totalItens}`;
}

itemMais.addEventListener("click", () => {
  const itens = document.querySelectorAll(".item strong");
  itens.forEach((item) => {
    item.innerHTML = parseInt(item.innerHTML) + 1;
    totalItens += 1;
    quantidadeTotal.innerHTML = `Total de itens: ${totalItens}`;
  });
});

itemMenos.addEventListener("click", () => {
  const itens = document.querySelectorAll(".item strong");
  itens.forEach((item) => {
    const novaQuantidade = parseInt(item.innerHTML) - 1;
    if (novaQuantidade < 0) {
      item.parentElement.remove();
    } else {
      item.innerHTML = novaQuantidade;
      totalItens -= 1;
      quantidadeTotal.innerHTML = `Total de itens: ${totalItens}`;
    }
  });
});