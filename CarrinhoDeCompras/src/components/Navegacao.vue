<template>
    <nav>
      <span><p>IFbooks</p></span>
      <input type="text" placeholder="Pesquisar">
      <ul>
        <li>Termos</li>
        <li>Equipe</li>
        <li>Envio</li>
        <li>Devoluçoes</li>
      </ul>
    </nav>
</template>

<style scoped>
  nav{
    display: flex;
    justify-content: center;
  }
 ul{
  display: flex;
  
 }
 li{
  list-style: none;
  margin: 10px 100px 10px 100px;
  font-size: 0.8vw;
 }
 span{
  p{
    font-size: 1vw;
  }
 }
 input{
  padding: 10px 10vw 0 0;
  margin: 0.7vw 100px 10px 100px;
  height: 40px;
  font-size: 0.8vw;
 }

</style>