<script setup></script>

<template>
  <a href="/">Home</a>
  <a href="/account">Account</a>
  <a href="/classe">Classes</a>
  <a href="/voies">Voies</a>
  <router-view />
  <!---->
</template>

<style>
#app {
  width: 100vw;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column; /* Place l'ensemble des éléments dans 1 colonne */
}
</style>
