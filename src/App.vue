<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerCmp from './components/header.vue'
</script>

<template>
  <header>
    <headerCmp msg="PreQ" />
    
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/host">Host</RouterLink>
      <RouterLink to="/queuer">Queuer</RouterLink>
    </nav>
  </header>
  <div class="main-app">
  <RouterView />
</div>
</template>

