<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { Livros, type Livro } from '../Livros'
  import { carrinho } from '@/Carrinho'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const pesquisa = ref('')
  const emFoco = ref(false)

  const livrosFiltrados = computed(() => {
    if (pesquisa.value === '') {
      return 
    } else {

      return Livros.value.filter((livro) => 
        livro.titulo.charAt(0).toLowerCase() === pesquisa.value.charAt(0).toLowerCase()
      );
    }
  })

  function adicionarAoCarrinho(livro: Livro) {
    carrinho.value.push(livro)

    setTimeout(() => {
      router.push('/carrinho')
    }, 1000)
  }

  function desfocarComAtraso() {
  setTimeout(() => {
    emFoco.value = false
  }, 200)
}


</script>



<template>
  <nav>
    <router-link to="/">
      <span><p>IFbooks</p></span>
    </router-link>
    
    <div>
    <input 
      type="text" 
      placeholder="Pesquisar" 
      v-model="pesquisa"
      @focus="emFoco = true"
      @blur="desfocarComAtraso"
    >
    <div class="livros" v-show="emFoco">
        <div v-for="(livro, index) in livrosFiltrados" :key="index" class="livro-card">
          <img :src="livro.imagem" alt="">
          <h2>{{ livro.titulo }}</h2>
          <span>{{ livro.autor }}</span>
          <p>R$ {{ livro.preco }}</p>
          <button @click="adicionarAoCarrinho(livro)">Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
   
    <ul>
      <router-link to="/termos">
        <li>Termos</li>
      </router-link>
      <router-link to="/equipe">
        <li>Equipe</li>
      </router-link>
      <router-link to="/envio">
        <li>Envio</li>
      </router-link>
      <router-link to="/devolucoes">
        <li>Devoluções</li>
      </router-link>
      <router-link to="/carrinho">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
          </svg>
        </li>
      </router-link>
    </ul>
  </nav>

  
</template>


<style scoped>
 nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw 2vw;
  background-color: #F9FAFB;
  color: white;
  border-bottom: solid #4A90E2 2px;
}

nav input {
  height: 36px;
  width: 300px;
  padding: 0 10px;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  position: relative;
}

nav ul {
  display: flex;
  gap: 2vw;
}

nav li {
  list-style: none;
  cursor: pointer;
  font-weight: 500;
  transition: color 0.2s;
  color: #2C3E50;
}

nav li:hover {
  color: #415a74;
}

a{
  text-decoration: none;
}

.livros{
  text-align: center;
  background-color: #f9fafb00;
  width: 40rem;
  position: absolute;
  z-index: 10;
}

.livro-card{
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 2rem;
  padding: 1rem;
  border-radius: 20px;
  background-color: white;
  margin: 10px 0 0 0;
  align-items: center;
}

.livro-card > img{
  width: 4rem;
}

.livro-card > p{
  color: #2C3E50;
}

.livro-card > h2{
  color: #2C3E50;
}

.livro-card > span{
  color: #2C3E50;
  
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