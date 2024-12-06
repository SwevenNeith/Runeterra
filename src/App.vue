<script setup></script>

<template>
  <a href="/">Home</a>
  <a href="/account">Account</a>
  <a href="/classe">Classes</a>
  <router-view />
  <!---->
</template>

<style>
#app {
  width: 100vw;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
