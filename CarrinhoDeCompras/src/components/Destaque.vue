<script setup lang="ts">
  import { ref } from 'vue'
  import { type Livro, Livros } from "../Livros"
  import { carrinho } from '../Carrinho'  
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const livroAleatorio = ref<Livro | null>(null)

  function PegarLivro() {
    const lista = Livros.value
    const indice = Math.floor(Math.random() * lista.length)
    livroAleatorio.value = lista[indice]
  }

  function adicionarAoCarrinho(livro: Livro) {
    carrinho.value.push(livro)

    setTimeout(() => {
      router.push("/carrinho")
    },1000)
    
  }

  PegarLivro()
</script>

<template>
  <div class="destaque">
    <h1>Destaque Do Dia</h1>
    <div class="livro">
      <div class="informacoes">
        <h2>{{ livroAleatorio?.titulo }}</h2>
        <p>{{ livroAleatorio?.sinopse }}</p>
        <button @click="adicionarAoCarrinho(livroAleatorio!)">Adicionar ao Carrinho 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
          </svg>
        </button>
      </div>
      <img :src="livroAleatorio?.imagem" alt="Livro Aleatório" class="livro-imagem">
    </div>
  </div>
</template>

<style scoped>
h1{
  text-align: center;
}
.livro {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  background-color: #F9FAFB;
  padding: 2rem;
  border-radius: 12px;
}

.livro-imagem {
  width: 350px;
  height: 450px;
  border-radius: 8px;
}

.informacoes {
  max-width: 500px;
  text-align: left;
}

.informacoes h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.informacoes p {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

button {
  background-color: #4A90E2;
  color: white;
  border: none;
  padding: 10px 15px;
  margin-top: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}


button:hover {
  background-color: #446dc5;
}
</style>
