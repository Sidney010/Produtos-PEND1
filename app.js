'use strict'

import produtos from './produtos.json' with { type: 'json' }

const main = document.querySelector('main')

function mostrarProdutos(produto) {

  const card = document.createElement('div')
  const img = document.createElement('img')
  const nome = document.createElement('h2')
  const descricao = document.createElement('p')
  const preco = document.createElement('p')
  const estrelas = document.createElement('div')
  

  card.classList.add('card-produto')

  img.src = `img/${produto.imagem}`
  img.alt = produto.nome

  nome.textContent = produto.nome

  descricao.textContent = produto.descricao

  preco.classList.add('preco')
  preco.textContent = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`

  estrelas.classList.add('estrelas')
  estrelas.innerHTML = '★'.repeat(produto.classificacao) + '☆'.repeat(5 - produto.classificacao)
  
  card.appendChild(img)
  card.appendChild(nome)
  card.appendChild(descricao)
  card.appendChild(preco)
  card.appendChild(estrelas)
  main.appendChild(card)
}

// Mostrar todos os produtos
produtos.forEach(mostrarProdutos)
