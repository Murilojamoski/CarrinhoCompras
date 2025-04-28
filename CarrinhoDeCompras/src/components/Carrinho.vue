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

const removerItem = (titulo: string)=>{   
  const filtro = carrinho.value.findIndex(livro => livro.titulo === titulo)
  if(filtro !== -1){
    carrinho.value.splice(filtro, 1)
  }
}

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
    <hr>
    <div v-for="livro in agrupados" class="item">
      <div class="item-info">
        <h3>{{ livro.titulo }}</h3>
        <span>Quantidade: {{ livro.quantidade }}</span>
      </div>
      <div class="item-preco">
        <span>R$ {{ (livro.preco * livro.quantidade).toFixed(2) }}</span>
        <button class="Remover"   @click="removerItem(livro.titulo)"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
</svg></button>    
      </div>
    </div>
    <div class="total">
      <span>Total:</span>
      <span>R$ {{ total.toFixed(2) }}</span>
    </div>
  </div>
</div>
</template>

<style>
.Carrinho {
  max-width: 1000px;
  margin: 50px auto;
  padding: 2vw;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.Carrinho h1 {
  margin-bottom: 1.5rem;
  color: #2c3e50;
  font-size: 1.8rem;
}

.Carrinho .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}


.Carrinho .item-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.Carrinho .item-info h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #34495e;
}

.Carrinho .item-info span {
  font-size: 0.95rem;
  color: #7f8c8d;
}

.item-preco {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.item-preco span {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
}

.Carrinho .Remover {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  transition: background 0.3s ease;
}

.Carrinho .Remover svg {
  width: 22px;
  height: 22px;
  fill: #e74c3c;
  transition: fill 0.3s ease;
}

.Carrinho .Remover:hover svg {
  fill: #c0392b;
}

.Carrinho .total {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
}

.Carrinho .btn-checkout {
  margin-top: 1.5rem;
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
}

.Carrinho .btn-checkout:hover {
  background-color: #1e8c4f;
}



</style>