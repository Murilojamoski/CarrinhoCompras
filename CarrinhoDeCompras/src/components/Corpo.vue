<script setup lang="ts">
  import { ref } from 'vue'
  import {carrinho} from '../Carrinho'
  import {type Livro, Livros} from "../Livros"
  import Destaque from "../components/Destaque.vue"
  import { useRouter } from 'vue-router'

    const router = useRouter()

    const livroModal = ref<Livro | null>(null)

    const VerSinopse = (livro: Livro) => {
      livroModal.value = livro
    }
    const fecharModal = () => {
      livroModal.value = null
    }

    const showModal = ref(false)

    function adicionarAoCarrinho(livro: Livro) {
    carrinho.value.push(livro)
    showModal.value = true

    setTimeout(() => {
      router.push('/carrinho')
    }, 1000)

    }
</script>

<template>
  <Destaque />
  <h2>Livros</h2>
  <div class="Corpo">
    <div v-for="livro in Livros">
        <img :src=" livro.imagem" alt="">
        <h2>{{ livro.titulo }}</h2>
        <span>{{ livro.autor }}</span>
        <br>
        <button @click="VerSinopse(livro)">Ver sinopse</button>
        <p>R$ {{ livro.preco  }}</p>
        <button @click="adicionarAoCarrinho(livro)">Adicionar ao carrinho <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg></button>
    </div>
  </div>

  <div v-if="livroModal" class="modal-sinopse">
  <div class="modal-conteudo">
    <h2>{{ livroModal.titulo }}</h2>
    <p>{{ livroModal.sinopse }}</p>
    <button @click="fecharModal">Fechar</button>
  </div>
</div>

</template>

<style scoped>
  h2{
    text-align: center;
  }
 .Corpo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2vw;
  padding: 2vw;
}

.Corpo > div {
  background: white;
  padding: 1.5vw;
  border-radius: 12px;
  width: 220px;
  text-align: center;
  transition: transform 0.2s;
  box-shadow: #446dc588 3px 3px 3px;
  display: grid;
  grid-template-rows: 2fr 0.5fr 0.3fr;
}


img {
  width: 100%;
  height: 280px;
  object-fit: cover;
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
  background-color: #446dc5
}

.modal {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #FFFFFF;
  color: #2C3E50;
  padding: 1rem 2rem;
  border-radius: 8px;
  z-index: 999;
  font-size: 1rem;
  transition: opacity 0.3s ease;
}

.modal-sinopse {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-conteudo {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 80%;
  color: #2C3E50;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
}

</style>