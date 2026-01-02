const listCart = document.querySelector(".cart-list");
const priceTotal = document.getElementById("price-total");
const checkoutButton = document.querySelector(".checkout-button");
const cartCount = document.getElementById('cart-count');

// document.addEventListener('DOMContentLoaded', (event) => {
//     // Apenas chame a função que lê o localStorage para a contagem
//     atualizarCartUI(); 
//     // Se você tiver outras inicializações de UI, coloque-as aqui
//     atualizarUI(); 
// });

// import {products, cartCount, atualizarUI} from 'script.js';

// ADICIONAR EVENTO DE REMOVER PRODUTO DO CART
// FUNCAO PARA RENDERIZAR PRODUTOS NO CART
// FUNCAO PARA PRODUTOS RECOMENDADOS
// 

export let cart = [];

export const CART_KEY = 'movimentacaoDoCarrinho';

// ADICIONAR LOCALSTORAGE
export function saveCart() {
  const cartJSON = JSON.stringify(cart);
  localStorage.setItem(CART_KEY, cartJSON)
}

export function loadCart() {
    const cartItemsSaved = localStorage.getItem(CART_KEY);
    // if (cartItemsSaved) {
        const cartReload = JSON.parse(cartItemsSaved);
        cart = cartReload;
    // } else {
        // console.log("nENHUM ITEM ADICIONADO AO CARRINHO");
    // }
  }

  // ADICIONAR PRODUTOS AO CARRINHO
  export function addToCart(products) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    saveCart();
    console.log(cart);
    atualizarCartUI();
    // atualizarUI();
  }
  
  // ATUALIZAR CARRINHO NA UI
  export function atualizarCartUI() {
    console.log("Chamando atualizarCartUI. Elemento encontrado?", cartCount); // DEBUG
    
    if (!cartCount) {
      console.error("Erro: Elemento cartCount não foi encontrado!");
      return; // Interrompe a função se o elemento não existe
    }
    // saveCart();
    cartCount.textContent = cart.length;
    cartCount.style.display = cart.length >= 1 ? 'block' : 'none';
  }