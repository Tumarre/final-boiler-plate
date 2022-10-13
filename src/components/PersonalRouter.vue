<template>
  <router-link :to="route" style="color: #393f81">Register here </router-link>
</template>

<script setup>
defineProps({
  route: String,
  buttonText: String,
});
</script>

<style></style>
