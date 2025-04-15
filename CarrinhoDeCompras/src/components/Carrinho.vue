<script setup lang="ts">
import { computed } from 'vue';
import { carrinho } from '../Carrinho'


const agrupados = computed(()=>{

  const resultado : {titulo: string, preco: number, quantidade: number}[]= []

  for(const livro of carrinho.value){
    const encontrado = resultado.find(item => item.titulo === livro.titulo)

    if(encontrado){
      encontrado.quantidade++
    } 
    else{
      resultado.push({ titulo: livro.titulo, preco: livro.preco, quantidade: 1})
    }
  }

  return resultado
})


const total = computed(()=>{
  return agrupados.value.reduce((soma, item) => soma + item.preco * item.quantidade, 0)
})
</script>

<template>
  <div class="Carrinho">
    <h1>Itens no carrinho</h1>
    <div v-if="carrinho.length === 0">
      <p>Nenhum item adicionado ainda.</p>
    </div>
    <div v-else>
      <div v-for="livro in agrupados">
        <p>{{ livro.quantidade }}x {{ livro.titulo }} - R$ {{ (livro.preco * livro.quantidade).toFixed(2) }}</p>      
      </div>
      <p><strong>Total:</strong> R$ {{ total.toFixed(2) }}</p>
    </div>
  </div>
</template>
