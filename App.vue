<script setup>
import { ref } from 'vue'
import Wagas from 'Wagas.vue'
  
const posts = ref([
  { id: 1, mass: 15, optional: [0,1,30],},
  { id: 2, mass: 15, optional: [0,1,30],},
  { id: 3, mass: 15, optional: [0,1,30],},
  { id: 4, mass: 15, optional: [0,1,30],},
  { id: 5, mass: 15, optional: [0,1,30],}
])
</script>

<template>
	<Wagas
    v-for="post in posts"
	  :key="post.id"
  	:title="post.id"
    :mass="post.mass"
    :optional="post.optional"
	></Wagas>
</template>
