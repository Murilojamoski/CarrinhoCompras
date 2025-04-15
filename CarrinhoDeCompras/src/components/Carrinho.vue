<script setup lang="ts">
import { carrinho } from './carrinho'
</script>

<template>
  <div class="Carrinho">
    <h1>Itens no carrinho</h1>
    <div v-if="carrinho.length === 0">
      <p>Nenhum item adicionado ainda.</p>
    </div>
    <div v-else>
      <div v-for="livro in carrinho" :key="livro.titulo">
        <p>{{ livro.titulo }} - R$ {{ livro.preco }}</p>
      </div>
    </div>
  </div>
</template>
