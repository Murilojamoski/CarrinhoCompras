<script setup lang="ts">
  import { ref } from 'vue'
  import {carrinho, Livro} from '../Carrinho'

  const Livros = ref<Livro[]>([
    {
      titulo: "Dom Casmurro",
      sinopse: "Um dos romances mais famosos de Machado de Assis, narrado por Bentinho, que relata sua vida e sua desconfiança da traição de Capitu.",
      preco: 39.90,
      autor: "Machado de Assis",
      imagem: "https://images.tcdn.com.br/img/img_prod/1271663/dom_casmurro_edicao_de_luxo_almofadada_89_1_038fb70c564eb50f71ea49f6027e827a.jpg"
    },
    {
      titulo: "A Hora da Estrela",
      sinopse: "A história da nordestina Macabéa, contada por um narrador que também é personagem, refletindo sobre identidade e existência.",
      preco: 29.90,
      autor: "Clarice Lispector",
      imagem: "https://m.media-amazon.com/images/I/81gTwYAhU7L._SY425_.jpg"
    },
    {
      titulo: "O Pequeno Príncipe",
      sinopse: "Um clássico da literatura mundial que mistura fantasia e filosofia, acompanhando um menino vindo de outro planeta.",
      preco: 24.90,
      autor: "Antoine de Saint-Exupéry",
      imagem: "https://m.media-amazon.com/images/I/81SVIwe5L9L._UF894,1000_QL80_.jpg"
    },
    {
      titulo: "1984",
      sinopse: "Romance distópico que critica regimes totalitários, narrando a vida de Winston Smith sob a vigilância do Grande Irmão.",
      preco: 44.90,
      autor: "George Orwell",
      imagem: "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788535914849/1984.jpg"
    }

  ])

    const SinopseAberta = ref<string | null>(null)

    const VerSinopse = (titulo:string)=>{
      SinopseAberta.value = SinopseAberta.value === titulo? null : titulo
    }

    const showModal = ref(false)

    function adicionarAoCarrinho(livro: Livro) {
    carrinho.value.push(livro)
    showModal.value = true

    setTimeout(() => {
      showModal.value = false
    }, 2000)
}
</script>

<template>
  <div v-if="showModal" class="modal">
   Livro adicionado ao carrinho!
  </div>
  <div class="Corpo">
    <div v-for="livro in Livros">
        <img :src=" livro.imagem" alt="">
        <h2>{{ livro.titulo }}</h2>
        <span>{{ livro.autor }}</span>
        <button @click="VerSinopse(livro.titulo)">
          {{ SinopseAberta === livro.titulo ? 'Ocultar sinopse' : 'Ver sinopse' }}
        </button>
        <br>
        <article v-if="SinopseAberta === livro.titulo">{{ livro.sinopse }}</article>
        <p>R$ {{ livro.preco  }}</p>
        <button @click="adicionarAoCarrinho(livro)">Adicionar ao carrinho <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg></button>

    </div>
  </div>
</template>

<style scoped>
  div.Corpo{
    display: flex;
  }
  div{
    margin: 2vw;
  }
  img{
    height: 20vw;
    width: 15vw;
  }
  button{
    font-size: 1vw;
    padding: 20px;
    background-color: #27AE60;
  }
  p{
    color: #27AE60;
    font-size: 0.8vw;
  }

  .modal {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #2ecc71;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  z-index: 999;
  font-size: 1vw;
  transition: opacity 0.3s ease;
}

 
</style>